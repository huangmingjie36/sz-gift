import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { rachelContent, signature } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function RachelScene() {
  const [egg, setEgg] = useState(false);
  // 取景框微动：鼠标轻微偏移裁切位置
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const objectPosition = useTransform(() => {
    const x = (sx.get() + 0.5) * 8 + 46;
    const y = (sy.get() + 0.5) * 8 + 24;
    return `${x.toFixed(1)}% ${y.toFixed(1)}%`;
  });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div className="scene-inner rachel-scene">
      <header className="scene-head">
        <span className="meta">ACT III — SCREEN</span>
        <span className="meta">02 / 03</span>
      </header>

      <motion.div
        className="rachel-scene__photo"
        onDoubleClick={() => {
          setEgg((v) => !v);
          window.setTimeout(() => setEgg(false), 2600);
        }}
        data-cursor="RACHEL"
        data-hover="RACHEL"
      >
        <motion.img
          src={rachelContent.img}
          alt="Rachel Green"
          style={{ objectPosition }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
          loading="lazy"
        />
      </motion.div>

      <div className="rachel-scene__copy">
        <motion.h2
          className="rachel-scene__name"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
        >
          {rachelContent.name}
        </motion.h2>
        <motion.p
          className="rachel-scene__line serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.4 }}
        >
          {rachelContent.line}
        </motion.p>
      </div>

      <span className="rachel-scene__sig signature" aria-hidden="true">
        {signature}.
      </span>

      <motion.p
        className="rachel-scene__egg serif"
        initial={{ opacity: 0 }}
        animate={egg ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        Of course it's Rachel.
      </motion.p>
    </div>
  );
}
