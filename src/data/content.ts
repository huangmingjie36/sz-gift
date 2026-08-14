// ============================================================
//  THE PRIVATE UNIVERSE OF [NAME]
//  统一内容文件 — 之后替换真实姓名 / 照片 / 歌单 / 碎片时，
//  主要改这一个文件 + src/assets 里的图片。
// ============================================================

import jayArt from "../assets/jay.svg";
import khalilArt from "../assets/khalil.svg";
import cheerArt from "../assets/cheer.svg";
import friendsTv from "../assets/friends-tv.svg";
import stadiumArt from "../assets/bayern-stadium.svg";
import fragmentA from "../assets/fragment-a.svg";
import fragmentB from "../assets/fragment-b.svg";
import fragmentC from "../assets/fragment-c.svg";

export const meta = {
  name: "[NAME]",
  volume: "VOL. 001",
  year: "2026",
  origin: "SHENZHEN",
  originZh: "深圳",
};

// ------------------------------------------------------------
//  章节索引（底部导航用）
// ------------------------------------------------------------
export type Chapter = {
  id: string;
  no: string;
  title: string;
  label: string;
};

export const chapters: Chapter[] = [
  { id: "opening", no: "000", title: "OPENING", label: "THE PRIVATE UNIVERSE" },
  { id: "sound", no: "001", title: "SIDE A — SOUND", label: "音乐 · 精神背景音" },
  { id: "friends", no: "002", title: "THE ONE WHERE...", label: "老友记 · 陪伴" },
  { id: "bayern", no: "003", title: "MIA SAN MIA.", label: "拜仁 · 每个周末" },
  { id: "fragments", no: "004", title: "FRAGMENTS", label: "碎片 · 待整理" },
  { id: "you", no: "005", title: "YOU, ACCORDING TO ME", label: "关于你" },
  { id: "ending", no: "006", title: "MADE FOR YOU, IN SHENZHEN.", label: "深圳特产" },
];

// ------------------------------------------------------------
//  OPENING
// ------------------------------------------------------------
export const opening = {
  volume: "ARCHIVE 000 — COMPILED IN SHENZHEN",
  kicker: "THE PRIVATE UNIVERSE",
  name: meta.name,
  sub: ["Music. Football. Stories.", "And all the things that stayed."],
  enter: "ENTER",
  foot: "深圳 — 2026 — FOR A FRIEND",
  scroll: "SCROLL",
};

// ------------------------------------------------------------
//  CHAPTER 01 — SIDE A / SOUND
// ------------------------------------------------------------
export type Artist = {
  id: string;
  tag: string;
  name: string;
  sub: string;
  meta: string;
  zh: string;
  note: string;
  image: string;
  imageAlt: string;
};

export const sound = {
  chapter: "CHAPTER 01 — ARCHIVE 001",
  side: "SIDE A",
  word: "SOUND",
  intro: [
    "有些歌不是因为最好听才留下来。",
    "是因为听得太久以后，它已经变成了生活的一部分。",
  ],
  introNote: "MUSIC IS NOT A LABEL — IT IS THE BACKGROUND OF A PERSON.",
  ticker: [
    "JAY CHOU",
    "KHALIL FONG",
    "CHEER CHEN",
    "2000 — ∞",
    "SIDE A",
    "MORE VOICES TBA",
  ],
  artists: [
    {
      id: "jay",
      tag: "ARCHIVE 001",
      name: "JAY CHOU",
      sub: "MEMORY / 青春",
      meta: "2000s — CD — 夜晚",
      zh: "青春的记忆里，大概都有一张 CD。",
      note: "占位文案 —— 以后补上真正属于他的那几张专辑。",
      image: jayArt,
      imageAlt: "占位图 — 夜晚 / CD",
    },
    {
      id: "khalil",
      tag: "ARCHIVE 002",
      name: "KHALIL FONG",
      sub: "GROOVE / 灵魂",
      meta: "SOUL — R&B — VINYL",
      zh: "灵魂出窍的时刻，通常是旋律先到。",
      note: "占位文案 —— 待替换。",
      image: khalilArt,
      imageAlt: "占位图 — 黑胶 / 温暖",
    },
    {
      id: "cheer",
      tag: "ARCHIVE 003",
      name: "CHEER CHEN",
      sub: "POETRY / 独处",
      meta: "INDIE — ACOUSTIC — DIARY",
      zh: "独处的时候，世界才安静下来。",
      note: "占位文案 —— 待替换。",
      image: cheerArt,
      imageAlt: "占位图 — 纸张 / 安静",
    },
  ],
  voices: {
    title: "OTHER VOICES",
    zh: "那些还没有被写进这里的女声、独立音乐、深夜歌单……",
    rows: [
      { no: "01", name: "UNNAMED VOICE #01", note: "深夜歌单 · TBA" },
      { no: "02", name: "INDIE ARCHIVE", note: "待补充" },
      { no: "03", name: "A QUIET VOICE", note: "待补充" },
      { no: "04", name: "MORE TO COME", note: "TBA" },
    ],
    end: "THIS LIST IS NOT FINISHED. IT NEVER WILL BE.",
  },
};

// ------------------------------------------------------------
//  CHAPTER 02 — THE ONE WHERE...
// ------------------------------------------------------------
export const friends = {
  chapter: "CHAPTER 02 — ARCHIVE 002",
  kicker: "THE ONE WHERE",
  title: "HE WATCHED IT AGAIN.",
  zh: ["又看了一遍。", "当然，大概还会再看。"],
  meta: "RECORDED ON VHS — 1994 — CENTRAL PERK",
  note: "It's the one where the sofa never moves, the coffee is always warm, and nobody ever really leaves.",
  episodes: "SEASON 1 — EPISODE ∞ · REWATCH #12",
  button: "HOW YOU DOIN'?",
  quotes: [
    "Could I BE any more of a placeholder?",
    "The one where the coffee was always warm.",
    "It's not a show. It's a rewatch loop.",
    "Pivot. Pivot. Pivot. —— 大概是在说人生吧。",
    "No one told you life was gonna be this way. So watch it again.",
  ],
  tvAlt: "占位图 — CRT / VHS",
  tv: friendsTv,
};

// ------------------------------------------------------------
//  CHAPTER 03 — MIA SAN MIA.
// ------------------------------------------------------------
export const bayern = {
  chapter: "CHAPTER 03 — ARCHIVE 003",
  club: "FC BAYERN MÜNCHEN",
  clubSub: "FUSSBALL-CLUB BAYERN E.V. — MÜNCHEN",
  motto: "MIA SAN MIA.",
  zh: ["有些球队不是你「关注」的。", "是每个周末，你总会回来。"],
  matchday: {
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
    meta: ["EST. 1908", "4 × WORLD CHAMPION", "ROT — WEISS"],
  },
  stadiumAlt: "占位图 — 安联球场 / 泛光灯",
  stadium: stadiumArt,
};

// ------------------------------------------------------------
//  CHAPTER 04 — FRAGMENTS
// ------------------------------------------------------------
export const fragments = {
  chapter: "CHAPTER 04 — ARCHIVE 004",
  title: "FRAGMENTS",
  zh: ["碎片。还没有被整理好的东西。", "合照、聊天截图、私人梗、一次旅行、傻逼瞬间。"],
  // 以后这里会换成真正的照片与共同记忆。
  polaroids: [
    { img: fragmentA, caption: "00 — 待扫描 · 2000s", rotate: -3 },
    { img: fragmentB, caption: "某次旅行 — 待补充", rotate: 2 },
    { img: fragmentC, caption: "未命名 — 待定", rotate: -2 },
  ],
  note: "这里会放：聊天截图 / 一句话 / 很普通但重要的照片。",
  ticket: { from: "SHENZHEN", to: "某处", note: "单程 · 日期未定 · 不打算退" },
  filmstrip: ["00A", "01A", "02A", "03A", "04A"],
  stamp: "TO BE\nDEVELOPED",
};

// ------------------------------------------------------------
//  CHAPTER 05 — YOU, ACCORDING TO ME
// ------------------------------------------------------------
export const you = {
  chapter: "CHAPTER 05 — ARCHIVE 005",
  kicker: "YOU, ACCORDING TO ME",
  lines: [
    "You like old songs,",
    "old sitcoms,",
    "and a football club thousands of kilometers away.",
  ],
  zh: ["好像总有一些东西，", "值得一遍又一遍地回去。"],
  end: "Maybe that's the point.",
  vertical: "FOR [NAME] — 深圳 → MÜNCHEN",
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
  foot: "A GIFT — COMPILED IN SHENZHEN — VOL. 001 — FOR [NAME]",
};
