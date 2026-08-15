import { chromium } from "playwright-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text().slice(0, 80)); });
await page.goto("http://localhost:4175/", { waitUntil: "networkidle" });
await page.waitForTimeout(3000);
await page.click(".enter-btn"); await page.waitForTimeout(1000);
// CD open
await page.click(".cd-case:nth-child(1)"); await page.waitForTimeout(1000);
console.log("cd open:", await page.evaluate(() => !!document.querySelector(".cd-scene__case-open")));
await page.keyboard.press("Escape"); await page.waitForTimeout(700);
// Khalil pick
await page.keyboard.press("ArrowDown"); await page.waitForTimeout(1100);
await page.click(".vinyl-record:nth-child(2)"); await page.waitForTimeout(1000);
console.log("khalil picked:", await page.evaluate(() => document.querySelector(".vinyl-scene__picked-name")?.textContent));
await page.keyboard.press("Escape"); await page.waitForTimeout(700);
// Cheer 翻页
await page.keyboard.press("ArrowDown"); await page.waitForTimeout(1100);
await page.click(".book-scene__nav-btn:nth-child(3)"); await page.waitForTimeout(700);
console.log("cheer page:", await page.evaluate(() => document.querySelector(".book-scene__nav-pos")?.textContent));
// TV → Rachel
for (let i = 0; i < 7; i++) { await page.keyboard.press("ArrowDown"); await page.waitForTimeout(700); }
await page.waitForTimeout(1500);
await page.click(".tv-scene__tv"); await page.waitForTimeout(1500);
await page.click(".friends-scene__name-btn:first-child"); await page.waitForTimeout(1500);
console.log("rachel pos:", await page.evaluate(() => document.querySelector(".decknav__pos")?.textContent));
// Ending
for (let i = 0; i < 2; i++) { await page.keyboard.press("ArrowDown"); await page.waitForTimeout(800); }
await page.waitForTimeout(2500);
await page.click(".ending-scene__title"); await page.waitForTimeout(700);
console.log("ending egg:", await page.evaluate(() => document.querySelector(".ending-scene__egg")?.textContent));
console.log("errors:", errors.length ? errors.slice(0, 4).join(" | ") : "none");
await browser.close();
