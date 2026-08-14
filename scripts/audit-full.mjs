import { chromium } from "playwright-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text().slice(0, 90)); });
page.on("pageerror", (e) => errors.push("PAGEERR " + e.message.slice(0, 90)));
const next = async (n = 1) => { for (let i = 0; i < n; i++) { await page.keyboard.press("ArrowDown"); await page.waitForTimeout(750); } };

await page.goto("http://localhost:4175/", { waitUntil: "networkidle" });
await page.waitForTimeout(3000);
await page.click(".enter-btn"); await page.waitForTimeout(1200);
// jay: CD
await page.click(".cd-case:nth-child(1)"); await page.waitForTimeout(900); await page.keyboard.press("Escape"); await page.waitForTimeout(700);
// khalil
await next(1);
await page.click(".vinyl-record:nth-child(2)"); await page.waitForTimeout(900); await page.keyboard.press("Escape"); await page.waitForTimeout(700);
// cheer
await next(1);
await page.click(".book-scene__nav-btn:nth-child(3)"); await page.waitForTimeout(600);
// crate
await next(1);
await page.click(".crate-scene__dot:nth-child(5)"); await page.waitForTimeout(600);
// arrival/mia/olise/deutschland/tv
await next(5);
await page.waitForTimeout(1500);
await page.click(".tv-scene__tv"); await page.waitForTimeout(1500);
// friends: Rachel
await page.click(".friends-scene__name-btn:first-child"); await page.waitForTimeout(1500);
// 回 friends 测 Chandler
await page.keyboard.press("ArrowUp"); await page.waitForTimeout(1000);
await page.click(".friends-scene__name-btn:nth-child(2)"); await page.waitForTimeout(800);
// shelf
await page.keyboard.press("ArrowDown"); await page.waitForTimeout(900);
await page.click(".shelf-scene__dvd:nth-child(4)"); await page.waitForTimeout(800); await page.keyboard.press("Escape"); await page.waitForTimeout(600);
// ending
await page.keyboard.press("ArrowDown"); await page.waitForTimeout(2400);
await page.click(".ending-scene__title"); await page.waitForTimeout(700);
console.log("end pos:", await page.evaluate(() => document.querySelector(".decknav__pos")?.textContent));
console.log("errors:", errors.length ? errors.slice(0, 6).join(" | ") : "none");

// 全分辨率
for (const s of [{ w: 1366, h: 768 }, { w: 1512, h: 982 }, { w: 1920, h: 1080 }, { w: 390, h: 844 }]) {
  const p2 = await browser.newPage({ viewport: { width: s.w, height: s.h } });
  await p2.goto("http://localhost:4175/", { waitUntil: "networkidle" });
  await p2.waitForTimeout(2500);
  const ids = ["opening","jay","khalil","cheer","crate","arrival","mia","olise","deutschland","tv","friends","rachel","shelf","ending"];
  const issues = [];
  for (let i = 0; i < ids.length; i++) {
    await p2.keyboard.press("ArrowDown");
    await p2.waitForTimeout(1400);
    const r = await p2.evaluate(() => {
      const scene = document.querySelector("[data-scene]");
      const inner = scene?.querySelector(".scene-inner");
      return inner ? { id: scene.getAttribute("data-scene"), clip: inner.scrollHeight - inner.clientHeight } : null;
    });
    if (r && r.clip > 3) issues.push(`${r.id}:${Math.round(r.clip)}`);
  }
  console.log(`  ${s.w}x${s.h}: ${issues.length ? issues.join(" ") : "clean"}`);
  await p2.close();
}

// reduced motion
const p3 = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
await p3.goto("http://localhost:4175/", { waitUntil: "networkidle" });
await p3.waitForTimeout(3000);
await p3.click(".enter-btn"); await p3.waitForTimeout(1200);
await p3.click(".cd-case:nth-child(1)"); await p3.waitForTimeout(900);
console.log("reduced motion album opens:", await p3.evaluate(() => !!document.querySelector(".cd-scene__case-open")));
await p3.close();
await browser.close();
