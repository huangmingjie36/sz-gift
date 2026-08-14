// B 站公开 API 下载最佳音频轨（bvid → cid → playurl → curl）
import { execFileSync } from "node:child_process";
import { writeFileSync, existsSync, statSync } from "node:fs";

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";
const curl = (url, out) => execFileSync("curl", ["-s", "-m", "120", "-L", "-A", UA, "-e", "https://www.bilibili.com/", "-o", out, url]);

const [bvid, out] = process.argv.slice(2);
const view = JSON.parse(execFileSync("curl", ["-s", "-m", "20", "-A", UA, "-e", "https://www.bilibili.com/", `https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`]).toString());
if (view.code !== 0) { console.log("view fail", view.message); process.exit(1); }
const cid = view.data.cid;
const title = view.data.title;
console.log("cid:", cid, "|", title.slice(0, 40));
const play = JSON.parse(execFileSync("curl", ["-s", "-m", "20", "-A", UA, "-e", "https://www.bilibili.com/", `https://api.bilibili.com/x/player/playurl?bvid=${bvid}&cid=${cid}&fnval=16&qn=64&platform=pc`]).toString());
const audios = play.data?.dash?.audio || [];
if (!audios.length) { console.log("no audio"); process.exit(1); }
// 选最高码率
const best = audios.sort((a, b) => b.bandwidth - a.bandwidth)[0];
console.log("audio id:", best.id, "bandwidth:", best.bandwidth);
curl(best.baseUrl, out);
const size = existsSync(out) ? statSync(out).size : 0;
console.log("saved:", out, Math.round(size / 1024) + "KB");
writeFileSync(out + ".meta.json", JSON.stringify({ bvid, title, cid, audioId: best.id, source: "bilibili " + bvid }, null, 1));
