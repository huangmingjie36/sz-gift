import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { artists, signature } from "../data/scenes";
import { shouldShowPickSignature } from "../lib/sig";
import { useAudio } from "../audio/AudioDirector";

const EASE = [0.22, 1, 0.36, 1] as const;
const CHOICES_KEY = "chen-album-choices";

export function CheerScene() {
  const artist = artists[2];
  const { duck, unduck } = useAudio();
  // 页：0 封面 · 1-3 专辑 · 4 Live Poster
  const [page, setPage] = useState(0);
  const [live, setLive] = useState(false);
  const total = 5;

  useEffect(() => {
    const prev = (() => { try { return JSON.parse(localStorage.getItem(CHOICES_KEY) || "{}"); } catch { return {}; } })();
    if (prev.cheer) {
      const i = artist.albums.findIndex((a) => a.name === prev.cheer);
      if (i >= 0) setPage(i + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setLive(false); }
      if (e.key === "ArrowLeft") setPage((p) => Math.max(0, p - 1));
      if (e.key === "ArrowRight") setPage((p) => Math.min(total - 1, p + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (page >= 1 && page <= 3) duck();
    else unduck();
  }, [page, duck, unduck]);

  const [sig, setSig] = useState(false);

  const flip = (dir: number) => setPage((p) => Math.min(total - 1, Math.max(0, p + dir)));

  return (
    <div className="scene-inner book-scene">
      <header className="scene-head">
        <span className="meta">ACT I — THE RECORD ROOM</span>
        <span className="meta">CHEER · 03 / 04</span>
      </header>

      <div className="book-scene__copy">
        <motion.h2 className="book-scene__name" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: EASE }}>
          {artist.en}
        </motion.h2>
        <motion.p className="book-scene__zh serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
          {artist.zh}
        </motion.p>
      </div>

      {/* 摄影册 */}
      <div className="book-scene__album">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className={`book-scene__page ${page === 0 ? "book-scene__page--cover" : page === 4 ? "book-scene__page--poster" : ""}`}
            initial={{ opacity: 0, x: 40, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -40, rotateY: 8 }}
            transition={{ duration: 0.5, ease: EASE }}
            onClick={() => {
              if (page >= 1 && page <= 3) {
                const a = artist.albums[page - 1];
                const all = (() => { try { return JSON.parse(localStorage.getItem(CHOICES_KEY) || "{}"); } catch { return {}; } })();
                all.cheer = a.name;
                try { localStorage.setItem(CHOICES_KEY, JSON.stringify(all)); } catch {}
                if (shouldShowPickSignature()) {
                  setSig(true);
                  window.setTimeout(() => setSig(false), 2600);
                }
              }
              if (page === 4) setLive(true);
            }}
            data-cursor={page === 4 ? "open" : page >= 1 ? "pick" : "flip"}
            data-hover={page === 4 ? "open" : page >= 1 ? "pick" : "flip"}
            role="button"
            aria-label={page === 0 ? "打开摄影册" : page === 4 ? artist.live.name : artist.albums[page - 1].name}
          >
            {page === 0 && (
              <div className="book-scene__cover">
                <span className="meta book-scene__cover-label">PHOTO ALBUM</span>
                <span className="book-scene__cover-name serif">{artist.zh}</span>
                <span className="meta book-scene__cover-meta">{artist.en} · 2000s</span>
              </div>
            )}
            {page >= 1 && page <= 3 && (
              <div className="book-scene__page-inner">
                <img src={artist.albums[page - 1].img} alt={artist.albums[page - 1].name} loading="lazy" />
                <div className="book-scene__page-meta">
                  <span className="book-scene__page-name serif">{artist.albums[page - 1].name}</span>
                  <span className="meta book-scene__page-year">{artist.albums[page - 1].year}</span>
                </div>
              </div>
            )}
            {page === 4 && (
              <div className="book-scene__poster">
                <img src={artist.live.img} alt={artist.live.name} loading="lazy" />
                <div className="book-scene__poster-meta">
                  <span className="meta book-scene__poster-tag">LIVE POSTER</span>
                  <span className="book-scene__poster-name serif">{artist.live.name}</span>
                  <span className="meta book-scene__poster-year">{artist.live.year}</span>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* 翻页控制（极简） */}
        <div className="book-scene__nav">
          <button className="book-scene__nav-btn meta" onClick={() => flip(-1)} disabled={page === 0} aria-label="上一页">←</button>
          <span className="meta book-scene__nav-pos">{String(page + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
          <button className="book-scene__nav-btn meta" onClick={() => flip(1)} disabled={page === total - 1} aria-label="下一页">→</button>
        </div>
      </div>

      <AnimatePresence>
        {sig && (
          <motion.p className="pick-sig signature" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            picked by {signature}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Live Poster 展开 */}
      <AnimatePresence>
        {live && (
          <motion.div className="vinyl-scene__live-stage" key="live" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <motion.div className="vinyl-scene__live-bg" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.4, ease: EASE }}>
              <img src={artist.img} alt="Cheer Chen live" loading="lazy" />
              <div className="vinyl-scene__live-scrim" />
            </motion.div>
            <div className="vinyl-scene__live-copy">
              <span className="meta vinyl-scene__live-tag">LIVE</span>
              <h3 className="vinyl-scene__live-name serif">{artist.live.name}</h3>
              <span className="meta vinyl-scene__live-year">{artist.live.year} · {artist.en}</span>
            </div>
            <button className="shelf__close meta" onClick={() => setLive(false)} aria-label="收起">×</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
