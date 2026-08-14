import { chromium } from "playwright-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true });
await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.waitForTimeout(3000);
// 模拟触摸滑动向上（翻下一页）
async function swipeUp() {
  await page.touchscreen.tap(195, 600);
  const box = await page.evaluate(() => ({ x: innerWidth / 2, y: innerHeight / 2 }));
  // playwright touchscreen 没有 swipe API，用 dispatchEvent 模拟 touch
  await page.evaluate(() => {
    const el = document.elementFromPoint(innerWidth / 2, innerHeight / 2);
    const opts = { bubbles: true, cancelable: true, touches: [] };
    el.dispatchEvent(new TouchEvent("touchstart", { ...opts, touches: [{ clientX: innerWidth / 2, clientY: 500 }] }));
    el.dispatchEvent(new TouchEvent("touchend", { ...opts, changedTouches: [{ clientX: innerWidth / 2, clientY: 300 }] }));
  });
  await page.waitForTimeout(1200);
}
await swipeUp();
console.log("after swipe:", await page.evaluate(() => document.querySelector(".decknav__pos")?.textContent));
await page.screenshot({ path: ".shots/v4-mobile-swipe.png" });
await browser.close();
