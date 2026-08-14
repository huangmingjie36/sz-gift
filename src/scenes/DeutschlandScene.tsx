import { motion } from "framer-motion";
import { deutschlandContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function DeutschlandScene() {
  return (
    <div className="scene-inner deutschland-scene">
      <motion.div
        className="deutschland-scene__bg"
        initial={{ scale: 1.08, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        <img src={deutschlandContent.img} alt="Die Mannschaft" />
        <div className="deutschland-scene__scrim" />
      </motion.div>

      <header className="scene-head scene-head--light">
        <span className="meta">ACT III — FOOTBALL</span>
        <span className="meta">03 / 03</span>
      </header>

      <div className="deutschland-scene__copy">
        <motion.h2
          className="deutschland-scene__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
        >
          {deutschlandContent.title}
        </motion.h2>
        <motion.p
          className="meta deutschland-scene__sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {deutschlandContent.sub} · {deutschlandContent.meta}
        </motion.p>
      </div>
    </div>
  );
}
