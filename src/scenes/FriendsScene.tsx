import { motion } from "framer-motion";
import { friendsContent } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FriendsScene() {
  return (
    <div className="scene-inner friends-scene">
      <header className="scene-head">
        <span className="meta">ACT II — SCREEN</span>
        <span className="meta">01 / 03</span>
      </header>

      <div className="friends-scene__grid">
        <div className="friends-scene__copy">
          <motion.p
            className="friends-scene__kicker meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            THE ONE WHERE
          </motion.p>
          <motion.h2
            className="friends-scene__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
          >
            YOU WATCHED IT <em>AGAIN.</em>
          </motion.h2>
          <motion.p className="friends-scene__zh serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.1 }}>
            {friendsContent.zh[0]}
            <br />
            {friendsContent.zh[1]}
          </motion.p>
          <motion.p className="meta friends-scene__meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.5 }}>
            {friendsContent.meta}
          </motion.p>
          <motion.p className="friends-scene__quote serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.9 }}>
            {friendsContent.quote}
          </motion.p>
        </div>

        <div className="friends-scene__visual">
          <motion.div
            className="friends-scene__main"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
          >
            <img src={friendsContent.img[1]} alt="Friends 老友记" />
          </motion.div>
          <div className="friends-scene__strip">
            {friendsContent.img.map((im, i) => (
              <motion.div
                key={i}
                className="friends-scene__strip-img"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 + i * 0.15, ease: EASE }}
              >
                <img src={im} alt={`Friends ${i + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
