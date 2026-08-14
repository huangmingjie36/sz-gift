import { motion } from "framer-motion";
import { albumContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AlbumScene() {
  return (
    <div className="scene-inner album-scene">
      <header className="scene-head scene-head--light">
        <span className="meta">ACT I — MUSIC</span>
        <span className="meta">03 / 04</span>
      </header>

      <div className="album-scene__grid">
        <motion.div
          className="album-scene__cover"
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
        >
          <img src={albumContent.img} alt={albumContent.en} />
          <span className="meta album-scene__cover-meta">{albumContent.meta}</span>
        </motion.div>

        <div className="album-scene__copy">
          <motion.p
            className="album-scene__kicker meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {albumContent.title}
          </motion.p>
          <motion.h2
            className="album-scene__name serif"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.1, ease: EASE }}
          >
            {albumContent.en}
          </motion.h2>
          <motion.p
            className="album-scene__zh serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.6 }}
          >
            {albumContent.zh}
          </motion.p>
          <motion.p
            className="album-scene__line serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 2 }}
          >
            {albumContent.line}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
