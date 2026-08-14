import { motion } from "framer-motion";
import { rachelContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function RachelScene() {
  return (
    <div className="scene-inner rachel-scene">
      <header className="scene-head">
        <span className="meta">ACT III — SCREEN</span>
        <span className="meta">02 / 03</span>
      </header>

      <motion.div
        className="rachel-scene__photo"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
      >
        <img src={rachelContent.img} alt="Rachel Green" />
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
    </div>
  );
}
