import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { endingContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function EndingScene() {
  const [egg, setEgg] = useState(false);
  const timer = useRef<number | null>(null);
  const seq = (delay: number, duration = 1) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: EASE },
  });

  const pop = () => {
    setEgg(true);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setEgg(false), 2000);
  };

  return (
    <div className="scene-inner ending-scene">
      <motion.button className="ending-scene__title serif" {...seq(0.5)} onClick={pop} title="深圳特产">
        {endingContent.title}
      </motion.button>
      <motion.p className="meta ending-scene__en" {...seq(1.4, 0.8)}>
        {endingContent.en}
      </motion.p>
      <motion.p className="ending-scene__line serif" {...seq(2.2)}>
        {endingContent.line}
      </motion.p>
      <motion.p className="ending-scene__foot meta" {...seq(3.2)}>
        {endingContent.foot}
      </motion.p>
      <motion.p
        className="ending-scene__egg serif"
        initial={{ opacity: 0 }}
        animate={egg ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {endingContent.easterEgg}
      </motion.p>
    </div>
  );
}
