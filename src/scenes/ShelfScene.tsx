import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { shelfContent } from "../data/scenes";
import { useAudio } from "../audio/AudioDirector";

const EASE = [0.22, 1, 0.36, 1] as const;

/** THE LIVING ROOM — 电视旁一摞 DVD，抽一个看一部 */
export function ShelfScene() {
  const { duck, unduck } = useAudio();
  const [picked, setPicked] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setPicked(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (picked !== null) duck();
    else unduck();
  }, [picked, duck, unduck]);

  return (
    <div className="scene-inner shelf-scene">

      <motion.h2 className="shelf-scene__title" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: EASE }}>
        {shelfContent.title}
      </motion.h2>
      <motion.p className="meta shelf-scene__hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
        pull one
      </motion.p>

      <div className="shelf-scene__rack">
        {shelfContent.items.map((s, i) => (
          <motion.button
            key={s.name}
            className="shelf-scene__dvd"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 + i * 0.06, ease: EASE }}
            onClick={() => setPicked(i)}
            whileHover={{ y: -10, scale: 1.05 }}
            data-cursor="pull"
            data-hover="pull"
            aria-label={s.name}
          >
            <img src={s.img} alt={s.name} loading="lazy" />
            <span className="meta shelf-scene__dvd-spine">{s.name.slice(0, 3)}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {picked !== null && (
          <motion.div className="shelf-scene__picked" key="picked" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="shelf-scene__backdrop" onClick={() => setPicked(null)} />
            <motion.div className="shelf-scene__picked-cover" layoutId={`dvd-${picked}`} transition={{ duration: 0.55, ease: EASE }}>
              <img src={shelfContent.items[picked].img} alt={shelfContent.items[picked].name} />
            </motion.div>
            <motion.div className="shelf-scene__picked-copy" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>
              <span className="meta shelf-scene__picked-kind">FROM THE SHELF</span>
              <h3 className="shelf-scene__picked-name serif">{shelfContent.items[picked].name}</h3>
              <span className="meta shelf-scene__picked-year">{shelfContent.items[picked].meta}</span>
            </motion.div>
            <button className="shelf__close meta" onClick={() => setPicked(null)} aria-label="放回">×</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
