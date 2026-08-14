import { motion } from "framer-motion";
import { miaContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function MiaScene() {
  return (
    <div className="scene-inner mia-scene">
      <motion.div
        className="mia-scene__bg"
        initial={{ scale: 1.1, filter: "brightness(0.45) saturate(0.7)" }}
        animate={{ scale: 1, filter: "brightness(1) saturate(1)" }}
        transition={{ duration: 2.2, delay: 0.4, ease: EASE }}
      >
        <img src={miaContent.img} alt="FC Bayern München" loading="lazy" />
        <div className="mia-scene__scrim" />
      </motion.div>

      <header className="scene-head scene-head--light">
        <span className="meta">ACT II — FOOTBALL</span>
        <span className="meta">01 / 04</span>
      </header>

      <div className="mia-scene__copy">
        <motion.h2
          className="mia-scene__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4, ease: EASE }}
        >
          {miaContent.title}
        </motion.h2>
        <motion.p
          className="meta mia-scene__club"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.9 }}
        >
          {miaContent.club}
        </motion.p>
      </div>
    </div>
  );
}
