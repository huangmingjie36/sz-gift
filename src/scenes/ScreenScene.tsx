import { motion } from "framer-motion";
import { screenContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ScreenScene() {
  return (
    <div className="scene-inner screen-scene">
      <header className="scene-head">
        <span className="meta">ACT II — SCREEN</span>
        <span className="meta">03 / 03</span>
      </header>

      <div className="screen-scene__grid">
        <div className="screen-scene__copy">
          <motion.h2
            className="screen-scene__title display"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            {screenContent.title}
          </motion.h2>
          <motion.p
            className="screen-scene__statement serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            {screenContent.statement}
          </motion.p>
          <motion.p className="meta screen-scene__meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.4 }}>
            {screenContent.meta}
          </motion.p>
        </div>

        <div className="screen-scene__wall">
          {screenContent.films.map((f, i) => (
            <motion.figure
              key={f.name}
              className={`screen-scene__film screen-scene__film--${i + 1}`}
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 + i * 0.12, ease: EASE }}
            >
              <img src={f.img} alt={f.name} />
              <figcaption className="meta">{f.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </div>
  );
}
