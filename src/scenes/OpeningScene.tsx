import { motion } from "framer-motion";
import { openingContent } from "../data/scenes";
import { useDeck } from "../components/Deck";

const EASE = [0.22, 1, 0.36, 1] as const;

export function OpeningScene() {
  const { goNext } = useDeck();
  return (
    <div className="scene-inner opening-scene">
      <div className="opening-scene__wm" aria-hidden="true">
        MÜNCHEN — SHENZHEN — MÜNCHEN
      </div>
      <div className="opening-scene__top meta">
        <span>ARCHIVE 000 — COMPILED IN SHENZHEN</span>
        <span>FOR A FRIEND</span>
      </div>

      <div className="opening-scene__body">
        <motion.p
          className="opening-scene__kicker meta"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
        >
          {openingContent.alt}
        </motion.p>
        <h1 className="opening-scene__name">
          <motion.span
            className="opening-scene__en"
            initial={{ clipPath: "inset(0 0 100% 0)", y: 50 }}
            animate={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
            transition={{ duration: 1.4, delay: 0.8, ease: EASE }}
          >
            {openingContent.name}
          </motion.span>
        </h1>
        <motion.p
          className="opening-scene__zh serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.9 }}
        >
          {openingContent.zh}
        </motion.p>
        <motion.p
          className="opening-scene__tagline serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.3 }}
        >
          {openingContent.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <button className="enter-btn" onClick={goNext}>
            {openingContent.enter}
            <i />
          </button>
        </motion.div>
      </div>

      <div className="opening-scene__bottom meta">
        <span>深圳 — 2026</span>
        <span>SCROLL OR PRESS ↓</span>
      </div>
    </div>
  );
}
