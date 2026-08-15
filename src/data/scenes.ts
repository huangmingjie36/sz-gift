// ============================================================
//  V4 — curatedContent
//  三幕：MUSIC → FOOTBALL → SCREEN（WARM → PEAK → AFTERGLOW）
//  原则：SHOW, DON'T EXPLAIN · 数据只用于筛选
// ============================================================

import jayConcert from "../assets/photos/jay-concert.jpg";
import khalil from "../assets/photos/khalil2-1.jpg";
import cheerLive from "../assets/photos/cheer2-1.jpg";
import faye from "../assets/photos/faye-2.jpg";
import adele from "../assets/photos/adele-1.jpg";
import billie from "../assets/photos/billie-1.jpg";
import laufey from "../assets/photos/laufey-1.jpg";
import norah from "../assets/photos/norah-2.jpg";
import albumYehuimei from "../assets/photos/cover-music-叶惠美.jpg";
import albumQilixiang from "../assets/photos/cover-music-七里香.jpg";
import albumXiaobang from "../assets/photos/cover-music-十一月的萧邦.jpg";
import albumAiAiAi from "../assets/photos/cover-music-爱爱爱.jpg";
import albumWeilai from "../assets/photos/cover-music-未来.jpg";
import albumChengyue from "../assets/photos/cover-music-橙月.jpg";
import albumSoulboy from "../assets/photos/cover-music-Soulboy.jpg";
import albumRangWo from "../assets/photos/cover-music-让我想一想.jpg";
import albumHuaili from "../assets/photos/cover-music-华丽的冒险.jpg";
import albumGroupies from "../assets/photos/cover-music-Groupies 吉他手.jpg";
import albumTiankong from "../assets/photos/cover-music-天空.jpg";
import albumShoulian from "../assets/photos/cover-music-收敛水.jpg";
import liveJay from "../assets/photos/live-jay-wulunbi.jpg";
import liveKhalil from "../assets/photos/live-khalil-15.jpg";
import liveCheer from "../assets/photos/live-cheer-huazitai.jpg";
import friends1 from "../assets/photos/friends-1.jpg";
import friends2 from "../assets/photos/friends-2.jpg";
import friends3 from "../assets/photos/friends-3.jpg";
import friends5 from "../assets/photos/friends-5.jpg";
import rachel from "../assets/photos/rachel-0.jpg";
import posterTbbt from "../assets/photos/cover-movie-生活大爆炸 第一季.jpg";
import posterStranger from "../assets/photos/cover-movie-怪奇物语 第一季.jpg";
import posterLongSeason from "../assets/photos/cover-movie-漫长的季节.jpg";
import posterEndgame from "../assets/photos/cover-movie-复仇者联盟4：终局之战.jpg";
import posterKungFu from "../assets/photos/cover-movie-功夫.jpg";
import posterLetBullets from "../assets/photos/cover-movie-让子弹飞.jpg";
import posterInMood from "../assets/photos/cover-movie-花样年华.jpg";
import posterChungking from "../assets/photos/cover-movie-重庆森林.jpg";
import posterPulp from "../assets/photos/cover-movie-低俗小说.jpg";
import posterWallE from "../assets/photos/cover-movie-机器人总动员.jpg";
import bayernTeam from "../assets/photos/bayern-teamfoto-2025-26.jpg";
import allianzNight from "../assets/photos/allianz-night1.jpg";
import musiala from "../assets/photos/musiala20261.jpg";
import oliseBayern from "../assets/photos/olise-bayern.jpg";
import oliseFr1 from "../assets/photos/olise-france-2026-1.jpg";
import oliseFr2 from "../assets/photos/olise-france-2026-2.jpg";
import oliseFr3 from "../assets/photos/olise-france-2026-3.jpg";
import chandler from "../assets/photos/chandler-0.jpg";

export const person = { en: "CHEN BIAOCONG", zh: "陈标聪" };

/** 私人签名（小写，mono，克制出现 3–6 次） */
export const signature = "ppppettis";

// ------------------------------------------------------------
//  Scene 定义（15）
// ------------------------------------------------------------
export type TransitionKind = "fade" | "slide" | "coverOpen" | "curtain" | "hardCut" | "tunnel" | "mask";

export type Scene = {
  id: string;
  act: "opening" | "music" | "football" | "screen" | "ending";
  transition: TransitionKind;
  theme: "paper" | "dark" | "sepia" | "black" | "night";
};

export const scenes: Scene[] = [
  { id: "opening", act: "opening", transition: "fade", theme: "paper" },
  { id: "jay", act: "music", transition: "slide", theme: "paper" },
  { id: "khalil", act: "music", transition: "coverOpen", theme: "paper" },
  { id: "cheer", act: "music", transition: "mask", theme: "paper" },
  { id: "sheet", act: "music", transition: "slide", theme: "paper" },
  { id: "arrival", act: "football", transition: "hardCut", theme: "black" },
  { id: "mia", act: "football", transition: "tunnel", theme: "night" },
  { id: "olise", act: "football", transition: "slide", theme: "night" },
  { id: "deutschland", act: "football", transition: "coverOpen", theme: "night" },
  { id: "tv", act: "screen", transition: "fade", theme: "black" },
  { id: "friends", act: "screen", transition: "curtain", theme: "sepia" },
  { id: "rachel", act: "screen", transition: "slide", theme: "sepia" },
  { id: "shelf", act: "screen", transition: "coverOpen", theme: "sepia" },
  { id: "ending", act: "ending", transition: "fade", theme: "black" },
];

// ------------------------------------------------------------
//  OPENING
// ------------------------------------------------------------
export const openingContent = {
  en: person.en,
  zh: person.zh,
  things: ["MUSIC", "FOOTBALL", "SCREEN"],
  year: "2026",
  city: "SHENZHEN",
  enter: "ENTER",
};

// ------------------------------------------------------------
//  MUSIC — 三人，各有构图。FEATURED RECORDS 有数据支撑。
// ------------------------------------------------------------
export type Album = {
  name: string;
  year: string;
  img: string;
  /** 有可靠证据的收藏歌曲（1-3 首，无则不展示） */
  songs?: string[];
  evidence?: string;
};

export type Live = { name: string; year: string; img: string; evidence?: string };

export type ArtistInteraction = "cd" | "vinyl" | "book";

export type Artist = {
  id: string;
  en: string;
  zh: string;
  meta: string;
  img: string;
  albums: Album[];
  live: Live;
  interaction: ArtistInteraction;
  /** 内部研究依据（不显示在页面） */
  evidence?: string[];
};

export const artists: Artist[] = [
  {
    id: "jay",
    en: "JAY CHOU",
    zh: "周杰伦",
    meta: "2000 —",
    img: jayConcert,
    albums: [
      { name: "十一月的萧邦", year: "2005", img: albumXiaobang, evidence: "豆瓣 ★5 · QQ 音乐收藏专辑" },
      { name: "叶惠美", year: "2003", img: albumYehuimei, evidence: "豆瓣 ★5 · QQ 音乐收藏专辑" },
      { name: "七里香", year: "2004", img: albumQilixiang, evidence: "豆瓣 ★5 · QQ 音乐收藏专辑" },
    ],
    live: { name: "无与伦比演唱会", year: "2004", img: liveJay, evidence: "2004 · 公认最经典现场" },
    interaction: "cd",
    evidence: [
      "十一月的萧邦/叶惠美/七里香：豆瓣五星 + QQ「我喜欢」收藏",
      "无与伦比演唱会：公认为周杰伦最经典现场（2004），用户指定",
    ],
  },
  {
    id: "khalil",
    en: "KHALIL FONG",
    zh: "方大同",
    meta: "Soul · R&B",
    img: khalil,
    albums: [
      { name: "爱爱爱", year: "2006", img: albumAiAiAi, songs: ["爱爱爱"], evidence: "QQ「我喜欢」收藏专辑 · 歌曲《爱爱爱》" },
      { name: "未来", year: "2007", img: albumWeilai, evidence: "豆瓣 ★5 · QQ 音乐收藏专辑" },
      { name: "橙月", year: "2008", img: albumChengyue, evidence: "豆瓣 ★5 · QQ 音乐收藏专辑" },
    ],
    live: { name: "15 香港演唱会", year: "2011", img: liveKhalil, evidence: "豆瓣 ★5 · 《15》专辑亦 ★5" },
    interaction: "vinyl",
    evidence: [
      "爱爱爱：QQ「我喜欢」收藏；未来/橙月：豆瓣五星 + QQ",
      "15 香港演唱会：豆瓣五星（2026-07-06）；《15》专辑亦五星",
    ],
  },
  {
    id: "cheer",
    en: "CHEER CHEN",
    zh: "陈绮贞",
    meta: "2000s —",
    img: cheerLive,
    albums: [
      { name: "让我想一想", year: "1998", img: albumRangWo, songs: ["会不会"], evidence: "豆瓣 ★5 · QQ「我喜欢」歌曲《会不会》" },
      { name: "Groupies 吉他手", year: "2002", img: albumGroupies, evidence: "豆瓣 ★5 · QQ 音乐收藏专辑" },
      { name: "华丽的冒险", year: "2005", img: albumHuaili, evidence: "豆瓣 ★5 · QQ 音乐收藏专辑" },
    ],
    live: { name: "花的姿态演唱会", year: "2007", img: liveCheer, evidence: "豆瓣 ★5 · 首场大型个唱" },
    interaction: "book",
    evidence: [
      "让我想一想/吉他手/华丽的冒险：豆瓣五星 + QQ 收藏/歌曲",
      "花的姿态·演唱会经典实录：豆瓣五星（2026-04-21），首场大型个唱",
    ],
  },
];

export const sheetContent = {
  title: "CONTACT SHEET",
  meta: "QQ Music playlists · 32",
  people: [
    { img: faye, name: "王菲", info: "最·王菲" },
    { img: adele, name: "Adele", info: "21 · 五星" },
    { img: billie, name: "Billie Eilish", info: "HIT ME HARD AND SOFT" },
    { img: laufey, name: "Laufey", info: "Typical of Me" },
    { img: norah, name: "Norah Jones", info: "Come Away with Me" },
    { img: albumTiankong, name: "天空", info: "FAYE · 1994" },
    { img: albumShoulian, name: "收敛水", info: "蛋堡 · 2009" },
    { img: albumSoulboy, name: "Soulboy", info: "KHALIL · 2005" },
  ],
};

export const lately = {
  label: "LATELY",
  note: "Recently saved on QQ Music",
  songs: [
    { no: "01", title: "关于小熊", artist: "蛋堡" },
    { no: "02", title: "爱爱爱", artist: "方大同" },
    { no: "03", title: "矜持", artist: "王菲" },
  ],
};

export const favouriteSeries = [
  "最·周杰伦", "最·方大同", "最·王菲", "最·陈绮贞",
  "最·莫文蔚", "最·陈奕迅", "最·孙燕姿", "最·蔡依林",
];

// ------------------------------------------------------------
//  THE CRATE — 唱片箱（次核心音乐人/收藏）
// ------------------------------------------------------------
export type CrateItem = { name: string; img?: string; tone?: string; note?: string };

export const crateContent = {
  items: [
    { name: "王菲", img: faye, note: "天空" },
    { name: "Adele", img: adele, note: "21" },
    { name: "Billie Eilish", img: billie, note: "HIT ME HARD AND SOFT" },
    { name: "Laufey", img: laufey, note: "Typical of Me" },
    { name: "Norah Jones", img: norah, note: "Come Away with Me" },
    { name: "天空", img: albumTiankong, note: "王菲 · 1994" },
    { name: "收敛水", img: albumShoulian, note: "蛋堡 · 2009" },
    { name: "完美的呻吟", tone: "#3A2A1E", note: "陈珊妮 · 2000" },
    { name: "阿岳正传", tone: "#4C463F", note: "张震岳" },
  ],
};

// ------------------------------------------------------------
//  FOOTBALL
// ------------------------------------------------------------
export const miaContent = {
  title: "MIA SAN MIA.",
  club: "FC BAYERN MÜNCHEN",
  img: bayernTeam,
};

export const matchdayContent = {
  title: "MATCHDAY",
  arena: "ALLIANZ ARENA",
  img: allianzNight,
};

export const deutschlandContent = {
  title: "DEUTSCHLAND",
  sub: "DIE MANNSCHAFT",
  img: musiala,
  meta: "2026 · World Cup",
};

// ------------------------------------------------------------
//  OLISE — 一个私人的选择
// ------------------------------------------------------------
export const oliseContent = {
  name: "MICHAEL OLISE",
  zh: "奥利塞",
  img: oliseBayern,
  sequence: [oliseFr1, oliseFr2, oliseFr3],
  meta: "FC BAYERN · 2025",
};

// ------------------------------------------------------------
//  MATCHDAY ARRIVAL — 进场
// ------------------------------------------------------------
export const arrivalContent = {
  title: "MATCHDAY",
  img: allianzNight,
  note: "ARRIVAL",
};

// ------------------------------------------------------------
//  TV — 客厅的电视
// ------------------------------------------------------------
export const tvContent = {
  label: "TV",
  hint: "turn it on",
  friends: friends2,
};

// ------------------------------------------------------------
//  CHANDLER — quiet like
// ------------------------------------------------------------
export const chandlerContent = {
  name: "CHANDLER BING",
  line: "could I BE more visible?",
  img: chandler,
};

// ------------------------------------------------------------
//  SCREEN
// ------------------------------------------------------------
export const friendsContent = {
  name: "FRIENDS",
  years: "1994 – 2004",
  line: "AGAIN?",
  img: [friends1, friends2, friends3, friends5],
};

export const rachelContent = {
  name: "RACHEL GREEN",
  line: "of course.",
  img: rachel,
};

export const shelfContent = {
  title: "ON YOUR SHELF",
  items: [
    { img: posterTbbt, name: "生活大爆炸", meta: "S1–5" },
    { img: posterStranger, name: "怪奇物语", meta: "S1–5" },
    { img: posterLongSeason, name: "漫长的季节", meta: "2023" },
    { img: posterEndgame, name: "终局之战", meta: "2019" },
    { img: posterKungFu, name: "功夫", meta: "2004" },
    { img: posterLetBullets, name: "让子弹飞", meta: "2010" },
    { img: posterInMood, name: "花样年华", meta: "2000" },
    { img: posterChungking, name: "重庆森林", meta: "1994" },
    { img: posterPulp, name: "低俗小说", meta: "1994" },
    { img: posterWallE, name: "机器人总动员", meta: "2008" },
  ],
};

// ------------------------------------------------------------
//  ENDING
// ------------------------------------------------------------
export const endingContent = {
  title: "深圳特产",
  line: "No snacks. Just code.",
  foot: "for Chen Biaocong",
  easterEgg: "苏州那份呢？",
};
