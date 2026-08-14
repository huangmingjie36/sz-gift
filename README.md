# THE PRIVATE UNIVERSE OF 陈标聪

一份编译于深圳的私人数字礼物。V3 — Art Direction Pass。

> CHEN BIAOCONG · 陈标聪 · Music / Screen / Football · 2026 Shenzhen

## 运行

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc + vite 构建
```

## 体验

全屏交互 Deck（14 个 Scene），滚轮 / 方向键 / 空格 / 触屏翻页。

```
OPENING  CHEN BIAOCONG · 陈标聪 · Music / Screen / Football · ENTER

ACT I    JAY CHOU → KHALIL FONG → CHEER CHEN → CONTACT SHEET
ACT II   FRIENDS (1994–2004 · AGAIN?) → ON YOUR SHELF → 档案（2023.07.19→08.16 · 十季 · 全五星）
ACT III  MIA SAN MIA. → MATCHDAY → DEUTSCHLAND
ENDING   MADE IN SHENZHEN. / Not exactly. / MADE FOR YOU, IN SHENZHEN. 陈标聪
         （点击 Compiled with friendship. 有彩蛋）
```

## V3 原则

- **SHOW, DON'T EXPLAIN**：无解释、无总结、无「你的关键词」
- **CURATION, NOT INTERPRETATION**：数据只用于筛选，不出现在主视觉
- **Typography Scale**：Hero 8vw（仅 Opening）/ Display 5vw / Primary 3vw / Body 16–20px
- **每屏一个核心**：一张照片 + 一个名字 + 一句很短的话
- **照片 60–75%**：音乐人演唱会/见面会、Friends 剧照、影视海报、拜仁 2025/26 官方全家福、安联球场、Musiala 2026 世界杯
- **Transition Grammar**：MUSIC=slide/cover · SCREEN=curtain · FOOTBALL=tunnel/hardCut · 500–900ms
- **数据原则**：QQ「我喜欢」顺序不当作排名（LATELY = 最近收藏，三首）；不虚构比分/球员/入坑年份

## 数据与素材

- 豆瓣 111 音乐 / 118 影视（原始采集在 `src/data/_douban_*`）
- QQ 音乐「我喜欢」+ 32 个歌单（`src/data/_qqmusic_*`），含 8 个「最·」系列与 5 个年度歌单
- 照片均带 `assets/photos/*.json` 来源元数据（Wikimedia Commons / 豆瓣公开相册 / 拜仁官方 2025/26）
