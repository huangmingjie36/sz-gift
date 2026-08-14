import { createContext, useCallback, useContext, useRef, useState } from "react";
import type { ReactNode } from "react";
import { audioConfig, type TrackConfig } from "./audioConfig";

type Act = "music" | "football" | "screen";

type AudioCtx = {
  muted: boolean;
  toggleMute: () => void;
  start: () => void;
  playAct: (act: Act) => void;
  /** 进入内容层级：背景音乐轻微降低（约 8%） */
  duck: () => void;
  unduck: () => void;
};

const Ctx = createContext<AudioCtx>({
  muted: false,
  toggleMute: () => {},
  start: () => {},
  playAct: () => {},
  duck: () => {},
  unduck: () => {},
});
export const useAudio = () => useContext(Ctx);

const VOLUME = 0.55;
const MUTE_KEY = "chen-audio-muted";

/** 全局 Audio Director：单一音频源，负责 fadeIn/Out、幕切换、mute 记忆 */
export function AudioDirector({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeTimer = useRef<number | null>(null);
  const [muted, setMuted] = useState(() => {
    try {
      return localStorage.getItem(MUTE_KEY) === "1";
    } catch {
      return false;
    }
  });
  const started = useRef(false);
  const currentAct = useRef<Act | null>(null);

  const stopFade = () => {
    if (fadeTimer.current !== null) {
      window.clearInterval(fadeTimer.current);
      fadeTimer.current = null;
    }
  };

  const fadeTo = useCallback((target: number, ms: number, done?: () => void) => {
    const audio = audioRef.current;
    if (!audio) { done?.(); return; }
    stopFade();
    const from = audio.volume;
    const start = performance.now();
    fadeTimer.current = window.setInterval(() => {
      const t = Math.min(1, (performance.now() - start) / ms);
      audio.volume = from + (target - from) * (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
      if (t >= 1) {
        stopFade();
        if (target === 0) audio.pause();
        done?.();
      }
    }, 30);
  }, []);

  const loadTrack = useCallback((track: TrackConfig, autoplay: boolean) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = track.src;
    audio.volume = 0;
    audio.currentTime = track.startAt ?? 0;
    if (autoplay) {
      audio.play().catch(() => {});
    }
  }, []);

  const playAct = useCallback(
    (act: Act) => {
      if (!started.current) return;
      const audio = audioRef.current;
      if (!audio) return;
      if (act === currentAct.current) return;

      const prev = currentAct.current;
      currentAct.current = act;
      const track = audioConfig[act];

      // MUSIC → FOOTBALL：快速 fade out + 短停顿 + 高潮硬进
      if (prev === "music" && act === "football") {
        fadeTo(0, 380, () => {
          window.setTimeout(() => {
            if (muted) return;
            loadTrack(track, true);
            fadeTo(VOLUME, 320);
          }, 220);
        });
        return;
      }

      // FOOTBALL → SCREEN：逐渐退出 + Wonderful Tonight 0:00 进入
      if (prev === "football" && act === "screen") {
        fadeTo(0, 900, () => {
          if (muted) return;
          loadTrack(track, true);
          fadeTo(VOLUME, 700);
        });
        return;
      }

      // 常规切换
      fadeTo(0, 500, () => {
        if (muted) return;
        loadTrack(track, true);
        fadeTo(VOLUME, 500);
      });
    },
    [fadeTo, loadTrack, muted],
  );

  const start = useCallback(() => {
    if (started.current) return;
    started.current = true;
    currentAct.current = "music";
    const audio = audioRef.current;
    if (!audio || muted) return;
    loadTrack(audioConfig.music, true);
    fadeTo(VOLUME, 600);
  }, [fadeTo, loadTrack, muted]);

  const ducked = useRef(false);
  const duck = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || ducked.current || audio.volume <= 0) return;
    ducked.current = true;
    fadeTo(Math.max(audio.volume * 0.92, 0.02), 300);
  }, [fadeTo]);
  const unduck = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !ducked.current) return;
    ducked.current = false;
    if (!muted) fadeTo(VOLUME, 300);
  }, [fadeTo, muted]);

  const toggleMute = useCallback(() => {
    setMuted((m) => {
      const next = !m;
      try {
        localStorage.setItem(MUTE_KEY, next ? "1" : "0");
      } catch {}
      const audio = audioRef.current;
      if (audio) {
        if (next) {
          stopFade();
          audio.pause();
        } else if (started.current && currentAct.current) {
          const track = audioConfig[currentAct.current];
          audio.currentTime = track.startAt ?? audio.currentTime;
          audio.play().catch(() => {});
          fadeTo(VOLUME, 400);
        }
      }
      return next;
    });
  }, [fadeTo]);

  return (
    <Ctx.Provider value={{ muted, toggleMute, start, playAct, duck, unduck }}>
      <audio ref={audioRef} preload="none" />
      {children}
    </Ctx.Provider>
  );
}
