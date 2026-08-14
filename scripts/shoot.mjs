// V0 视觉审查截图工具 —— node scripts/shoot.mjs
import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUT = ".shots";
mkdirSync(OUT, { recursive: true });

const sections = ["opening", "sound", "friends", "bayern", "fragments", "you", "ending"];

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });

await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.waitForTimeout(3200);

// full page
await page.screenshot({ path: `${OUT}/full-desktop.png`, fullPage: true });
console.log("full-desktop done");

// per section: scroll into view, wait for reveals, screenshot
for (const id of sections) {
  await page.evaluate((sid) => {
    document.getElementById(sid)?.scrollIntoView({ block: "start" });
  }, id);
  await page.waitForTimeout(1900);
  await page.screenshot({ path: `${OUT}/${id}-desktop.png` });
  console.log(`${id} done`);
}

// mobile
const mp = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
await mp.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await mp.waitForTimeout(3000);
for (const id of ["opening", "sound", "friends", "bayern", "fragments", "you", "ending"]) {
  await mp.evaluate((sid) => document.getElementById(sid)?.scrollIntoView({ block: "start" }), id);
  await mp.waitForTimeout(1700);
  await mp.screenshot({ path: `${OUT}/${id}-mobile.png` });
  console.log(`${id} mobile done`);
}
await mp.screenshot({ path: `${OUT}/full-mobile.png`, fullPage: true });

await browser.close();
console.log("ALL SHOTS DONE");
