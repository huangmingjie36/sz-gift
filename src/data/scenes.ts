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

export const person = { en: "CHEN BIAOCONG", zh: "陈标聪" };

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
  { id: "music-intro", act: "music", transition: "fade", theme: "paper" },
  { id: "jay", act: "music", transition: "slide", theme: "paper" },
  { id: "khalil", act: "music", transition: "coverOpen", theme: "paper" },
  { id: "cheer", act: "music", transition: "mask", theme: "paper" },
  { id: "sheet", act: "music", transition: "slide", theme: "paper" },
  { id: "inter-foot", act: "football", transition: "hardCut", theme: "black" },
  { id: "mia", act: "football", transition: "tunnel", theme: "night" },
  { id: "matchday", act: "football", transition: "slide", theme: "night" },
  { id: "deutschland", act: "football", transition: "coverOpen", theme: "night" },
  { id: "inter-screen", act: "screen", transition: "fade", theme: "black" },
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
export type Album = { name: string; year: string; img: string };

export type Live = { name: string; year: string; img: string };

export type Artist = {
  id: string;
  en: string;
  zh: string;
  meta: string;
  img: string;
  albums: Album[];
  live: Live;
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
      { name: "十一月的萧邦", year: "2005", img: albumXiaobang },
      { name: "叶惠美", year: "2003", img: albumYehuimei },
      { name: "七里香", year: "2004", img: albumQilixiang },
    ],
    live: { name: "无与伦比演唱会", year: "2004", img: liveJay },
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
      { name: "爱爱爱", year: "2006", img: albumAiAiAi },
      { name: "未来", year: "2007", img: albumWeilai },
      { name: "橙月", year: "2008", img: albumChengyue },
    ],
    live: { name: "15 香港演唱会", year: "2011", img: liveKhalil },
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
      { name: "让我想一想", year: "1998", img: albumRangWo },
      { name: "Groupies 吉他手", year: "2002", img: albumGroupies },
      { name: "华丽的冒险", year: "2005", img: albumHuaili },
    ],
    live: { name: "花的姿态演唱会", year: "2007", img: liveCheer },
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
  madeIn: "MADE IN SHENZHEN.",
  notExactly: "Not exactly.",
  madeFor: ["MADE FOR YOU,", "IN SHENZHEN."],
  name: person.zh,
  foot: "Compiled with friendship.",
  easterEgg: "苏州特产你随便带。深圳这份，已经编译好了。",
};
