// ============================================================
//  V3 — curatedContent（Scene 数据层）
//  原则：SHOW, DON'T EXPLAIN. / CURATION, NOT INTERPRETATION.
//  所有图片带 source / year / context（见 assets/photos/*.json）
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
import albumSoulboy from "../assets/photos/cover-music-Soulboy.jpg";
import albumChengyue from "../assets/photos/cover-music-橙月.jpg";
import albumHuaili from "../assets/photos/cover-music-华丽的冒险.jpg";
import albumTiankong from "../assets/photos/cover-music-天空.jpg";
import albumShoulian from "../assets/photos/cover-music-收敛水.jpg";
import albumGroupies from "../assets/photos/cover-music-Groupies 吉他手.jpg";
import friends1 from "../assets/photos/friends-1.jpg";
import friends2 from "../assets/photos/friends-2.jpg";
import friends3 from "../assets/photos/friends-3.jpg";
import friends5 from "../assets/photos/friends-5.jpg";
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

export const person = {
  en: "CHEN BIAOCONG",
  zh: "陈标聪",
};

// ------------------------------------------------------------
//  Scene 定义（14）
// ------------------------------------------------------------
export type TransitionKind = "fade" | "slide" | "coverOpen" | "curtain" | "hardCut" | "tunnel";

export type Scene = {
  id: string;
  act: "opening" | "music" | "screen" | "football" | "ending";
  transition: TransitionKind;
  theme: "paper" | "dark" | "sepia" | "black" | "night";
};

export const scenes: Scene[] = [
  { id: "opening", act: "opening", transition: "fade", theme: "paper" },
  { id: "jay", act: "music", transition: "slide", theme: "paper" },
  { id: "khalil", act: "music", transition: "slide", theme: "paper" },
  { id: "cheer", act: "music", transition: "coverOpen", theme: "paper" },
  { id: "sheet", act: "music", transition: "slide", theme: "paper" },
  { id: "inter-screen", act: "screen", transition: "curtain", theme: "black" },
  { id: "friends", act: "screen", transition: "curtain", theme: "sepia" },
  { id: "shelf", act: "screen", transition: "slide", theme: "sepia" },
  { id: "friends-archive", act: "screen", transition: "coverOpen", theme: "sepia" },
  { id: "inter-foot", act: "football", transition: "hardCut", theme: "black" },
  { id: "mia", act: "football", transition: "tunnel", theme: "night" },
  { id: "matchday", act: "football", transition: "slide", theme: "night" },
  { id: "deutschland", act: "football", transition: "coverOpen", theme: "night" },
  { id: "ending", act: "ending", transition: "fade", theme: "black" },
];

// ------------------------------------------------------------
//  OPENING — 只有名字，几件事，一个入口。
// ------------------------------------------------------------
export const openingContent = {
  en: person.en,
  zh: person.zh,
  things: ["Music", "Screen", "Football"],
  year: "2026",
  city: "Shenzhen",
  enter: "ENTER",
};

// ------------------------------------------------------------
//  MUSIC — 三个人，每人一屏。不解释。
// ------------------------------------------------------------
export type Artist = {
  id: string;
  en: string;
  zh: string;
  meta: string;
  img: string;
};

export const artists: Artist[] = [
  { id: "jay", en: "JAY CHOU", zh: "周杰伦", meta: "2000 —", img: jayConcert },
  { id: "khalil", en: "KHALIL FONG", zh: "方大同", meta: "Soul · R&B", img: khalil },
  { id: "cheer", en: "CHEER CHEN", zh: "陈绮贞", meta: "2000s —", img: cheerLive },
];

// CONTACT SHEET — 只放人，不放解释。hover 才给一点信息。
export const sheetContent = {
  title: "CONTACT SHEET",
  meta: "QQ Music playlists · 32",
  people: [
    { img: faye, name: "王菲", info: "最·王菲" },
    { img: adele, name: "Adele", info: "21 · 五星" },
    { img: billie, name: "Billie Eilish", info: "HIT ME HARD AND SOFT" },
    { img: laufey, name: "Laufey", info: "Typical of Me" },
    { img: norah, name: "Norah Jones", info: "Come Away with Me" },
    { img: albumYehuimei, name: "叶惠美", info: "JAY · 2003" },
    { img: albumSoulboy, name: "Soulboy", info: "KHALIL · 2005" },
    { img: albumChengyue, name: "橙月", info: "KHALIL · 2008" },
    { img: albumHuaili, name: "华丽的冒险", info: "CHEER · 2005" },
    { img: albumTiankong, name: "天空", info: "FAYE · 1994" },
    { img: albumShoulian, name: "收敛水", info: "蛋堡 · 2009" },
    { img: albumGroupies, name: "吉他手", info: "CHEER · 2002" },
  ],
};

// LATELY — 最近收藏，三首。不做排名。
export const lately = {
  label: "LATELY",
  note: "Recently saved on QQ Music",
  songs: [
    { no: "01", title: "关于小熊", artist: "蛋堡" },
    { no: "02", title: "爱爱爱", artist: "方大同" },
    { no: "03", title: "矜持", artist: "王菲" },
  ],
};

// 最· 系列（来自他的 QQ 歌单名）
export const favouriteSeries = [
  "最·周杰伦", "最·方大同", "最·王菲", "最·陈绮贞",
  "最·莫文蔚", "最·陈奕迅", "最·孙燕姿", "最·蔡依林",
];

// ------------------------------------------------------------
//  SCREEN
// ------------------------------------------------------------
export const interScreen = { act: "II", title: "SCREEN" };

export const friendsContent = {
  name: "FRIENDS",
  years: "1994 – 2004",
  line: "AGAIN?",
  img: [friends1, friends2, friends3, friends5],
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

export const friendsArchive = {
  img: friends5,
  facts: ["2023.07.19 → 08.16", "TEN SEASONS", "ALL 5★"],
  quote: "amazing！",
};

// ------------------------------------------------------------
//  FOOTBALL — 少说话。
// ------------------------------------------------------------
export const interFootball = { act: "III", title: "FOOTBALL" };

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
