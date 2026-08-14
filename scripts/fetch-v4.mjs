import { chromium } from "playwright-core";
import { execSync } from "node:child_process";
import { writeFileSync, existsSync, statSync } from "node:fs";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const ctx = await browser.newContext({ userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36" });
const page = await ctx.newPage();
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126.0.0.0 Safari/537.36";

async function dl(url, path) {
  try {
    execSync(`curl -s -m 30 -L -A "${UA}" -e "https://www.douban.com/" -o "${path}" "${url}"`);
    const size = existsSync(path) ? statSync(path).size : 0;
    if (size > 15000) { console.log("OK", path.split("/").pop(), Math.round(size / 1024) + "KB"); return true; }
    console.log("SMALL", path.split("/").pop(), size);
  } catch (e) { console.log("DL ERR", e.message.slice(0, 50)); }
  return false;
}

async function albumCover(subjectUrl, name) {
  try {
    await page.goto(subjectUrl, { waitUntil: "domcontentloaded", timeout: 25000 });
    await page.waitForTimeout(1300);
    const img = await page.evaluate(() => document.querySelector('meta[property="og:image"]')?.content || document.querySelector("#mainpic img")?.src || null);
    if (img) await dl(img, `src/assets/photos/cover-music-${name}.jpg`);
  } catch (e) { console.log("ERR", name, e.message.slice(0, 50)); }
}

// 3 张已知 subject 封面
await albumCover("https://music.douban.com/subject/1436975/", "十一月的萧邦");
await albumCover("https://music.douban.com/subject/2359692/", "未来");
await albumCover("https://music.douban.com/subject/1788941/", "让我想一想");

// 爱爱爱：豆瓣搜索
try {
  await page.goto("https://search.douban.com/music/subject_search?search_text=" + encodeURIComponent("爱爱爱 方大同"), { waitUntil: "domcontentloaded", timeout: 25000 });
  await page.waitForTimeout(1500);
  const img = await page.evaluate(() => document.querySelector(".item-root .cover img, .sc-bZQynM img")?.src || null);
  console.log("爱爱爱 search img:", img);
  if (img) await dl(img.replace(/\/s\d+x\d+_s/, "/l"), "src/assets/photos/cover-music-爱爱爱.jpg");
} catch (e) { console.log("爱爱爱 ERR", e.message.slice(0, 60)); }

// Friends 相册翻 3 页抓更多剧照（找 Rachel）
for (let start = 0; start < 3; start++) {
  try {
    await page.goto(`https://www.douban.com/photos/album/1872818570/?start=${start * 18}`, { waitUntil: "domcontentloaded", timeout: 25000 });
    await page.waitForTimeout(1400);
    const imgs = await page.evaluate(() => [...document.querySelectorAll(".photolst img, .photo_wrap img, img[src*='doubanio']")].map((i) => i.src).filter((s) => s.includes("photo")));
    let n = 0;
    for (const src of imgs) {
      if (n >= 6) break;
      const m = src.match(/https:\/\/img\d+\.doubanio\.com\/view\/photo\/\w\/public\/(p\d+)\.\w+/);
      if (!m) continue;
      const big = `https://img1.doubanio.com/view/photo/l/public/${m[1]}.jpg`;
      const path = `src/assets/photos/friends-extra-${start}-${n}.jpg`;
      if (await dl(big, path)) n++;
    }
  } catch (e) { console.log("album ERR", e.message.slice(0, 50)); }
}
await browser.close();
