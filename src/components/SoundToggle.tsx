import { useAudio } from "../audio/AudioDirector";

/** 极小的声音开关，记住 mute 状态 */
export function SoundToggle() {
  const { muted, toggleMute } = useAudio();
  return (
    <button
      className={`sound-toggle ${muted ? "is-muted" : ""}`}
      onClick={toggleMute}
      aria-label={muted ? "开启声音" : "关闭声音"}
      title={muted ? "Sound off" : "Sound on"}
    >
      <span className="sound-toggle__icon">{muted ? "✕" : "♪"}</span>
      <span className="meta sound-toggle__label">{muted ? "OFF" : "ON"}</span>
    </button>
  );
}
