import { motion } from "framer-motion";
import { friendsArchive } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FriendsArchiveScene() {
  return (
    <div className="scene-inner friends-archive-scene">
      <header className="scene-head">
        <span className="meta">ACT II — SCREEN</span>
        <span className="meta">03 / 03</span>
      </header>

      <div className="friends-archive-scene__grid">
        <motion.div
          className="friends-archive-scene__photo"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
        >
          <img src={friendsArchive.img} alt="Friends" />
        </motion.div>
        <div className="friends-archive-scene__copy">
          {friendsArchive.facts.map((f, i) => (
            <motion.p
              key={f}
              className="meta friends-archive-scene__fact"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 + i * 0.15, ease: EASE }}
            >
              {f}
            </motion.p>
          ))}
          <motion.p
            className="friends-archive-scene__quote serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.2 }}
          >
            {friendsArchive.quote}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
