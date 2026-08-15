import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { crateContent, signature } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

/** THE CRATE — 唱片箱：横向翻一张张往后翻，停留才显示名字 */
export function CrateScene() {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const items = crateContent.items;

  const onPointerDown = (e: React.PointerEvent) => { startX.current = e.clientX; };
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (dx < -40) setIndex((i) => Math.min(items.length - 1, i + 1));
    else if (dx > 40) setIndex((i) => Math.max(0, i - 1));
    startX.current = null;
  };

  const prev = crateContent.items[Math.max(0, index - 1)];
  const cur = crateContent.items[index];
  const next = crateContent.items[Math.min(items.length - 1, index + 1)];

  return (
    <div className="scene-inner crate-scene">

      <div className="crate-scene__copy">
        <motion.h2 className="crate-scene__title" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: EASE }}>
          THE CRATE
        </motion.h2>
        <motion.p className="meta crate-scene__hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
          drag
        </motion.p>
      </div>

      <div
        className="crate-scene__stage"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        data-cursor="drag"
        data-hover="drag"
      >
        {/* 后一张（预览） */}
        {next && (
          <div className="crate-scene__card crate-scene__card--back">
            <img src={next.img} alt="" loading="lazy" />
          </div>
        )}
        {/* 当前 */}
        <motion.div
          key={index}
          className="crate-scene__card crate-scene__card--front"
          initial={{ opacity: 0, x: 60, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <img src={cur.img} alt={cur.name} loading="lazy" />
          <motion.figcaption
            className="crate-scene__card-name serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {cur.name}
          </motion.figcaption>
        </motion.div>
        {/* 前一张（被翻过） */}
        {prev && (
          <div className="crate-scene__card crate-scene__card--prev">
            <img src={prev.img} alt="" loading="lazy" />
          </div>
        )}
      </div>

      <span className="crate-scene__label signature" aria-hidden="true">
        {signature}
      </span>

      <div className="crate-scene__nav">
        <span className="meta crate-scene__pos">{String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
        <div className="crate-scene__dots">
          {items.map((_, i) => (
            <button key={i} className={`crate-scene__dot ${i === index ? "is-active" : ""}`} onClick={() => setIndex(i)} aria-label={`第 ${i + 1} 张`} />
          ))}
        </div>
      </div>
    </div>
  );
}
