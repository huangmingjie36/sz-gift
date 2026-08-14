import { motion } from "framer-motion";
import { actMusic } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ActMusicScene() {
  return (
    <div className="scene-inner act-scene act-scene--music">
      <motion.span
        className="act-scene__roman serif"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: EASE }}
      >
        {actMusic.act}
      </motion.span>
      <motion.h2
        className="act-scene__title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: EASE }}
      >
        {actMusic.title}
      </motion.h2>
      <motion.p
        className="act-scene__zh serif"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.1 }}
      >
        {actMusic.zh}
      </motion.p>
    </div>
  );
}
