import { motion } from "framer-motion";
import { shelfContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ShelfScene() {
  return (
    <div className="scene-inner shelf-scene">
      <header className="scene-head">
        <span className="meta">ACT II — SCREEN</span>
        <span className="meta">02 / 03</span>
      </header>

      <motion.h2
        className="shelf-scene__title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
      >
        {shelfContent.title}
      </motion.h2>

      <div className="shelf-scene__wall">
        {shelfContent.items.map((s, i) => (
          <motion.figure
            key={s.name}
            className="shelf-scene__poster"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 + i * 0.07, ease: EASE }}
          >
            <img src={s.img} alt={s.name} />
            <figcaption>
              <span className="shelf-scene__name serif">{s.name}</span>
              <span className="meta shelf-scene__meta">{s.meta}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
