import { motion } from "framer-motion";
import { useState } from "react";
import { friendsContent } from "../data/scenes";
import { useDeck } from "../components/Deck";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FriendsScene() {
  const { goNext } = useDeck();
  const [zoom, setZoom] = useState(false);

  const enterRachel = () => {
    if (zoom) return;
    setZoom(true);
    window.setTimeout(() => goNext(), 900);
  };

  return (
    <div className="scene-inner friends-scene">
      <motion.div
        className="friends-scene__bg"
        animate={
          zoom
            ? { scale: 1.22, filter: "brightness(0.55)" }
            : { scale: 1, filter: "brightness(1)" }
        }
        transition={{ duration: 0.9, ease: EASE }}
        onClick={enterRachel}
        data-cursor={zoom ? undefined : "RACHEL"}
        data-hover="RACHEL"
        role="button"
        aria-label="进入 Rachel"
      >
        <img src={friendsContent.img[1]} alt="Friends" loading="lazy" />
        <div className="friends-scene__scrim" />
      </motion.div>

      <header className="scene-head scene-head--light">
        <span className="meta">ACT III — SCREEN</span>
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

      <motion.p
        className="meta friends-scene__hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        click her
      </motion.p>
    </div>
  );
}
