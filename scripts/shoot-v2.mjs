import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
mkdirSync(".shots", { recursive: true });
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });
await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.waitForTimeout(4500);
// Opening
await page.screenshot({ path: ".shots/v2deck-00-opening.png" });
// 逐场景前进（wheel 或 keyboard）
const ids = ["act-music", "three", "voices", "album", "deepcuts", "inter-screen", "friends", "after", "screen", "inter-foot", "mia", "matchday", "deutschland", "ending"];
for (let i = 0; i < ids.length; i++) {
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `.shots/v2deck-${String(i + 1).padStart(2, "0")}-${ids[i]}.png` });
  console.log(ids[i], "shot");
}
console.log("ALL DONE");
await browser.close();
