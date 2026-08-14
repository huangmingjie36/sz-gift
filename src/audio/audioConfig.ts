// ============================================================
//  AUDIO CONFIG — 三幕配乐
//  路径预留；本地有文件后放入 public/audio/ 即可。
//  football.startAt = null：等待人工确认拜仁队歌高潮秒数。
// ============================================================

export type TrackConfig = {
  title: string;
  artist: string;
  src: string;
  startAt: number | null;
};

export const audioConfig: {
  music: TrackConfig;
  football: TrackConfig;
  screen: TrackConfig;
} = {
  music: {
    title: "才二十三",
    artist: "方大同",
    src: "/audio/music.mp3",
    startAt: 0,
  },
  football: {
    title: "FC Bayern Anthem",
    artist: "—",
    src: "/audio/bayern.mp3",
    startAt: 0, // 成品已从 45s 高潮段裁剪（源文件保留在 src/data/audio-source/）
  },
  screen: {
    title: "Wonderful Tonight",
    artist: "Eric Clapton",
    src: "/audio/screen.mp3",
    startAt: 0,
  },
};
