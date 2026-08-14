import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Album, Live } from "../data/scenes";
import { useAudio } from "../audio/AudioDirector";

const EASE = [0.22, 1, 0.36, 1] as const;
const CHOICES_KEY = "chen-album-choices";

type ShelfItem = {
  kind: "album" | "live";
  key: string;
  name: string;
  year: string;
  img: string;
  evidence?: string;
  songs?: string[];
};

function loadChoices(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(CHOICES_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveChoice(artistId: string, name: string) {
  const all = loadChoices();
  all[artistId] = name;
  try {
    localStorage.setItem(CHOICES_KEY, JSON.stringify(all));
  } catch {}
}

type RecordShelfProps = {
  artistId: string;
  albums: Album[];
  live: Live;
  layout: "spread" | "records" | "quiet";
};

/** 交互式唱片架：hover 微动效 · 点击从架中抽出 · ESC/背景放回 · 选择本地记忆 · 连点彩蛋 */
export function RecordShelf({ artistId, albums, live, layout }: RecordShelfProps) {
  const { duck, unduck } = useAudio();
  const [selected, setSelected] = useState<ShelfItem | null>(null);
  const [egg, setEgg] = useState(false);
  const clickBuf = useRef<{ key: string; n: number; t: number }>({ key: "", n: 0, t: 0 });
  const eggTimer = useRef<number | null>(null);

  const items: ShelfItem[] = [
    ...albums.map((a) => ({ kind: "album" as const, key: a.name, name: a.name, year: a.year, img: a.img, evidence: a.evidence, songs: a.songs })),
    { kind: "live" as const, key: live.name, name: live.name, year: live.year, img: live.img, evidence: live.evidence },
  ];

  // 重开时恢复用户之前的选择（不预测，只尊重已发生的选择）
  useEffect(() => {
    const prev = loadChoices()[artistId];
    if (prev) {
      const hit = items.find((it) => it.name === prev);
      if (hit) setSelected(hit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ESC 关闭
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // 展开/关闭时背景音乐轻微变化（空间层级感）
  useEffect(() => {
    if (selected) duck();
    else unduck();
  }, [selected, duck, unduck]);

  useEffect(() => {
    return () => {
      if (eggTimer.current !== null) window.clearTimeout(eggTimer.current);
    };
  }, []);

  const open = useCallback(
    (item: ShelfItem) => {
      setSelected(item);
      if (item.kind === "album") saveChoice(artistId, item.name);
      // 彩蛋：连续点同一张 3 次
      const now = Date.now();
      const buf = clickBuf.current;
      if (buf.key === item.key && now - buf.t < 3000) {
        buf.n += 1;
      } else {
        buf.key = item.key;
        buf.n = 1;
      }
      buf.t = now;
      if (buf.n >= 3) {
        setEgg(true);
        if (eggTimer.current !== null) window.clearTimeout(eggTimer.current);
        eggTimer.current = window.setTimeout(() => setEgg(false), 2600);
        buf.n = 0;
      }
    },
    [artistId],
  );

  const cursor = (item: ShelfItem) => (item.kind === "live" ? "VIEW" : "OPEN");

  return (
    <div className={`shelf shelf--${layout}`}>
      <AnimatePresence>
        {!selected ? (
          <motion.div className="shelf__grid" key="grid" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            {items.map((item) => (
              <motion.button
                key={item.key}
                layoutId={`${artistId}-${item.key}`}
                className={`shelf__cell ${item.kind === "live" ? "shelf__cell--live" : ""}`}
                onClick={() => open(item)}
                data-cursor={cursor(item)}
                data-hover={cursor(item)}
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <img src={item.img} alt={item.name} loading="lazy" />
                {item.kind === "live" && <span className="meta shelf__live-tag">LIVE</span>}
                <span className="shelf__cell-name serif">{item.name}</span>
                <span className="meta shelf__cell-year">{item.year}</span>
              </motion.button>
            ))}
          </motion.div>
        ) : (
          <motion.div className="shelf__detail" key="detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="shelf__backdrop" onClick={() => setSelected(null)} data-cursor="CLOSE" />
            <motion.div
              layoutId={`${artistId}-${selected.key}`}
              className={`shelf__cover ${selected.kind === "live" ? "shelf__cover--live" : ""}`}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <img src={selected.img} alt={selected.name} />
              {selected.kind === "live" && <span className="meta shelf__live-tag">LIVE</span>}
            </motion.div>
            <motion.div className="shelf__copy" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.25, ease: EASE }}>
              <span className="meta shelf__copy-kind">{selected.kind === "live" ? "LIVE RECORDING" : "FEATURED RECORD"}</span>
              <h3 className="shelf__copy-name serif">{selected.name}</h3>
              <span className="meta shelf__copy-year">{selected.year}</span>
              {selected.songs && selected.songs.length > 0 && (
                <ul className="shelf__copy-songs">
                  {selected.songs.map((s) => (
                    <li key={s} className="meta">
                      <span className="shelf__song-dot">·</span> {s}
                    </li>
                  ))}
                </ul>
              )}
              {selected.evidence && <p className="meta shelf__copy-evidence">{selected.evidence}</p>}
            </motion.div>
            <button className="shelf__close meta" onClick={() => setSelected(null)} data-cursor="CLOSE" aria-label="放回唱片">
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {egg && (
          <motion.p
            className="shelf__egg serif"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            行，知道你喜欢了。
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
