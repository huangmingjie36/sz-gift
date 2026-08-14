import { motion } from "framer-motion";
import { interScreen, interFootball } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

function Inter({ act, title }: { act: string; title: string }) {
  return (
    <div className="scene-inner act-scene act-scene--dark">
      <motion.span
        className="act-scene__roman serif"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
      >
        {act}
      </motion.span>
      <motion.h2
        className="act-scene__title act-scene__title--dark"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
      >
        {title}
      </motion.h2>
    </div>
  );
}

export function InterScreenScene() {
  return <Inter act={interScreen.act} title={interScreen.title} />;
}

export function InterFootballScene() {
  return <Inter act={interFootball.act} title={interFootball.title} />;
}
