import { AnimatePresence, motion } from "framer-motion";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { scenes, type TransitionKind } from "../data/scenes";
import { useAudio } from "../audio/AudioDirector";

const EASE = [0.22, 1, 0.36, 1] as const;

// framer-motion 类型较宽，这里用宽松类型承载 enter/center/exit 变体
type VariantDef = ((d: number) => import("framer-motion").TargetAndTransition) | import("framer-motion").TargetAndTransition;
const variants: Record<TransitionKind, { enter: VariantDef; center: import("framer-motion").TargetAndTransition; exit: VariantDef }> = {
  fade: {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
    exit: { opacity: 0, transition: { duration: 0.4, ease: EASE } },
  },
  slide: {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 1 }),
    center: { x: "0%", opacity: 1, transition: { duration: 0.7, ease: EASE } },
    exit: (d: number) => ({ x: d > 0 ? "-26%" : "26%", opacity: 0.2, transition: { duration: 0.38, ease: EASE } }),
  },
  coverOpen: {
    enter: { scale: 0.95, opacity: 0 },
    center: { scale: 1, opacity: 1, transition: { duration: 0.75, ease: EASE } },
    exit: { scale: 1.05, opacity: 0, transition: { duration: 0.4, ease: EASE } },
  },
  curtain: {
    enter: { clipPath: "inset(0 0 100% 0)" },
    center: { clipPath: "inset(0 0 0% 0)", transition: { duration: 0.8, ease: EASE } },
    exit: { clipPath: "inset(100% 0 0 0)", transition: { duration: 0.45, ease: EASE } },
  },
  hardCut: {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.15, ease: "easeIn" } },
  },
  tunnel: {
    enter: { scale: 1.15, opacity: 0 },
    center: { scale: 1, opacity: 1, transition: { duration: 0.9, ease: EASE } },
    exit: { scale: 0.95, opacity: 0, transition: { duration: 0.4, ease: EASE } },
  },
  mask: {
    enter: { clipPath: "inset(0 0 100% 0)", opacity: 0.5 },
    center: { clipPath: "inset(0 0 0% 0)", opacity: 1, transition: { duration: 0.85, ease: EASE } },
    exit: { clipPath: "inset(100% 0 0 0)", opacity: 0.4, transition: { duration: 0.4, ease: EASE } },
  },
};

type DeckCtx = {
  index: number;
  total: number;
  goNext: () => void;
  goPrev: () => void;
  goTo: (i: number) => void;
  actIndex: (act: string) => number;
};

export const DeckContext = createContext<DeckCtx>({
  index: 0,
  total: scenes.length,
  goNext: () => {},
  goPrev: () => {},
  goTo: () => {},
  actIndex: () => 0,
});

export const useDeck = () => useContext(DeckContext);

type DeckProps = {
  children: ReactNode[];
};

export function Deck({ children }: DeckProps) {
  const [index, setIndex] = useState(0);
  const { playAct } = useAudio();
  const [dir, setDir] = useState(1);
  const lock = useRef(false);

  const goTo = useCallback((i: number) => {
    setIndex((cur) => {
      const next = Math.max(0, Math.min(scenes.length - 1, i));
      setDir(next >= cur ? 1 : -1);
      return next;
    });
  }, []);

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  const actIndex = useCallback((act: string) => {
    const i = scenes.findIndex((s) => s.act === act);
    return Math.max(0, i);
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (lock.current) return;
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 24) return;
      lock.current = true;
      if (delta > 0) goNext();
      else goPrev();
      setTimeout(() => (lock.current = false), 850);
    };
    const onKey = (e: KeyboardEvent) => {
      if (lock.current) return;
      const k = e.key;
      if (["ArrowDown", "PageDown", " ", "ArrowRight", "Enter"].includes(k)) {
        e.preventDefault();
        lock.current = true;
        goNext();
        setTimeout(() => (lock.current = false), 500);
      } else if (["ArrowUp", "PageUp", "ArrowLeft"].includes(k)) {
        e.preventDefault();
        lock.current = true;
        goPrev();
        setTimeout(() => (lock.current = false), 500);
      } else if (k === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (k === "End") {
        e.preventDefault();
        goTo(scenes.length - 1);
      }
    };
    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (lock.current) return;
      const dy = touchY - e.changedTouches[0].clientY;
      if (Math.abs(dy) < 50) return;
      lock.current = true;
      if (dy > 0) goNext();
      else goPrev();
      setTimeout(() => (lock.current = false), 700);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [goNext, goPrev, goTo]);

  const current = scenes[index];

  // 幕切换 → Audio Director（opening / ending 不切曲目）
  useEffect(() => {
    if (current.act === "music" || current.act === "football" || current.act === "screen") {
      playAct(current.act);
    }
  }, [current.act, playAct]);

  return (
    <DeckContext.Provider value={{ index, total: scenes.length, goNext, goPrev, goTo, actIndex }}>
      <div className="deck">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.section
            key={current.id}
            data-scene={current.id}
            className={`scene scene--${current.theme}`}
            custom={dir}
            variants={variants[current.transition]}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {children[index]}
          </motion.section>
        </AnimatePresence>
        <DeckNav />
      </div>
    </DeckContext.Provider>
  );
}

function DeckNav() {
  const { index, goTo, actIndex } = useDeck();
  const currentAct = scenes[index].act;
  return (
    <nav className="decknav" aria-label="三幕导航">
      <div className="decknav__acts">
        {(["music", "football", "screen"] as const).map((key, i) => {
          const roman = ["I", "II", "III"][i];
          return (
            <button
              key={key}
              className={`meta decknav__act ${currentAct === key ? "is-active" : ""}`}
              onClick={() => goTo(actIndex(key))}
              aria-label={`第 ${roman} 幕`}
            >
              {roman}
            </button>
          );
        })}
      </div>
      <div className="decknav__bar">
        <span style={{ width: `${((index + 1) / scenes.length) * 100}%` }} />
      </div>
    </nav>
  );
}
