# THE PRIVATE UNIVERSE OF 陈标聪

一份编译于深圳的私人数字礼物 —— 陈标聪的私人文化宇宙。

> A PRIVATE CULTURAL UNIVERSE
> THE THINGS YOU KEPT

## 运行

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc + vite 构建
```

## 体验方式（Desktop First）

全屏交互 Deck（15 个 Scene），滚轮 / 方向键 / 空格 / 触屏翻页。
底部导航：MUSIC / SCREEN / FOOTBALL 三幕 + 页码进度。

- 打开首页 → ENTER 进入 ACT I — MUSIC
- THE THREE → OTHER VOICES → ONE ALBUM → DEEP CUTS
- II / SCREEN 幕间 → FRIENDS → AFTER CENTRAL PERK → YOUR SCREEN
- III / FOOTBALL 幕间 → MIA SAN MIA → MATCHDAY → DEUTSCHLAND
- ENDING：MADE IN SHENZHEN → Not exactly → MADE FOR YOU, IN SHENZHEN.
  - 点击 "Compiled with friendship." 有彩蛋

## 目录

```
src/
  data/scenes.ts        ← curatedContent：三幕 15 个 Scene 的全部文案与图片引用
  data/_douban_*        ← 豆瓣原始采集（111 音乐 / 118 影视，评分/短评）
  data/_qqmusic_*       ← QQ 音乐「我喜欢」采集记录
  components/Deck.tsx   ← Scene 控制器：wheel/key/touch、Transition Grammar、导航
  components/Grain.tsx / Cursor.tsx
  scenes/               ← 15 个 Scene 组件
  styles/scenes.css     ← 场景排版与转场
  styles/global.css     ← 设计系统基础（token/字体/颗粒/光标）
  assets/photos/        ← 真实摄影素材（附 source/year/context JSON）
CULTURAL_PROFILE.md     ← 文化分析档案（研究层）
```

## Transition Grammar

- MUSIC：Horizontal Slide / Cover Open（唱片架语言）
- SCREEN：Curtain（幕布拉开）+ Slide（剧照墙）
- FOOTBALL：Hard Cut / Tunnel（硬切进入球场）
- ENDING：Fade（黑场）

连续场景不使用相同转场。

## 数据原则

- QQ 音乐「我喜欢」顺序不当作排名，仅用于理解审美（不做 On Repeat / Top Songs）
- 所有评分、收藏数量属于 Evidence Layer，不出现在主视觉（除克制小字）
- 照片均来自 Wikimedia Commons / 豆瓣公开相册 / 拜仁官方 2025/26 全家福，附来源
