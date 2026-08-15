import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { friendsContent, chandlerContent } from "../data/scenes";
import { useDeck } from "../components/Deck";

const EASE = [0.22, 1, 0.36, 1] as const;
const NAMES = ["RACHEL", "CHANDLER", "MONICA", "ROSS", "JOEY", "PHOEBE"];

export function FriendsScene() {
  const { goNext } = useDeck();
  const [hoverName, setHoverName] = useState<string | null>(null);
  const [chandlerLine, setChandlerLine] = useState(false);
  const [chandlerMoment, setChandlerMoment] = useState(false);
  const chandlerClicks = useRef(0);
  const timers = useRef<number[]>([]);

  const onName = (name: string) => {
    if (name === "RACHEL") {
      goNext();
      return;
    }
    if (name === "CHANDLER") {
      chandlerClicks.current += 1;
      if (chandlerClicks.current === 1) {
        // quiet like：第一次只停一下
        setChandlerLine(true);
        timers.current.push(window.setTimeout(() => setChandlerLine(false), 2200));
      } else {
        // 第二次：给一个 Moment
        setChandlerMoment(true);
        timers.current.push(window.setTimeout(() => setChandlerMoment(false), 6000));
      }
      return;
    }
    // 其他名字：什么都不发生（他们只是在那里）
  };

  return (
    <div className="scene-inner friends-scene">
      <motion.div
        className="friends-scene__bg"
        animate={chandlerMoment ? { scale: 1.15, filter: "brightness(0.5)" } : hoverName ? { scale: 1.03 } : { scale: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <img src={friendsContent.img[1]} alt="Friends" loading="lazy" />
        <div className="friends-scene__scrim" />
      </motion.div>

      <div className="friends-scene__copy">
        <motion.p className="meta friends-scene__name" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}>
          {friendsContent.name} · {friendsContent.years}
        </motion.p>
        <motion.h2 className="friends-scene__line" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1, ease: EASE }}>
          {friendsContent.line}
        </motion.h2>
      </div>

      {/* 六个名字：他认识他们很久了 */}
      <div className="friends-scene__names">
        {NAMES.map((n, i) => (
          <motion.button
            key={n}
            className={`friends-scene__name-btn meta ${hoverName === n ? "is-hot" : ""} ${n === "CHANDLER" ? "friends-scene__name-btn--quiet" : ""}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 + i * 0.08, ease: EASE }}
            onMouseEnter={() => setHoverName(n)}
            onMouseLeave={() => setHoverName(null)}
            onClick={() => onName(n)}
            data-cursor={n === "RACHEL" ? "enter" : n === "CHANDLER" ? "?" : undefined}
            data-hover={n === "RACHEL" ? "enter" : n === "CHANDLER" ? "?" : undefined}
          >
            {n}
          </motion.button>
        ))}
      </div>

      {/* Chandler 第一次：quiet line */}
      <AnimatePresence>
        {chandlerLine && (
          <motion.p className="friends-scene__chandler-line serif" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: EASE }}>
            {chandlerContent.line}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Chandler Moment：第二次 */}
      <AnimatePresence>
        {chandlerMoment && (
          <motion.div className="friends-scene__moment" key="moment" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <motion.img
              src={chandlerContent.img}
              alt="Chandler Bing"
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: EASE }}
              loading="lazy"
            />
            <div className="friends-scene__moment-copy">
              <h3 className="friends-scene__moment-name">{chandlerContent.name}</h3>
            </div>
            <button className="shelf__close meta" onClick={() => setChandlerMoment(false)} aria-label="返回">×</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
