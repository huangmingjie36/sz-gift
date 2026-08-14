import { motion } from "framer-motion";
import { matchdayContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function MatchdayScene() {
  return (
    <div className="scene-inner matchday-scene">
      <motion.div
        className="matchday-scene__bg"
        initial={{ opacity: 0.5, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <img src={matchdayContent.img} alt="Allianz Arena" />
        <div className="matchday-scene__scrim" />
      </motion.div>

      <header className="scene-head scene-head--light">
        <span className="meta">ACT III — FOOTBALL</span>
        <span className="meta">02 / 03</span>
      </header>

      <motion.div
        className="matchday-scene__score"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.6, ease: EASE }}
      >
        <p className="meta matchday-scene__label">MATCHDAY — {matchdayContent.arena}</p>
        <div className="matchday-scene__nums">
          <span className="matchday-scene__team">{matchdayContent.home}</span>
          <span className="matchday-scene__num">
            <em>{matchdayContent.score}</em>
            <span className="matchday-scene__dash">{matchdayContent.dash}</span>
            {matchdayContent.away}
          </span>
          <span className="matchday-scene__team">{matchdayContent.away === "0" ? "SGE" : ""}</span>
        </div>
        <p className="meta matchday-scene__foot">{matchdayContent.foot}</p>
      </motion.div>

      <motion.p
        className="matchday-scene__zh serif"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.3 }}
      >
        {matchdayContent.zh}
      </motion.p>
    </div>
  );
}
