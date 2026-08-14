// ============================================================
//  AUDIO PREP — 把源音频转成三幕成品（全程静默，不播放）
//
//  用法：
//    node scripts/audio-prep.mjs            # 处理三首
//    node scripts/audio-prep.mjs --analyze  # 分析拜仁响度，帮助找高潮秒数
//
//  源文件约定（放入 public/audio/）：
//    source-music.mp3|m4a|flac|wav   方大同《才二十三》
//    source-bayern.mp3|m4a|flac|wav  FC Bayern 队歌
//    source-screen.mp3|m4a|flac|wav   Wonderful Tonight
//
//  输出：public/audio/music.mp3 / bayern.mp3 / screen.mp3
//  拜仁高潮秒数：改 START_AT（null = 从 0:00）
// ============================================================
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

const FF = "/Users/huangmingjie/Library/Python/3.9/lib/python/site-packages/imageio_ffmpeg/binaries/ffmpeg-macos-aarch64-v7.1";
const AUDIO_DIR = "public/audio";
const START_AT = null; // ← 拜仁高潮秒数，例如 90.5
const VOL = 0.9;

function findSource(name) {
  for (const f of [`source-${name}.mp3`, `source-${name}.m4a`, `source-${name}.flac`, `source-${name}.wav`]) {
    if (existsSync(`${AUDIO_DIR}/${f}`)) return `${AUDIO_DIR}/${f}`;
  }
  return null;
}

function probeDuration(src) {
  const out = execFileSync(FF, ["-i", src, "-f", "null", "-"], { stdio: ["ignore", "pipe", "pipe"] }).toString();
  const m = out.match(/Duration: (\d+):(\d+):([\d.]+)/);
  return m ? Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]) : 30;
}

function build(name, startAt, fadeIn, fadeOut, maxDur = null) {
  const src = findSource(name);
  const out = `${AUDIO_DIR}/${name}.mp3`;
  if (!src) { console.log(`SKIP ${name}: 无源文件（保留占位静音）`); return; }
  let total = Math.max(probeDuration(src) - (startAt ?? 0), 1);
  if (maxDur) total = Math.min(total, maxDur);
  const fadeOutStart = Math.max(total - fadeOut, 0).toFixed(2);
  const filter = `afade=t=in:st=0:d=${fadeIn},afade=t=out:st=${fadeOutStart}:d=${fadeOut},volume=${VOL}`;
  const args = ["-y", "-hide_banner", "-loglevel", "error"];
  if (startAt && startAt > 0) args.push("-ss", String(startAt));
  args.push("-i", src, "-t", String(total), "-af", filter, "-ar", "44100", "-ac", "2", "-b:a", "192k", out);
  execFileSync(FF, args);
  console.log(`OK ${name}: startAt=${startAt ?? 0}s → ${total.toFixed(1)}s (${src})`);
}

function analyze(name) {
  const src = findSource(name);
  if (!src) { console.log(`ANALYZE ${name}: 无源文件`); return; }
  const out = execFileSync(FF, ["-i", src, "-af", "ebur128=peak=true", "-f", "null", "-"], { stdio: ["ignore", "pipe", "pipe"] }).toString();
  const last = out.split("\n").filter((l) => /I:|LRA:|Peak:/.test(l)).slice(-4).join(" | ");
  console.log(`ANALYZE ${name}: ${last}`);
}

if (process.argv[2] === "--analyze") {
  analyze("bayern");
  analyze("music");
  analyze("screen");
} else {
  console.log("=== AUDIO PREP ===");
  build("music", 0, 0.8, 3.5);
  build("bayern", START_AT ?? 0, 0.4, 4);
  build("screen", 0, 2.5, 6);
  console.log("=== DONE ===");
}
