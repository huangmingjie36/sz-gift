// ============================================================
//  V2 — curatedContent（Scene 数据层）
//  研究数据 → 筛选 → 最终作品。这里只放"值得占一屏"的东西。
//  图片均带 source / year / context（见 photos/*.json）
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
import albumHuaiLi from "../assets/photos/cover-music-华丽的冒险.jpg";
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
import kimmich from "../assets/photos/kimmich1.jpg";

export const person = {
  en: "CHEN BIAOCONG",
  zh: "陈标聪",
  tagline: "A PRIVATE CULTURAL UNIVERSE",
  alt: "THE THINGS YOU KEPT",
};

// ------------------------------------------------------------
//  Scene 定义
// ------------------------------------------------------------
export type TransitionKind = "fade" | "slide" | "coverOpen" | "curtain" | "hardCut" | "tunnel";

export type Scene = {
  id: string;
  act: "opening" | "music" | "screen" | "football" | "ending";
  transition: TransitionKind;
  theme: "paper" | "dark" | "sepia" | "black" | "night" | "red";
};

export const scenes: Scene[] = [
  { id: "opening", act: "opening", transition: "fade", theme: "paper" },
  { id: "act-music", act: "music", transition: "fade", theme: "paper" },
  { id: "three", act: "music", transition: "slide", theme: "paper" },
  { id: "voices", act: "music", transition: "coverOpen", theme: "paper" },
  { id: "album", act: "music", transition: "slide", theme: "night" },
  { id: "deepcuts", act: "music", transition: "coverOpen", theme: "paper" },
  { id: "inter-screen", act: "screen", transition: "curtain", theme: "black" },
  { id: "friends", act: "screen", transition: "curtain", theme: "sepia" },
  { id: "after", act: "screen", transition: "slide", theme: "sepia" },
  { id: "screen", act: "screen", transition: "coverOpen", theme: "sepia" },
  { id: "inter-foot", act: "football", transition: "hardCut", theme: "black" },
  { id: "mia", act: "football", transition: "tunnel", theme: "night" },
  { id: "matchday", act: "football", transition: "slide", theme: "night" },
  { id: "deutschland", act: "football", transition: "coverOpen", theme: "night" },
  { id: "ending", act: "ending", transition: "fade", theme: "black" },
];

// ------------------------------------------------------------
//  各 Scene 内容（curated）
// ------------------------------------------------------------

export const openingContent = {
  name: person.en,
  zh: person.zh,
  tagline: person.tagline,
  alt: person.alt,
  enter: "ENTER",
};

export const actMusic = {
  act: "I",
  title: "MUSIC",
  zh: "有些声音，你反复听了十几年。",
};

export const threeContent = {
  title: "THE THREE",
  zh: "这三个人大概不用介绍。你已经认识他们很久了。",
  items: [
    { en: "JAY CHOU", zh: "周杰伦", tag: "MEMORY", line: "叶惠美 · 七里香 · 十一月的萧邦", img: jayConcert, alt: "周杰伦演唱会" },
    { en: "KHALIL FONG", zh: "方大同", tag: "GROOVE", line: "Soulboy · 未来 · 橙月 · 15", img: khalil, alt: "方大同 2011" },
    { en: "CHEER CHEN", zh: "陈绮贞", tag: "POETRY", line: "让我想一想 · 吉他手 · 华丽的冒险", img: cheerLive, alt: "陈绮贞演唱会" },
  ],
};

export const voicesContent = {
  title: "OTHER VOICES",
  zh: "她们在你的收藏里，占了大多数。",
  note: "王菲 · 陈珊妮 · 蛋堡 · Adele · Norah Jones · Laufey · Billie Eilish · 小野丽莎……",
  photos: [
    { img: faye, name: "王菲" },
    { img: adele, name: "Adele" },
    { img: billie, name: "Billie Eilish" },
    { img: laufey, name: "Laufey" },
    { img: norah, name: "Norah Jones" },
  ],
  albums: [
    { img: albumYehuimei, name: "叶惠美" },
    { img: albumSoulboy, name: "Soulboy" },
    { img: albumChengyue, name: "橙月" },
    { img: albumTiankong, name: "天空" },
    { img: albumShoulian, name: "收敛水" },
    { img: albumGroupies, name: "吉他手" },
  ],
};

export const albumContent = {
  title: "ONE ALBUM · ONE NIGHT",
  en: "华丽的冒险",
  zh: "2005 年。你给了它五星。",
  line: "有些专辑不用解释。放一晚就行。",
  img: albumHuaiLi,
  meta: "陈绮贞 · 2005 · 五星",
};

export const deepCutsContent = {
  title: "DEEP CUTS",
  zh: "这些不一定是你最常说的。但都在收藏里。",
  items: [
    { name: "陈珊妮", work: "完美的呻吟", tag: "2000" },
    { name: "蛋堡", work: "收敛水", tag: "2009" },
    { name: "Tizzy Bac", work: "什么事都叫我分心", tag: "2003" },
    { name: "向日葵乐队", work: "生活在别处", tag: "独立" },
    { name: "超兽武装", work: "仁者无敌 / 勇者无惧", tag: "2011 · 国漫" },
    { name: "Keb' Mo'", work: "Suitcase", tag: "蓝调" },
  ],
};

export const interScreen = {
  act: "II",
  title: "SCREEN",
  zh: "影视大概是你的第二故乡。",
};

export const friendsContent = {
  title: "THE ONE WHERE YOU WATCHED IT AGAIN.",
  zh: ["又看了一遍。", "不过反正，你大概还会再看。"],
  meta: "2023 年夏天 · 一个月 · 十季 · 全是五星",
  quote: "amazing！🥳",
  img: [friends1, friends2, friends3, friends5],
};

export const afterContent = {
  title: "AFTER CENTRAL PERK",
  zh: "从那以后，你还在追。而且总能追到最后。",
  shows: [
    { img: posterTbbt, name: "生活大爆炸", note: "S1–5" },
    { img: posterStranger, name: "怪奇物语", note: "S1–5" },
    { img: posterLongSeason, name: "漫长的季节", note: "五星" },
    { img: posterEndgame, name: "复仇者联盟 4", note: "五星" },
  ],
};

export const screenContent = {
  title: "YOUR SCREEN",
  statement: "你喜欢的电影，大概有两种：让你笑到不行的，和让你看完安静很久的。",
  films: [
    { img: posterKungFu, name: "功夫" },
    { img: posterLetBullets, name: "让子弹飞" },
    { img: posterInMood, name: "花样年华" },
    { img: posterChungking, name: "重庆森林" },
    { img: posterPulp, name: "低俗小说" },
    { img: posterWallE, name: "机器人总动员" },
  ],
  meta: "118 部看过 · 65 部五星",
};

export const interFootball = {
  act: "III",
  title: "FOOTBALL",
  zh: "每个周末，你总会回来。",
};

export const miaContent = {
  title: "MIA SAN MIA.",
  club: "FC BAYERN MÜNCHEN",
  zh: "有些球队不是「关注」。是每个周末，你总会回来。",
  img: bayernTeam,
  meta: "2025/26 · 官方全家福",
};

export const matchdayContent = {
  title: "MATCHDAY",
  arena: "ALLIANZ ARENA",
  zh: "深夜的约定。",
  home: "FCB",
  score: "4",
  dash: "—",
  away: "0",
  foot: "90' · SAT 20:30",
  img: allianzNight,
};

export const deutschlandContent = {
  title: "DIE MANNSCHAFT",
  sub: "GERMANY NATIONAL TEAM",
  zh: "另一种红白。另一种从很久以前留下来的执念。",
  img: musiala,
  meta: "2026 · World Cup · Musiala",
  extra: { img: kimmich, note: "同一个地方长大的人" },
};

export const endingContent = {
  madeIn: "MADE IN SHENZHEN.",
  notExactly: "Not exactly.",
  madeFor: ["MADE FOR YOU,", "IN SHENZHEN."],
  name: person.zh,
  foot: "Compiled with friendship.",
  easterEgg: "苏州特产你随便带。深圳这份，已经编译好了。",
};
