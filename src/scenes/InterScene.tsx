import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type InterProps = { act: string; title: string; dark?: boolean };

function Inter({ act, title, dark = true }: InterProps) {
  return (
    <div className={`scene-inner act-scene ${dark ? "act-scene--dark" : ""}`}>
      <motion.span
        className="act-scene__roman serif"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
      >
        {act}
      </motion.span>
      <motion.h2
        className={`act-scene__title ${dark ? "act-scene__title--dark" : ""}`}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
      >
        {title}
      </motion.h2>
    </div>
  );
}

export function MusicIntroScene() {
  return <Inter act="I" title="MUSIC" dark={false} />;
}

export function InterFootballScene() {
  return <Inter act="II" title="FOOTBALL" />;
}

export function InterScreenScene() {
  return <Inter act="III" title="SCREEN" />;
}
