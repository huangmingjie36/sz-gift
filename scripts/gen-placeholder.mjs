import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";

const FF = "/Users/huangmingjie/Library/Python/3.9/lib/python/site-packages/imageio_ffmpeg/binaries/ffmpeg-macos-aarch64-v7.1";
mkdirSync("public/audio", { recursive: true });

for (const name of ["music", "bayern", "screen"]) {
  const out = `public/audio/${name}.mp3`;
  if (existsSync(out)) { console.log("exists:", out); continue; }
  execFileSync(FF, ["-y", "-hide_banner", "-loglevel", "error", "-f", "lavfi", "-i", "anullsrc=r=44100:cl=stereo", "-t", "1", "-q:a", "9", out]);
  console.log("placeholder:", out);
}
