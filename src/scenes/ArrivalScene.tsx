import { motion } from "framer-motion";
import { arrivalContent, signature } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

/** ARRIVAL — 进场：黑暗走廊推向球场，灯光渐亮 */
export function ArrivalScene() {
  return (
    <div className="scene-inner arrival-scene">
      <motion.div
        className="arrival-scene__bg"
        initial={{ scale: 1.22, filter: "brightness(0.35)" }}
        animate={{ scale: 1.02, filter: "brightness(1)" }}
        transition={{ duration: 2.6, ease: EASE }}
      >
        <img src={arrivalContent.img} alt="Allianz Arena" loading="lazy" />
        <div className="arrival-scene__scrim" />
      </motion.div>
      <motion.div
        className="arrival-scene__ticket"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span className="meta">MATCHDAY</span>
        <span className="signature">{signature}</span>
      </motion.div>

      <motion.h2
        className="arrival-scene__title"
        initial={{ opacity: 0, letterSpacing: "0.4em" }}
        animate={{ opacity: 1, letterSpacing: "0.18em" }}
        transition={{ duration: 1.4, delay: 1.2, ease: EASE }}
      >
        {arrivalContent.title}
      </motion.h2>
    </div>
  );
}
