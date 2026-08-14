import { chromium } from "playwright-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text().slice(0, 90)); });
page.on("pageerror", (e) => errors.push(e.message.slice(0, 90)));
await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.waitForTimeout(3000);
await page.click(".enter-btn");
await page.waitForTimeout(1200);

// 1) 专辑展开 + ESC
await page.click(".shelf__cell:nth-child(1)");
await page.waitForTimeout(1300);
console.log("detail name:", await page.evaluate(() => document.querySelector(".shelf__copy-name")?.textContent));
await page.keyboard.press("Escape");
await page.waitForTimeout(900);
console.log("closed:", await page.evaluate(() => !document.querySelector(".shelf__detail")));

// 2) 选择记录
await page.click(".shelf__cell:nth-child(2)");
await page.waitForTimeout(900);
console.log("choices:", await page.evaluate(() => localStorage.getItem("chen-album-choices")));
await page.keyboard.press("Escape");
await page.waitForTimeout(900);

// 3) 连点彩蛋（点-关 三次）
for (let i = 0; i < 3; i++) {
  await page.waitForSelector(".shelf__cell:nth-child(1)", { timeout: 5000 });
  await page.click(".shelf__cell:nth-child(1)");
  await page.waitForTimeout(500);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(700);
}
await page.waitForTimeout(800);
console.log("egg opacity:", await page.evaluate(() => getComputedStyle(document.querySelector(".shelf__egg")).opacity));

// 4) Olise
for (let i = 0; i < 7; i++) { await page.keyboard.press("ArrowDown"); await page.waitForTimeout(800); }
await page.waitForTimeout(1200);
console.log("olise frames:", await page.evaluate(() => document.querySelectorAll(".olise-scene__frame").length));
await page.click(".olise-scene__frame:nth-child(3)");
await page.waitForTimeout(800);
console.log("olise switched:", (await page.evaluate(() => document.querySelector(".olise-scene__stage img")?.getAttribute("src")))?.includes("france") || false);
await page.click(".olise-scene__ball");
await page.waitForTimeout(500);
console.log("olise ball:", await page.evaluate(() => document.querySelector(".olise-scene__ball-label")?.textContent));

// 5) Friends → Rachel
for (let i = 0; i < 3; i++) { await page.keyboard.press("ArrowDown"); await page.waitForTimeout(800); }
await page.waitForTimeout(1500);
await page.click(".friends-scene__bg");
await page.waitForTimeout(1800);
console.log("after friends click:", await page.evaluate(() => document.querySelector(".decknav__pos")?.textContent));

// 6) Rachel 双击
await page.dblclick(".rachel-scene__photo");
await page.waitForTimeout(700);
console.log("rachel egg:", await page.evaluate(() => getComputedStyle(document.querySelector(".rachel-scene__egg")).opacity));

// 7) Ending 彩蛋
for (let i = 0; i < 2; i++) { await page.keyboard.press("ArrowDown"); await page.waitForTimeout(900); }
await page.waitForTimeout(2200);
await page.click(".ending-scene__title");
await page.waitForTimeout(700);
console.log("ending egg:", await page.evaluate(() => document.querySelector(".ending-scene__egg")?.textContent));
console.log("errors:", errors.length ? errors.join(" | ") : "none");
await browser.close();
