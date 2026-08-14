import { motion } from "framer-motion";
import { friendsContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FriendsScene() {
  return (
    <div className="scene-inner friends-scene">
      <motion.div
        className="friends-scene__bg"
        initial={{ scale: 1.06, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        <img src={friendsContent.img[1]} alt="Friends" />
        <div className="friends-scene__scrim" />
      </motion.div>

      <header className="scene-head scene-head--light">
        <span className="meta">ACT II — SCREEN</span>
        <span className="meta">01 / 03</span>
      </header>

      <div className="friends-scene__copy">
        <motion.p
          className="meta friends-scene__name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {friendsContent.name} · {friendsContent.years}
        </motion.p>
        <motion.h2
          className="friends-scene__line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease: EASE }}
        >
          {friendsContent.line}
        </motion.h2>
      </div>
    </div>
  );
}
