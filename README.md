# 陈标聪的私人数字作品 — V4

一份编译于深圳的私人礼物。三幕：MUSIC → FOOTBALL → SCREEN。

> CHEN BIAOCONG · 陈标聪 · 2026 · Shenzhen

## 运行

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## 体验

全屏交互 Deck（15 Scene）：滚轮 / 方向键 / 空格 / 触屏。

```
OPENING   CHEN BIAOCONG · 陈标聪 · MUSIC / FOOTBALL / SCREEN · ENTER
ACT I     MUSIC → JAY CHOU → KHALIL FONG → CHEER CHEN → CONTACT SHEET
ACT II    FOOTBALL → MIA SAN MIA. → MATCHDAY → DEUTSCHLAND
ACT III   SCREEN → FRIENDS (AGAIN?) → RACHEL GREEN → ON YOUR SHELF
ENDING    MADE IN SHENZHEN. / Not exactly. / MADE FOR YOU, IN SHENZHEN. 陈标聪
```

ENTER 后启动声音。右下角 ♪ 开关，mute 状态被记住。

## 音频（Audio Director）

三幕配乐，单音频源统一管理（fadeIn/Out、幕切换、startAt、mute 记忆）：

| 幕 | 曲目 | 起点 |
|---|---|---|
| ACT I MUSIC | 方大同《才二十三》 | 0:00 |
| ACT II FOOTBALL | FC Bayern 队歌 | `startAt: null`（待人工填高潮秒数） |
| ACT III SCREEN | Eric Clapton《Wonderful Tonight》 | 0:00（开头吉他） |

音频已就绪（B 站 Hi-Res 源，已裁剪）：
- `public/audio/music.mp3` — 才二十三（完整 3:45）
- `public/audio/bayern.mp3` — 拜仁队歌（从 45s 高潮段起，2:55）
- `public/audio/screen.mp3` — Wonderful Tonight（完整 3:43）
源文件保留在 `src/data/audio-source/`；重裁剪可改 `scripts/audio-prep.mjs` 的 START_AT 后重跑。
切换逻辑在 `src/audio/AudioDirector.tsx`：MUSIC→FOOTBALL 快速 fadeout + 停顿 + 硬进；FOOTBALL→SCREEN 渐退 + 吉他进入。

## 专辑（FEATURED RECORDS，均有数据支撑）

- JAY：十一月的萧邦 / 叶惠美 / 七里香（豆瓣五星 + QQ 收藏）
- KHALIL：爱爱爱 / 未来 / 橙月（QQ 收藏 / 豆瓣五星 + QQ）
- CHEER：让我想一想 / Groupies 吉他手 / 华丽的冒险（豆瓣五星 + QQ）

## 数据

- 豆瓣 111 音乐 / 118 影视原始采集：`src/data/_douban_*`
- QQ 音乐「我喜欢」+ 32 歌单：`src/data/_qqmusic_*`
- 照片来源元数据：`src/assets/photos/*.json`

---

## V9 — ppppettis Identity System

CHEN BIAOCONG 是这个人，ppppettis 是签名——两个层级，不并排：
1. Opening 右下角微埋 `ppppettis`（像 catalogue number）
2. 首次选择专辑后轻出现 `picked by ppppettis`（仅一次）
3. THE CRATE 唱片箱上手写标签 `ppppettis`
4. MATCHDAY 进场票卡持票人 `ppppettis`
5. Rachel 页右下 `ppppettis.`
6. Ending 最后只剩 `ppppettis_`（光标闪烁），与 Opening 呼应

## Production（V8）

- **线上地址**：https://huangmingjie36.github.io/sz-gift/
- **部署方式**：GitHub Pages（gh-pages 分支，静态托管）
- **重新部署**：`node scripts/deploy.mjs`（npm run build → 推 gh-pages 分支 → Pages 自动更新）
- **self-contained**：图片/音频/字体 fallback 全部随站发布，无第三方图片依赖、无 localhost、无本地路径
- **OG**：title「陈标聪」+ 极简 og.png（不剧透）
