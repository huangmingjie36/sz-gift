import { motion } from "framer-motion";
import { afterContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AfterScene() {
  return (
    <div className="scene-inner after-scene">
      <header className="scene-head">
        <span className="meta">ACT II — SCREEN</span>
        <span className="meta">02 / 03</span>
      </header>

      <motion.h2
        className="after-scene__title display"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: EASE }}
      >
        {afterContent.title}
      </motion.h2>
      <motion.p className="after-scene__zh serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.1, delay: 0.6 }}>
        {afterContent.zh}
      </motion.p>

      <div className="after-scene__wall">
        {afterContent.shows.map((s, i) => (
          <motion.figure
            key={s.name}
            className="after-scene__poster"
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: [0, -1, 1, -0.5, 0][i] }}
            transition={{ duration: 0.9, delay: 0.7 + i * 0.15, ease: EASE }}
          >
            <div className="after-scene__poster-img">
              <img src={s.img} alt={s.name} />
            </div>
            <figcaption>
              <span className="after-scene__name serif">{s.name}</span>
              <span className="meta after-scene__note">{s.note}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
