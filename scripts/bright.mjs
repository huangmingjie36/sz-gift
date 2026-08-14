import { chromium } from "playwright-core";
import { readFileSync } from "node:fs";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage();
await page.setContent("<canvas id='c'></canvas>");
const chars = " .:-=+*#%@";
async function art(path, W, H) {
  const png = readFileSync(path);
  const b64 = png.toString("base64");
  return page.evaluate(async ({ b64, chars, W, H }) => {
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = "data:image/png;base64," + b64; });
    const c = document.getElementById("c");
    c.width = W; c.height = H;
    const ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0, W, H);
    const d = ctx.getImageData(0, 0, W, H).data;
    let out = "";
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const i = (y * W + x) * 4;
        const lum = (0.2126*d[i] + 0.7152*d[i+1] + 0.0722*d[i+2]) / 255;
        out += chars[Math.min(chars.length-1, Math.floor(lum * chars.length))];
      }
      out += "\n";
    }
    return out;
  }, { b64, chars, W, H });
}
for (const id of process.argv.slice(2)) {
  console.log(`===== ${id} =====\n` + await art(`.shots/${id}.png`, 96, 30));
}
await browser.close();
