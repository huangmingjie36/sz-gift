import { motion } from "framer-motion";
import { interScreen, interFootball } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function InterScreenScene() {
  return (
    <div className="scene-inner act-scene act-scene--dark">
      <motion.span className="act-scene__roman serif" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: EASE }}>
        {interScreen.act}
      </motion.span>
      <motion.h2 className="act-scene__title act-scene__title--dark" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6, ease: EASE }}>
        {interScreen.title}
      </motion.h2>
      <motion.p className="act-scene__zh act-scene__zh--dark serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.1 }}>
        {interScreen.zh}
      </motion.p>
    </div>
  );
}

export function InterFootballScene() {
  return (
    <div className="scene-inner act-scene act-scene--dark">
      <motion.span className="act-scene__roman serif" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: EASE }}>
        {interFootball.act}
      </motion.span>
      <motion.h2 className="act-scene__title act-scene__title--dark" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease: EASE }}>
        {interFootball.title}
      </motion.h2>
      <motion.p className="act-scene__zh act-scene__zh--dark serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
        {interFootball.zh}
      </motion.p>
    </div>
  );
}
