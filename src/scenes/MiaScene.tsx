import { motion } from "framer-motion";
import { miaContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function MiaScene() {
  return (
    <div className="scene-inner mia-scene">
      <motion.div
        className="mia-scene__bg"
        initial={{ scale: 1.12, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <img src={miaContent.img} alt="FC Bayern München" />
        <div className="mia-scene__scrim" />
      </motion.div>

      <header className="scene-head scene-head--light">
        <span className="meta">ACT III — FOOTBALL</span>
        <span className="meta">01 / 03</span>
      </header>

      <div className="mia-scene__copy">
        <motion.h2
          className="mia-scene__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
        >
          {miaContent.title}
        </motion.h2>
        <motion.p className="meta mia-scene__club" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          {miaContent.club}
        </motion.p>
        <motion.p className="mia-scene__zh serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.4 }}>
          {miaContent.zh}
        </motion.p>
        <motion.p className="meta mia-scene__meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.9 }}>
          {miaContent.meta}
        </motion.p>
      </div>
    </div>
  );
}
