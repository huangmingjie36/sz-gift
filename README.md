# THE PRIVATE UNIVERSE OF A FRIEND

一份编译于深圳的私人数字礼物 —— 基于豆瓣 + QQ 音乐真实收藏数据。

> A map of the things he kept coming back to.

## 运行

```bash
npm install
npm run dev      # 本地开发 http://localhost:5173
npm run build    # 产物构建（tsc + vite）
npm run preview  # 预览构建产物
```

## 章节

OPENING → THE CORE → THE RECORD ROOM → THE LIVING ROOM → MATCHDAY → DEEP CUTS → CULTURAL DNA → YOU, ACCORDING TO ME → MADE IN SHENZHEN

## 目录

```
src/
  data/content.ts        ← 全部展示数据（真实收藏，便于替换）
  data/_douban_music_raw.json  ← 豆瓣音乐 111 张原始采集
  data/_douban_movie_raw.json  ← 豆瓣影视 118 部原始采集
  data/_qqmusic_*.txt    ← QQ音乐「我喜欢」采集记录
  components/            ← Grain / Cursor / Reveal / Ticker / ChapterBar / Stadium …
  sections/              ← Core / RecordRoom / LivingRoom / Matchday / DeepCuts / Dna / You / Ending
  styles/global.css      ← 设计系统
CULTURAL_PROFILE.md      ← 文化分析档案
```

## 数据来源（只读采集，2026-08）

- 豆瓣：听过的音乐 111 张 / 看过的影视 118 部（含评分、短评、收藏日期）
- QQ 音乐「我喜欢」：专辑 56 张 / 歌曲 44 首（采集时 Mac 锁屏，歌单未采）
- 分析结论见 `CULTURAL_PROFILE.md`

## 预览截图

```bash
node scripts/shoot.mjs   # 生成 .shots/ 下各章节截图（需要本机 Chrome）
```
