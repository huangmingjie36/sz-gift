import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { oliseContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function OliseScene() {
  const frames = [oliseContent.img, ...oliseContent.sequence];
  const [frame, setFrame] = useState(0);
  const dragX = useRef<number | null>(null);

  const onDown = (e: React.PointerEvent) => { dragX.current = e.clientX; };
  const onUp = (e: React.PointerEvent) => {
    if (dragX.current === null) return;
    const dx = e.clientX - dragX.current;
    if (dx < -50) setFrame((f) => Math.min(frames.length - 1, f + 1));
    else if (dx > 50) setFrame((f) => Math.max(0, f - 1));
    dragX.current = null;
  };

  return (
    <div className="scene-inner olise-scene">

      <motion.div
        className="olise-scene__stage"
        onPointerDown={onDown}
        onPointerUp={onUp}
        data-cursor="drag"
        data-hover="drag"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
      >
        <motion.img
          key={frame}
          src={frames[frame]}
          alt={frame === 0 ? "Michael Olise, FC Bayern" : "Michael Olise, France 2026"}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: EASE }}
          loading="lazy"
        />
      </motion.div>

      <div className="olise-scene__copy">
        <motion.h2 className="olise-scene__name" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9, ease: EASE }}>
          {oliseContent.name}
        </motion.h2>
        <motion.p className="meta olise-scene__meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.3 }}>
          {oliseContent.meta}
        </motion.p>
      </div>

      <div className="olise-scene__strip">
        {frames.map((im, i) => (
          <motion.button
            key={i}
            className={`olise-scene__frame ${frame === i ? "is-active" : ""}`}
            onClick={() => setFrame(i)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 + i * 0.08 }}
            data-cursor="next"
            data-hover="next"
            aria-label={`比赛瞬间 ${i + 1}`}
          >
            <img src={im} alt={`Olise ${i + 1}`} loading="lazy" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
