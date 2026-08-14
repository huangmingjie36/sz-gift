import { motion } from "framer-motion";
import { threeContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ThreeScene() {
  const [jay, khalil, cheer] = threeContent.items;
  const pop = (delay: number) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: EASE },
  });
  return (
    <div className="scene-inner three-scene">
      <header className="scene-head">
        <span className="meta">ACT I — MUSIC</span>
        <span className="meta">01 / 04</span>
      </header>

      <div className="three-scene__grid">
        <figure className="three-scene__card three-scene__card--jay">
          <motion.div className="three-scene__img" {...pop(0.4)}>
            <img src={jay.img} alt={jay.alt} />
          </motion.div>
          <motion.figcaption {...pop(0.8)}>
            <span className="meta three-scene__tag">{jay.tag}</span>
            <span className="three-scene__en display">{jay.en}</span>
            <span className="three-scene__zh serif">{jay.zh}</span>
            <span className="meta three-scene__line">{jay.line}</span>
          </motion.figcaption>
        </figure>

        <figure className="three-scene__card three-scene__card--khalil">
          <motion.div className="three-scene__img" {...pop(0.7)}>
            <img src={khalil.img} alt={khalil.alt} />
          </motion.div>
          <motion.figcaption {...pop(1.1)}>
            <span className="meta three-scene__tag">{khalil.tag}</span>
            <span className="three-scene__en display">{khalil.en}</span>
            <span className="three-scene__zh serif">{khalil.zh}</span>
            <span className="meta three-scene__line">{khalil.line}</span>
          </motion.figcaption>
        </figure>

        <figure className="three-scene__card three-scene__card--cheer">
          <motion.div className="three-scene__img" {...pop(1.0)}>
            <img src={cheer.img} alt={cheer.alt} />
          </motion.div>
          <motion.figcaption {...pop(1.4)}>
            <span className="meta three-scene__tag">{cheer.tag}</span>
            <span className="three-scene__en display">{cheer.en}</span>
            <span className="three-scene__zh serif">{cheer.zh}</span>
            <span className="meta three-scene__line">{cheer.line}</span>
          </motion.figcaption>
        </figure>
      </div>

      <motion.p
        className="three-scene__note serif"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.7 }}
      >
        {threeContent.zh}
      </motion.p>
    </div>
  );
}
