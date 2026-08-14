import { motion } from "framer-motion";
import { useState } from "react";
import { endingContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function EndingScene() {
  const [egg, setEgg] = useState(false);
  const seq = (delay: number, duration = 1.2) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: EASE },
  });

  return (
    <div className="scene-inner ending-scene">
      <motion.p className="ending-scene__line-1" {...seq(0.5)}>
        {endingContent.madeIn}
      </motion.p>
      <motion.p className="ending-scene__line-2 serif" {...seq(2)}>
        {endingContent.notExactly}
      </motion.p>
      <motion.h2 className="ending-scene__line-3" {...seq(3, 1.5)}>
        {endingContent.madeFor[0]}
        <br />
        {endingContent.madeFor[1]}
      </motion.h2>
      <motion.p className="ending-scene__name serif" {...seq(4.6)}>
        {endingContent.name}
      </motion.p>
      <motion.button className="ending-scene__foot meta" {...seq(5.6)} onClick={() => setEgg((v) => !v)} title="深圳特产">
        {endingContent.foot}
      </motion.button>
      <motion.p
        className="ending-scene__egg serif"
        initial={{ opacity: 0 }}
        animate={egg ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {endingContent.easterEgg}
      </motion.p>
    </div>
  );
}
