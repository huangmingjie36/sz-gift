import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUT = ".shots";
mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });
await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.waitForTimeout(3200);
await page.screenshot({ path: `${OUT}/v2-full.png`, fullPage: true });
const sections = ["opening", "core", "record", "living", "matchday", "deepcuts", "dna", "you", "ending"];
for (const id of sections) {
  await page.evaluate((sid) => document.getElementById(sid)?.scrollIntoView({ block: "start" }), id);
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${OUT}/v2-${id}.png` });
  console.log(id, "done");
}
await browser.close();
console.log("ALL DONE");
