// 用真实 Chrome 打开 B 站视频页，抓音频直链并下载
import { chromium } from "playwright-core";
import { execFileSync } from "node:child_process";
import { writeFileSync, existsSync, statSync } from "node:fs";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const ctx = await browser.newContext({
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
});
const page = await ctx.newPage();

const audioUrls = new Set();
page.on("request", (r) => {
  const u = r.url();
  if (u.includes("bilivideo.com") && u.includes(".m4s")) {
    // 30280 / 30216 = 音频流；100023+ = 视频流
    const m = u.match(/-(\d+)\.m4s/);
    if (m && (m[1].startsWith("302") || m[1] === "3004")) audioUrls.add(u);
  }
});

const bvid = process.argv[2];
const out = process.argv[3];
await page.goto(`https://www.bilibili.com/video/${bvid}/`, { waitUntil: "domcontentloaded", timeout: 45000 }).catch((e) => console.log("goto err", e.message.slice(0, 60)));
await page.waitForTimeout(6000);
// 触发播放器加载音频
try { await page.mouse.click(400, 400); } catch {}
await page.waitForTimeout(4000);
console.log("audio urls:", audioUrls.size);
const list = [...audioUrls];
if (list.length === 0) {
  console.log("no audio url captured");
  await browser.close();
  process.exit(1);
}
// 下载第一个音频直链（带 referer + UA）
const url = list[0];
execFileSync("curl", ["-s", "-m", "60", "-L", "-A", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126.0 Safari/537.36", "-e", "https://www.bilibili.com/", "-o", out, url]);
const size = existsSync(out) ? statSync(out).size : 0;
console.log("downloaded:", out, Math.round(size / 1024) + "KB");
await browser.close();
