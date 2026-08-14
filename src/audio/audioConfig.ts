// ============================================================
//  AUDIO CONFIG — 三幕配乐（Production：资源随站点发布）
// ============================================================
import musicUrl from "../assets/audio/music.mp3";
import bayernUrl from "../assets/audio/bayern.mp3";
import screenUrl from "../assets/audio/screen.mp3";

export type TrackConfig = {
  title: string;
  artist: string;
  src: string;
  startAt: number;
};

export const audioConfig: {
  music: TrackConfig;
  football: TrackConfig;
  screen: TrackConfig;
} = {
  music: {
    title: "才二十三",
    artist: "方大同",
    src: musicUrl,
    startAt: 0,
  },
  football: {
    title: "FC Bayern Anthem",
    artist: "—",
    src: bayernUrl,
    startAt: 0, // 成品已从 45s 高潮段裁剪（源文件保留在 src/data/audio-source/）
  },
  screen: {
    title: "Wonderful Tonight",
    artist: "Eric Clapton",
    src: screenUrl,
    startAt: 0,
  },
};
