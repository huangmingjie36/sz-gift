import { motion } from "framer-motion";
import { deutschlandContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function DeutschlandScene() {
  return (
    <div className="scene-inner deutschland-scene">
      <header className="scene-head scene-head--light">
        <span className="meta">ACT III — FOOTBALL</span>
        <span className="meta">03 / 03</span>
      </header>

      <div className="deutschland-scene__grid">
        <div className="deutschland-scene__copy">
          <motion.h2
            className="deutschland-scene__title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: EASE }}
          >
            {deutschlandContent.title}
          </motion.h2>
          <motion.p className="meta deutschland-scene__sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
            {deutschlandContent.sub}
          </motion.p>
          <motion.p className="deutschland-scene__zh serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.2 }}>
            {deutschlandContent.zh}
          </motion.p>
          <motion.p className="meta deutschland-scene__meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.7 }}>
            {deutschlandContent.meta}
          </motion.p>

          <motion.figure className="deutschland-scene__extra" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 2 }}>
            <img src={deutschlandContent.extra.img} alt="Kimmich" />
            <figcaption className="meta">{deutschlandContent.extra.note}</figcaption>
          </motion.figure>
        </div>

        <motion.div
          className="deutschland-scene__photo"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: EASE }}
        >
          <img src={deutschlandContent.img} alt="Die Mannschaft" />
        </motion.div>
      </div>
    </div>
  );
}
