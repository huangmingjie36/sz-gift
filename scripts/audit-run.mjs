import { chromium } from "playwright-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text().slice(0, 100)); });
page.on("pageerror", (e) => errors.push("PAGEERR " + e.message.slice(0, 100)));

console.log("=== TEST 1: Scene 快速翻页压力 ===");
await page.goto("http://localhost:4175/", { waitUntil: "networkidle" });
await page.waitForTimeout(3000);
await page.click(".enter-btn");
await page.waitForTimeout(800);
// 极快速连续按 ArrowDown x20（不等）
for (let i = 0; i < 20; i++) { await page.keyboard.press("ArrowDown"); }
await page.waitForTimeout(3000);
console.log("  pos after 20 fast downs:", await page.evaluate(() => document.querySelector(".decknav__pos")?.textContent));
// 反向快速
for (let i = 0; i < 20; i++) { await page.keyboard.press("ArrowUp"); }
await page.waitForTimeout(3000);
console.log("  pos after 20 fast ups:", await page.evaluate(() => document.querySelector(".decknav__pos")?.textContent));
// 交替
for (let i = 0; i < 10; i++) { await page.keyboard.press("ArrowDown"); await page.keyboard.press("ArrowUp"); }
await page.waitForTimeout(2500);
console.log("  pos after alternation:", await page.evaluate(() => document.querySelector(".decknav__pos")?.textContent));
console.log("  lock released (can move):", await (async () => { await page.keyboard.press("ArrowDown"); await page.waitForTimeout(1200); return true; })());

console.log("=== TEST 2: localStorage 损坏 ===");
await page.evaluate(() => { localStorage.setItem("chen-album-choices", "{broken json!!"); localStorage.setItem("chen-audio-muted", "###"); });
await page.reload({ waitUntil: "networkidle" });
await page.waitForTimeout(3500);
console.log("  after corrupt localStorage, title:", await page.title());
console.log("  broken imgs:", await page.evaluate(() => [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).length));
console.log("  audio toggle state:", await page.evaluate(() => document.querySelector(".sound-toggle")?.classList.contains("is-muted")));

console.log("=== TEST 3: Audio mute → 切 Act ===");
await page.click(".sound-toggle");
await page.waitForTimeout(400);
await page.click(".enter-btn");
await page.waitForTimeout(1000);
for (let i = 0; i < 5; i++) { await page.keyboard.press("ArrowDown"); await page.waitForTimeout(700); }
await page.waitForTimeout(1500);
console.log("  after mute + act switch, audio paused:", await page.evaluate(() => document.querySelector("audio")?.paused));

console.log("=== TEST 4: 重复点击 Album + ESC ===");
for (let i = 0; i < 3; i++) { await page.keyboard.press("ArrowUp"); await page.waitForTimeout(500); }
await page.waitForTimeout(1200);
await page.click(".cd-case:nth-child(1)");
await page.click(".cd-case:nth-child(1)");
await page.waitForTimeout(800);
console.log("  double click album, detail:", await page.evaluate(() => !!document.querySelector(".cd-scene__case-open")));
await page.keyboard.press("Escape");
await page.waitForTimeout(700);
console.log("  after ESC:", await page.evaluate(() => !document.querySelector(".cd-scene__case-open")));

console.log("errors:", errors.length ? errors.slice(0, 6).join(" | ") : "none");
await browser.close();
