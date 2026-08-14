import { motion } from "framer-motion";
import { deepCutsContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function DeepCutsScene() {
  return (
    <div className="scene-inner deepcuts-scene">
      <header className="scene-head">
        <span className="meta">ACT I — MUSIC</span>
        <span className="meta">04 / 04</span>
      </header>

      <motion.h2
        className="deepcuts-scene__title display"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: EASE }}
      >
        {deepCutsContent.title}
      </motion.h2>
      <motion.p
        className="deepcuts-scene__zh serif"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.6 }}
      >
        {deepCutsContent.zh}
      </motion.p>

      <div className="deepcuts-scene__grid">
        {deepCutsContent.items.map((d, i) => (
          <motion.div
            className="deepcuts-scene__item"
            key={d.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 + i * 0.12, ease: EASE }}
          >
            <span className="meta deepcuts-scene__no">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="deepcuts-scene__name serif">{d.name}</h3>
            <p className="deepcuts-scene__work">{d.work}</p>
            <span className="meta deepcuts-scene__tag">{d.tag}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
