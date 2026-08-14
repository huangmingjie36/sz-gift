# THE PRIVATE UNIVERSE OF [NAME]

一份编译于深圳的私人数字礼物 —— V0 视觉原型。

> A gift compiled in Shenzhen.

## 运行

```bash
npm install
npm run dev      # 本地开发 http://localhost:5173
npm run build    # 产物构建（tsc + vite）
npm run preview  # 预览构建产物
```

## 目录

```
src/
  data/content.ts    ← 所有文字 / 章节 / 占位内容都在这里，替换内容优先改它
  assets/            ← 占位图（SVG），以后换成真实照片/歌单封面
  components/        ← Grain / Cursor / Reveal / Ticker / ChapterBar / Stadium …
  sections/          ← Opening · Sound · Friends · Bayern · Fragments · You · Ending
  styles/global.css  ← 设计系统：色彩、字号、动效、各章节排版
  lib/scroll.ts      ← Lenis 平滑滚动单例
```

## 以后要替换的内容（全部集中在 `src/data/content.ts`）

- 主人公姓名：`meta.name`
- 三位音乐人：`sound.artists`
- 老友记随机短句：`friends.quotes`
- Fragments 碎片：`fragments.polaroids` / `fragments.note` / `fragments.ticket`
- 结尾文案：`ending`
- 图片：把 `src/assets/*.svg` 换成真实图片，并在 `content.ts` 里替换 import 即可

## 预览截图

```bash
node scripts/shoot.mjs   # 生成 .shots/ 下各章节截图（需要本机 Chrome）
```

## 设计基调

Editorial · Cinematic · Analog · Minimal —— 不追模板感，宁可少，宁可留白。
