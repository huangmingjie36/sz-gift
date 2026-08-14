import { motion } from "framer-motion";
import { tvContent } from "../data/scenes";
import { useDeck } from "../components/Deck";

const EASE = [0.22, 1, 0.36, 1] as const;

/** TV — 比赛结束，回到客厅。黑暗中电视亮起，点击进入。 */
export function TvScene() {
  const { goNext } = useDeck();
  return (
    <div className="scene-inner tv-scene">
      <motion.div
        className="tv-scene__room"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      />
      <motion.button
        className="tv-scene__tv"
        onClick={goNext}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: EASE }}
        data-cursor="enter"
        data-hover="enter"
        aria-label="打开电视"
      >
        <motion.div
          className="tv-scene__screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.6 }}
        >
          <img src={tvContent.friends} alt="Friends" loading="lazy" />
        </motion.div>
        <span className="meta tv-scene__hint">{tvContent.hint}</span>
      </motion.button>
    </div>
  );
}
