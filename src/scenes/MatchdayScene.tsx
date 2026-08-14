import { motion } from "framer-motion";
import { matchdayContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function MatchdayScene() {
  return (
    <div className="scene-inner matchday-scene">
      <motion.div
        className="matchday-scene__bg"
        initial={{ opacity: 0.5, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        <img src={matchdayContent.img} alt="Allianz Arena" />
        <div className="matchday-scene__scrim" />
      </motion.div>

      <header className="scene-head scene-head--light">
        <span className="meta">ACT III — FOOTBALL</span>
        <span className="meta">02 / 03</span>
      </header>

      <div className="matchday-scene__copy">
        <motion.h2
          className="matchday-scene__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
        >
          {matchdayContent.title}
        </motion.h2>
        <motion.p
          className="meta matchday-scene__arena"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {matchdayContent.arena}
        </motion.p>
      </div>
    </div>
  );
}
