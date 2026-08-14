import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
mkdirSync(".shots", { recursive: true });
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });
await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.waitForTimeout(4500);
const ids = ["opening","music-intro","jay","khalil","cheer","sheet","inter-foot","mia","matchday","deutschland","inter-screen","friends","rachel","shelf","ending"];
for (let i = 0; i < ids.length; i++) {
  if (i > 0) { await page.keyboard.press("ArrowDown"); await page.waitForTimeout(1250); }
  await page.screenshot({ path: `.shots/v4-${String(i).padStart(2, "0")}-${ids[i]}.png` });
  console.log(ids[i], "shot");
}
console.log("ALL DONE");
await browser.close();
