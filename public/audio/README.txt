V4 AUDIO — 待导入
==================

将源音频放入本目录（命名必须一致）：

source-music.mp3 / .m4a / .flac / .wav   — 方大同《才二十三》
source-bayern.mp3 / .m4a / .flac / .wav  — FC Bayern 队歌
source-screen.mp3 / .m4a / .flac / .wav  — Wonderful Tonight

然后运行：

  node scripts/audio-prep.mjs            # 自动裁剪/淡入淡出/输出
  node scripts/audio-prep.mjs --analyze  # 分析拜仁响度，找高潮秒数

拜仁高潮秒数填在 scripts/audio-prep.mjs 的 START_AT。
音频仅用于私人礼物，不对外发布。
