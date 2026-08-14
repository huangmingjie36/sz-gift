import { motion } from "framer-motion";
import { useState } from "react";
import { oliseContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function OliseScene() {
  const [frame, setFrame] = useState(0);
  const [ball, setBall] = useState(false);
  const ballTimer = useRefTimer();

  return (
    <div className="scene-inner olise-scene">
      <header className="scene-head scene-head--light">
        <span className="meta">ACT II — FOOTBALL</span>
        <span className="meta">03 / 04</span>
      </header>

      <motion.div
        className="olise-scene__stage"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
      >
        <motion.img
          key={frame}
          src={frame === 0 ? oliseContent.img : oliseContent.sequence[frame - 1]}
          alt={frame === 0 ? "Michael Olise, FC Bayern" : "Michael Olise, France 2026"}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          loading="lazy"
        />
      </motion.div>

      <div className="olise-scene__copy">
        <motion.h2
          className="olise-scene__name"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
        >
          {oliseContent.name}
        </motion.h2>
        <motion.p className="olise-scene__zh serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }}>
          {oliseContent.zh}
        </motion.p>
        <motion.p className="meta olise-scene__meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.5 }}>
          {oliseContent.meta}
        </motion.p>
      </div>

      {/* 比赛瞬间连拍：点击切换 */}
      <div className="olise-scene__strip">
        {[oliseContent.img, ...oliseContent.sequence].map((im, i) => (
          <motion.button
            key={i}
            className={`olise-scene__frame ${frame === i ? "is-active" : ""}`}
            onClick={() => setFrame(i)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
            data-cursor="NEXT"
            data-hover="NEXT"
            aria-label={`比赛瞬间 ${i + 1}`}
          >
            <img src={im} alt={`Olise ${i + 1}`} loading="lazy" />
          </motion.button>
        ))}
      </div>

      {/* 彩蛋：⚽ */}
      <button
        className="olise-scene__ball"
        onClick={() => {
          setBall(true);
          if (ballTimer.current) window.clearTimeout(ballTimer.current);
          ballTimer.current = window.setTimeout(() => setBall(false), 1800);
        }}
        aria-label="彩蛋"
        title="?"
      >
        <span className="olise-scene__ball-icon">⚽</span>
        <AnimatedBall text={oliseContent.name} show={ball} />
      </button>
    </div>
  );
}

import { useRef } from "react";

function useRefTimer() {
  return useRef<number | null>(null);
}

function AnimatedBall({ text, show }: { text: string; show: boolean }) {
  return (
    <motion.span
      className="meta olise-scene__ball-label"
      initial={{ opacity: 0 }}
      animate={show ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {text}.
    </motion.span>
  );
}
