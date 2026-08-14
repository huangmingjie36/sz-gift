import { motion } from "framer-motion";
import { useState } from "react";
import { endingContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function EndingScene() {
  const [egg, setEgg] = useState(false);
  const seq = (delay: number, duration = 1) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: EASE },
  });

  return (
    <div className="scene-inner ending-scene">
      <motion.p className="ending-scene__line-1" {...seq(0.5)}>
        {endingContent.madeIn}
      </motion.p>
      <motion.p className="ending-scene__line-2 serif" {...seq(1.7, 0.8)}>
        {endingContent.notExactly}
      </motion.p>
      <motion.h2 className="ending-scene__line-3" {...seq(2.6, 1.2)}>
        {endingContent.madeFor[0]}
        <br />
        {endingContent.madeFor[1]}
      </motion.h2>
      <motion.p className="ending-scene__name serif" {...seq(3.8)}>
        {endingContent.name}
      </motion.p>
      <motion.button className="ending-scene__foot meta" {...seq(4.6)} onClick={() => setEgg((v) => !v)} title="深圳特产">
        {endingContent.foot}
      </motion.button>
      <motion.p
        className="ending-scene__egg serif"
        initial={{ opacity: 0 }}
        animate={egg ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        {endingContent.easterEgg}
      </motion.p>
    </div>
  );
}
