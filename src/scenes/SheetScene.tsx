import { motion } from "framer-motion";
import { sheetContent, lately, favouriteSeries } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SheetScene() {
  return (
    <div className="scene-inner sheet-scene">
      <header className="scene-head">
        <span className="meta">ACT I — MUSIC</span>
        <span className="meta">04 / 04</span>
      </header>

      <motion.h2
        className="sheet-scene__title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
      >
        {sheetContent.title}
      </motion.h2>

      <div className="sheet-scene__grid">
        {sheetContent.people.map((p, i) => (
          <motion.figure
            key={p.name + i}
            className="sheet-scene__cell"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.05, ease: EASE }}
          >
            <img src={p.img} alt={p.name} />
            <figcaption>
              <span className="sheet-scene__cell-name serif">{p.name}</span>
              <span className="meta sheet-scene__cell-info">{p.info}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <motion.div
        className="sheet-scene__lately"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <p className="meta sheet-scene__lately-label">{lately.label}</p>
        <ul>
          {lately.songs.map((s) => (
            <li key={s.no}>
              <span className="meta">{s.no}</span>
              <span className="serif">{s.title}</span>
              <span className="meta">{s.artist}</span>
            </li>
          ))}
        </ul>
        <p className="meta sheet-scene__lately-note">{lately.note}</p>
      </motion.div>

      <motion.p
        className="meta sheet-scene__favourites"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        {favouriteSeries.join(" · ")}
      </motion.p>
    </div>
  );
}
