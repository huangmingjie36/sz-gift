import { motion } from "framer-motion";
import { voicesContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function VoicesScene() {
  const pop = (delay: number, rot: number) => ({
    initial: { opacity: 0, y: 30, rotate: 0 },
    animate: { opacity: 1, y: 0, rotate: rot },
    transition: { duration: 0.9, delay, ease: EASE },
  });
  return (
    <div className="scene-inner voices-scene">
      <header className="scene-head">
        <span className="meta">ACT I — MUSIC</span>
        <span className="meta">02 / 04</span>
      </header>

      <div className="voices-scene__grid">
        <div className="voices-scene__copy">
          <motion.h2
            className="voices-scene__title display"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            {voicesContent.title}
          </motion.h2>
          <motion.p
            className="voices-scene__zh serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.7 }}
          >
            {voicesContent.zh}
          </motion.p>
          <motion.p
            className="meta voices-scene__note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 1.1 }}
          >
            {voicesContent.note}
          </motion.p>
        </div>

        <div className="voices-scene__wall">
          {voicesContent.photos.map((p, i) => (
            <motion.figure className={`voices-scene__photo voices-scene__photo--${i + 1}`} key={p.name} {...pop(0.5 + i * 0.14, [0, -2, 2, -1.5, 1.5][i])}>
              <img src={p.img} alt={p.name} />
              <figcaption className="meta">{p.name}</figcaption>
            </motion.figure>
          ))}
          {voicesContent.albums.map((a, i) => (
            <motion.div className={`voices-scene__album voices-scene__album--${i + 1}`} key={a.name} {...pop(1.1 + i * 0.1, [0, 2, -2, 1.5, -1, 2.5][i])}>
              <img src={a.img} alt={a.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
