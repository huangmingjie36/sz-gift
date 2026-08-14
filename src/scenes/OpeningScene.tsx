import { motion } from "framer-motion";
import { openingContent } from "../data/scenes";
import { useDeck } from "../components/Deck";
import { useAudio } from "../audio/AudioDirector";

const EASE = [0.22, 1, 0.36, 1] as const;

export function OpeningScene() {
  const { goNext } = useDeck();
  const { start } = useAudio();
  const enter = () => {
    start();
    goNext();
  };
  return (
    <div className="scene-inner opening-scene">
      <motion.h1
        className="opening-scene__name"
        initial={{ clipPath: "inset(0 0 100% 0)", y: 46 }}
        animate={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
        transition={{ duration: 1.1, delay: 0.4, ease: EASE }}
      >
        {openingContent.en}
      </motion.h1>
      <motion.p
        className="opening-scene__zh serif"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        {openingContent.zh}
      </motion.p>
      <motion.p
        className="meta opening-scene__things"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
      >
        {openingContent.things.join(" · ")}
      </motion.p>
      <motion.div
        className="opening-scene__foot"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <span className="meta">{openingContent.year} · {openingContent.city}</span>
        <button className="enter-btn" onClick={enter}>
          {openingContent.enter}
          <i />
        </button>
      </motion.div>
    </div>
  );
}
