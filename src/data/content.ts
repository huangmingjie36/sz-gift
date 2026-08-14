// ============================================================
//  THE PRIVATE UNIVERSE OF [NAME] — 真实文化数据版
//  数据来源：豆瓣公开收藏（111 音乐 / 118 影视）+ QQ音乐「我喜欢」
//  采集日期：2026-08（只读）
// ============================================================

import jayArt from "../assets/jay.svg";
import khalilArt from "../assets/khalil.svg";
import cheerArt from "../assets/cheer.svg";
import friendsTv from "../assets/friends-tv.svg";
import stadiumArt from "../assets/bayern-stadium.svg";

export const meta = {
  name: "ppppettis_",
  displayName: "他",
  volume: "VOL. 001",
  year: "2026",
  origin: "SHENZHEN",
  originZh: "深圳",
  dataNote: "SOURCED FROM DOUBAN + QQ MUSIC — 2026",
};

// ------------------------------------------------------------
//  章节索引
// ------------------------------------------------------------
export type Chapter = { id: string; no: string; title: string; label: string };

export const chapters: Chapter[] = [
  { id: "opening", no: "000", title: "OPENING", label: "THE PRIVATE UNIVERSE" },
  { id: "core", no: "001", title: "THE CORE", label: "核心 · 反复回来的东西" },
  { id: "record", no: "002", title: "THE RECORD ROOM", label: "唱片房 · 音乐" },
  { id: "living", no: "003", title: "THE LIVING ROOM", label: "客厅 · 老友记与剧集" },
  { id: "matchday", no: "004", title: "MIA SAN MIA.", label: "比赛日 · 拜仁与德国" },
  { id: "deepcuts", no: "005", title: "DEEP CUTS", label: "深藏曲目 · 冷门" },
  { id: "dna", no: "006", title: "CULTURAL DNA", label: "文化基因" },
  { id: "you", no: "007", title: "YOU, ACCORDING TO ME", label: "关于你" },
  { id: "ending", no: "008", title: "MADE FOR YOU, IN SHENZHEN.", label: "深圳特产" },
];

// ------------------------------------------------------------
//  OPENING
// ------------------------------------------------------------
export const opening = {
  volume: "ARCHIVE 000 — COMPILED IN SHENZHEN",
  kicker: "THE PRIVATE UNIVERSE",
  name: "A FRIEND",
  sub: ["A map of the things he kept coming back to.", "音乐 · 影视 · 足球 · 那些反复回去的东西。"],
  enter: "ENTER",
  foot: "深圳 — 2026 — FOR A FRIEND",
  scroll: "SCROLL",
};

// ------------------------------------------------------------
//  THE CORE — 核心对象
// ------------------------------------------------------------
export type CoreItem = {
  id: string;
  name: string;
  en: string;
  kind: string;
  note: string;
  evidence: string;
  image?: string;
};

export const core: CoreItem[] = [
  {
    id: "jay",
    name: "周杰伦",
    en: "JAY CHOU",
    kind: "MEMORY / 青春",
    note: "2000s 华语流行的黄金年代，一张 CD 就是一个夏天。",
    evidence: "豆瓣 6 张五星 · QQ 收藏 4 张专辑",
    image: jayArt,
  },
  {
    id: "khalil",
    name: "方大同",
    en: "KHALIL FONG",
    kind: "GROOVE / 灵魂",
    note: "Soul 与 R&B 的锚点——旋律先到，身体跟上。",
    evidence: "豆瓣 6 张五星 · QQ 收藏 5 张专辑",
    image: khalilArt,
  },
  {
    id: "cheer",
    name: "陈绮贞",
    en: "CHEER CHEN",
    kind: "POETRY / 独处",
    note: "数量与五星率都最高的音乐人。独处的时候，世界才安静下来。",
    evidence: "豆瓣 8 张五星 · 收藏 10 张",
    image: cheerArt,
  },
  {
    id: "faye",
    name: "王菲",
    en: "FAYE WONG",
    kind: "DIVA / 九十年代",
    note: "华语女声的神坛。天空、唱游、只爱陌生人，全部五星。",
    evidence: "豆瓣 4 张五星 · QQ 收藏 4 张专辑",
  },
  {
    id: "friends",
    name: "老友记",
    en: "FRIENDS",
    kind: "COMFORT / 陪伴",
    note: "2023 年夏天，一个月把十季全部刷完，每一季都是五星。",
    evidence: "十季全部五星 · “amazing！”",
  },
  {
    id: "bayern",
    name: "拜仁慕尼黑",
    en: "FC BAYERN MÜNCHEN",
    kind: "MATCHDAY / 忠诚",
    note: "有些球队不是你「关注」的。是每个周末，你总会回来。",
    evidence: "长期球迷 · 豆瓣小组佐证",
  },
  {
    id: "germany",
    name: "德国国家队",
    en: "DIE MANNSCHAFT",
    kind: "ROT-WEISS / 执念",
    note: "另一种红白。另一种从很久以前留下来的执念。",
    evidence: "与拜仁同源的忠诚",
  },
];

// ------------------------------------------------------------
//  THE RECORD ROOM — 音乐
// ------------------------------------------------------------
export const recordRoom = {
  chapter: "CHAPTER 02 — ARCHIVE 002",
  side: "THE RECORD ROOM",
  word: "SOUND",
  intro: [
    "111 张豆瓣收藏，55 张五星。",
    "他给接近一半的音乐打了五星——不是随便听听，是反复听，然后决定留下。",
  ],
  ticker: [
    "JAY CHOU", "KHALIL FONG", "CHEER CHEN", "FAYE WONG", "FEMALE VOICES",
    "1997 — 2009", "5-STAR ×55", "ON REPEAT",
  ],
  fiveStarCount: 55,
  totalCount: 111,

  three: {
    title: "THE THREE",
    zh: "三位最核心的音乐人，构成这张专辑的骨架。",
    items: [
      { name: "JAY CHOU", zh: "周杰伦", stars: 6, tag: "MEMORY / 青春", line: "叶惠美 · 七里香 · 十一月的萧邦", image: jayArt },
      { name: "KHALIL FONG", zh: "方大同", stars: 6, tag: "GROOVE / 灵魂", line: "Soulboy · 未来 · 橙月 · 15", image: khalilArt },
      { name: "CHEER CHEN", zh: "陈绮贞", stars: 8, tag: "POETRY / 独处", line: "让我想一想 · 吉他手 · 华丽的冒险", image: cheerArt },
    ],
  },

  faye: {
    name: "FAYE WONG",
    zh: "王菲",
    stars: 4,
    tag: "THE FOURTH VOICE / 九十年代",
    line: "天空 · 王菲 · 唱游 · 只爱陌生人 —— 全部五星",
  },

  voices: {
    title: "FEMALE VOICES",
    zh: "他的音乐宇宙里，女声是绝对主角。超过一半的收藏来自她们。",
    groups: [
      {
        name: "INDIE / 创作系",
        en: "THE QUIET ONES",
        members: ["陈绮贞", "陈珊妮", "何欣穗", "魏如萱", "万玲琳", "张玉华", "轻日记"],
      },
      {
        name: "华语 Diva",
        en: "THE VOICES",
        members: ["王菲", "张惠妹", "蔡依林", "田馥甄", "萧亚轩", "戴佩妮", "徐佳莹", "林忆莲", "顺子", "蔡琴", "江美琪", "卫兰"],
      },
      {
        name: "Soul / R&B / Jazz",
        en: "THE GROOVE",
        members: ["Alicia Keys", "Adele", "Norah Jones", "Corinne Bailey Rae", "Aretha Franklin", "小野丽莎", "Laufey", "宇多田光", "蔡健雅"],
      },
    ],
  },

  onRepeat: {
    title: "ON REPEAT",
    zh: "QQ 音乐「我喜欢」里，高频出现的片段。",
    items: [
      { song: "关于小熊", artist: "蛋堡", note: "收敛水" },
      { song: "爱爱爱", artist: "方大同", note: "爱爱爱" },
      { song: "矜持", artist: "王菲", note: "天空" },
      { song: "会不会", artist: "陈绮贞", note: "让我想一想" },
      { song: "无人知晓", artist: "田馥甄", note: "无人知晓" },
      { song: "After 17", artist: "陈绮贞", note: "After 17" },
      { song: "真夏の果実", artist: "南方之星", note: "真夏的果实" },
      { song: "If I Ain't Got You", artist: "Alicia Keys", note: "The Diary of Alicia Keys" },
      { song: "BIRDS OF A FEATHER", artist: "Billie Eilish", note: "HIT ME HARD AND SOFT" },
      { song: "至少还有你", artist: "林忆莲", note: "林忆莲's" },
      { song: "怀念", artist: "王菲", note: "王菲" },
      { song: "最熟悉的陌生人", artist: "萧亚轩", note: "Elva 同名专辑" },
    ],
  },

  fiveStar: {
    title: "5-STAR RECORDS",
    zh: "豆瓣上主动给出五星的唱片。比“听过”更接近喜欢。",
    items: [
      { name: "Groupies 吉他手", artist: "陈绮贞", year: "2002" },
      { name: "叶惠美", artist: "周杰伦", year: "2003" },
      { name: "Soulboy", artist: "方大同", year: "2005" },
      { name: "天空", artist: "王菲", year: "1994" },
      { name: "收敛水", artist: "蛋堡", year: "2009" },
      { name: "The Dark Side of the Moon", artist: "Pink Floyd", year: "1973" },
      { name: "Undercurrent", artist: "Bill Evans & Jim Hall", year: "1962" },
      { name: "爱情的尽头", artist: "伍佰 & China Blue", year: "1996" },
      { name: "David Tao 同名专辑", artist: "陶喆", year: "1997" },
      { name: "华丽的冒险", artist: "陈绮贞", year: "2005" },
      { name: "未来", artist: "方大同", year: "2007" },
      { name: "HIT ME HARD AND SOFT", artist: "Billie Eilish", year: "2024" },
      { name: "Typical of Me", artist: "Laufey", year: "2021" },
      { name: "完美的呻吟", artist: "陈珊妮", year: "2000" },
      { name: "橙月", artist: "方大同", year: "2008" },
      { name: "无人知晓", artist: "田馥甄", year: "2020" },
    ],
  },

  era: {
    title: "ERA MAP",
    zh: "音乐收藏的年代分布——峰值在 1997–2009，华语流行的黄金期。",
    // 年份: 收藏数（豆瓣，抽样年份）
    years: [
      { y: "1994", n: 1 }, { y: "1997", n: 5 }, { y: "1998", n: 4 }, { y: "1999", n: 3 },
      { y: "2000", n: 4 }, { y: "2002", n: 4 }, { y: "2003", n: 7 }, { y: "2004", n: 8 },
      { y: "2005", n: 6 }, { y: "2007", n: 8 }, { y: "2008", n: 4 }, { y: "2009", n: 5 },
      { y: "2011", n: 5 }, { y: "2018", n: 7 }, { y: "2020", n: 2 }, { y: "2021", n: 2 },
      { y: "2024", n: 2 }, { y: "2025", n: 1 },
    ],
    note: "老歌反复听，新声也在听。",
  },
};

// ------------------------------------------------------------
//  THE LIVING ROOM — 影视
// ------------------------------------------------------------
export const livingRoom = {
  chapter: "CHAPTER 03 — ARCHIVE 003",
  kicker: "THE ONE WHERE",
  title: "HE WATCHED IT AGAIN.",
  zh: ["2023 年 7 月 19 日到 8 月 16 日，", "他把《老友记》十季全部看完，每一季都打了五星。"],
  meta: "FRIENDS — 1994 — CENTRAL PERK — REWATCH ∞",
  quote: "amazing！🥳",
  quoteNote: "第九季短评，2023-08-16",
  episodes: "10 SEASONS · ALL 5-STAR · ONE MONTH",
  button: "HOW YOU DOIN'?",
  quotes: [
    "Could I BE any more of a rewatch?",
    "The one where he watched it again. And again.",
    "It's not a show. It's a place he goes back to.",
    "Pivot. Pivot. Pivot. —— 大概是在说人生吧。",
    "No one told you life was gonna be this way. So watch it again.",
  ],
  tv: friendsTv,
  tvAlt: "CRT / VHS 占位图",

  after: {
    title: "AFTER FRIENDS",
    zh: "情景喜剧是起点，但他一路看下去了。",
    shows: [
      { name: "生活大爆炸", en: "THE BIG BANG THEORY", seasons: "S1–5", stars: "★★★★★", note: "2025 年补完" },
      { name: "怪奇物语", en: "STRANGER THINGS", seasons: "S1–5", stars: "★★★★★", note: "2024 → 2026" },
      { name: "IT 狂人", en: "THE IT CROWD", seasons: "S1–3", stars: "★★★★☆", note: "2026 年，从 3 星看到 5 星" },
      { name: "老爸老妈的浪漫史", en: "HIMYM", seasons: "S1", stars: "★★★★★", note: "2025" },
      { name: "极限挑战", en: "GO! GO!", seasons: "S1–2", stars: "★★★★★", note: "2026，综艺也是反复看的" },
      { name: "漫长的季节", en: "THE LONG SEASON", seasons: "1", stars: "★★★★★", note: "2024，华语剧" },
    ],
  },

  films: {
    title: "THE SCREEN",
    zh: "118 部看过，65 部五星。挑几部代表：",
    items: [
      { name: "让子弹飞", year: "2010", tag: "华语 · 喜剧" },
      { name: "功夫", year: "2004", tag: "周星驰 · 喜剧" },
      { name: "花样年华", year: "2000", tag: "王家卫" },
      { name: "重庆森林", year: "1994", tag: "王家卫" },
      { name: "低俗小说", year: "1994", tag: "塔伦蒂诺" },
      { name: "这个杀手不太冷", year: "1994", tag: "吕克·贝松" },
      { name: "情书", year: "1995", tag: "岩井俊二" },
      { name: "爱在黎明破晓前", year: "1995", tag: "Before Sunrise" },
      { name: "机器人总动员", year: "2008", tag: "皮克斯" },
      { name: "疯狂动物城", year: "2016", tag: "迪士尼" },
      { name: "触不可及", year: "2011", tag: "法国" },
      { name: "狩猎", year: "2012", tag: "麦斯·米科尔森" },
      { name: "被解救的姜戈", year: "2012", tag: "昆汀" },
      { name: "复仇者联盟 4", year: "2019", tag: "漫威" },
      { name: "漫长的季节", year: "2023", tag: "华语剧" },
    ],
  },
};

// ------------------------------------------------------------
//  MATCHDAY — 足球
// ------------------------------------------------------------
export const matchday = {
  chapter: "CHAPTER 04 — ARCHIVE 004",
  club: "FC BAYERN MÜNCHEN",
  clubSub: "FUSSBALL-CLUB BAYERN E.V. — MÜNCHEN",
  motto: "MIA SAN MIA.",
  zh: ["有些球队不是你「关注」的。", "是每个周末，你总会回来。"],
  stadium: stadiumArt,
  match: {
    label: "MATCHDAY — ALLIANZ ARENA",
    home: "FCB",
    score: "4 — 0",
    away: "SGE",
    foot: "90' · 深夜的约定 · 不需要真的比赛",
  },
  mannschaft: {
    title: "DIE MANNSCHAFT",
    sub: "GERMANY NATIONAL TEAM — DFB",
    zh: ["另一种红白。", "另一种从很久以前留下来的执念。"],
    meta: ["EST. 1900 · FCB", "4 × WORLD CHAMPION · GER", "ROT — WEISS"],
  },
  note: "最喜欢的球员、入坑年份、经典比赛——这些等你来补。",
};

// ------------------------------------------------------------
//  DEEP CUTS — 冷门但完整画像
// ------------------------------------------------------------
export const deepCuts = {
  chapter: "CHAPTER 05 — ARCHIVE 005",
  title: "DEEP CUTS",
  zh: "那些第一眼不会定义他的东西，却让画像完整。",
  items: [
    { name: "陈珊妮", work: "完美的呻吟 / 趁记忆消失之前", tag: "另类女声 · 2000 / 2024", note: "从《完美的呻吟》到 2024 新作，冷门但一直没走。" },
    { name: "蛋堡", work: "收敛水 / Winter Sweet / 关于小熊", tag: "中文说唱 · 2009", note: "诗意的嘻哈。QQ 音乐「我喜欢」里的第一首是《关于小熊》。" },
    { name: "Tizzy Bac", work: "什么事都叫我分心", tag: "钢琴摇滚 · 2003", note: "用钢琴弹摇滚的台湾乐队。" },
    { name: "向日葵乐队", work: "生活在别处", tag: "独立 · 现场感", note: "「活人感重，颓废又美好」——这句是他说张震岳的，但气质很像。" },
    { name: "张玉华", work: "同名专辑", tag: "千禧年女声 · 2002", note: "一首《原谅》就够了。他收藏了整张。" },
    { name: "超兽武装", work: "仁者无敌 / 勇者无惧", tag: "冷门国漫 · 2011", note: "两部都给了五星。童年的执念。" },
    { name: "南京照相馆", work: "2025", tag: "纪录片", note: "2025 年新片，五星。" },
    { name: "Keb' Mo'", work: "Suitcase", tag: "蓝调 · 2006", note: "美式蓝调，藏在他的华语宇宙角落。" },
  ],
};

// ------------------------------------------------------------
//  CULTURAL DNA
// ------------------------------------------------------------
export type DnaItem = { key: string; word: string; zh: string; evidence: string[] };

export const dna: DnaItem[] = [
  {
    key: "NOSTALGIA",
    word: "怀旧",
    zh: "他不是被困在过去，而是清楚地知道自己从哪里来。",
    evidence: ["1997–2009 华语黄金期是收藏主峰", "周杰伦《叶惠美》《七里香》《十一月的萧邦》反复五星", "1994–95 电影经典：低俗小说 / 情书 / 这个杀手不太冷"],
  },
  {
    key: "FEMALE VOICE",
    word: "女声",
    zh: "超过一半的收藏来自女声。他的宇宙里，她们是主角。",
    evidence: ["陈绮贞 8 张五星 · 王菲 4 张五星", "从华语 Diva 到 Indie 创作系到 R&B/Soul", "Adele · Norah Jones · Laufey · 小野丽莎"],
  },
  {
    key: "GROOVE",
    word: "律动",
    zh: "灵魂出窍的时刻，通常是旋律先到。",
    evidence: ["方大同 6 张五星：Soulboy / 未来 / 橙月 / 15", "蛋堡《收敛水》《Winter Sweet》", "Bill Evans《Undercurrent》· Adele《21》"],
  },
  {
    key: "INTIMACY",
    word: "私密",
    zh: "独处的时候，世界才安静下来。",
    evidence: ["陈绮贞、陈珊妮、何欣穗、魏如萱……独立创作系女声", "深夜歌单式的收藏习惯", "田馥甄《无人知晓》五星"],
  },
  {
    key: "REPETITION",
    word: "重看",
    zh: "有些东西，值得一遍又一遍地回去。",
    evidence: ["2023 年一个月刷完《老友记》十季，全部五星", "多季剧集全部补完：生活大爆炸 S1-5 / 怪奇物语 S1-5", "老专辑反复听、反复五星"],
  },
  {
    key: "LOYALTY",
    word: "忠诚",
    zh: "喜欢的球队、喜欢的音乐人，都是很多年的事。",
    evidence: ["拜仁慕尼黑 + 德国国家队 · 长期球迷", "周杰伦 / 陈绮贞 / 方大同 / 王菲 十年如一", "剧集从第一季追到最新一季"],
  },
];

// ------------------------------------------------------------
//  YOU, ACCORDING TO ME
// ------------------------------------------------------------
export const you = {
  chapter: "CHAPTER 07 — ARCHIVE 007",
  kicker: "YOU, ACCORDING TO ME",
  lines: [
    "You like old songs,",
    "old sitcoms,",
    "and a football club thousands of kilometers away.",
  ],
  zh: ["好像总有一些东西，", "值得一遍又一遍地回去。"],
  end: "Maybe that's the point.",
  vertical: "FOR P., 深圳 → MÜNCHEN",
};

// ------------------------------------------------------------
//  ENDING
// ------------------------------------------------------------
export const ending = {
  lines: [
    { text: "MADE IN SHENZHEN.", kind: "display" },
    { text: "Not exactly.", kind: "serif" },
    { text: ["MADE FOR YOU,", "IN SHENZHEN."], kind: "display" },
    { text: "Compiled with friendship.", kind: "meta" },
  ],
  seal: "深圳",
  foot: "A GIFT — COMPILED IN SHENZHEN — VOL. 001",
};
