import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { artists, signature } from "../data/scenes";
import { shouldShowPickSignature } from "../lib/sig";
import { useAudio } from "../audio/AudioDirector";

const EASE = [0.22, 1, 0.36, 1] as const;
const CHOICES_KEY = "chen-album-choices";

export function KhalilScene() {
  const artist = artists[1];
  const { duck, unduck } = useAudio();
  const [picked, setPicked] = useState<number | null>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const prev = (() => { try { return JSON.parse(localStorage.getItem(CHOICES_KEY) || "{}"); } catch { return {}; } })();
    if (prev.khalil) {
      const i = artist.albums.findIndex((a) => a.name === prev.khalil);
      if (i >= 0) setPicked(i);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setPicked(null); setLive(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (picked !== null || live) duck();
    else unduck();
  }, [picked, live, duck, unduck]);

  const [sig, setSig] = useState(false);

  const pick = (i: number) => {
    setPicked(i);
    if (shouldShowPickSignature()) {
      setSig(true);
      window.setTimeout(() => setSig(false), 2600);
    }
    const all = (() => { try { return JSON.parse(localStorage.getItem(CHOICES_KEY) || "{}"); } catch { return {}; } })();
    all.khalil = artist.albums[i].name;
    try { localStorage.setItem(CHOICES_KEY, JSON.stringify(all)); } catch {}
  };

  return (
    <div className="scene-inner vinyl-scene">
      <header className="scene-head scene-head--light">
        <span className="meta">ACT I — THE RECORD ROOM</span>
        <span className="meta">KHALIL · 02 / 04</span>
      </header>

      <div className="vinyl-scene__copy">
        <motion.h2 className="vinyl-scene__name" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: EASE }}>
          {artist.en}
        </motion.h2>
        <motion.p className="vinyl-scene__zh serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
          {artist.zh}
        </motion.p>
        <motion.p className="meta vinyl-scene__pick" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.1 }}>
          pick one.
        </motion.p>
      </div>

      {/* 唱片堆：三张叠放，hover 错开 */}
      <div className="vinyl-scene__stack">
        {artist.albums.map((a, i) => (
          <motion.button
            key={a.name}
            className={`vinyl-record vinyl-record--${i + 1} ${picked === i ? "is-picked" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 + i * 0.15, ease: EASE }}
            onClick={() => pick(i)}
            whileHover={{ x: i === 0 ? -10 : i === 1 ? 0 : 10, y: -12, rotate: i === 0 ? -2 : i === 1 ? 0 : 2 }}
            data-cursor="pick"
            data-hover="pick"
            aria-label={a.name}
          >
            <img src={a.img} alt={a.name} loading="lazy" />
            <span className="meta vinyl-record__name">{a.name}</span>
            <span className="meta vinyl-record__year">{a.year}</span>
          </motion.button>
        ))}
      </div>

      {/* 唱片堆后露出一角：15 Live */}
      <motion.button
        className={`vinyl-scene__live ${live ? "is-live" : ""}`}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.6, ease: EASE }}
        onClick={() => setLive((v) => !v)}
        data-cursor="pull"
        data-hover="pull"
        aria-label={artist.live.name}
      >
        <img src={artist.live.img} alt={artist.live.name} loading="lazy" />
        <span className="meta vinyl-scene__live-tag">LIVE</span>
      </motion.button>

      {/* 选中的唱片抽出来 */}
      <AnimatePresence>
        {sig && (
          <motion.p className="pick-sig signature" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            picked by {signature}
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {picked !== null && (
          <motion.div className="vinyl-scene__picked" key="picked" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="vinyl-scene__backdrop" onClick={() => setPicked(null)} />
            <motion.div className="vinyl-scene__picked-cover" layoutId={`khalil-${picked}`} transition={{ duration: 0.6, ease: EASE }}>
              <img src={artist.albums[picked].img} alt={artist.albums[picked].name} />
            </motion.div>
            <motion.div className="vinyl-scene__picked-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>
              <span className="meta vinyl-scene__picked-kind">FEATURED RECORD</span>
              <h3 className="vinyl-scene__picked-name serif">{artist.albums[picked].name}</h3>
              <span className="meta vinyl-scene__picked-year">{artist.albums[picked].year} · {artist.en}</span>
              {artist.albums[picked].songs && artist.albums[picked].songs.length > 0 && (
                <ul className="shelf__copy-songs">
                  {artist.albums[picked].songs!.map((s) => <li key={s} className="meta"><span className="shelf__song-dot">·</span>{s}</li>)}
                </ul>
              )}
              {artist.albums[picked].evidence && <p className="meta vinyl-scene__picked-evidence">{artist.albums[picked].evidence}</p>}
            </motion.div>
            <button className="shelf__close meta" onClick={() => setPicked(null)} aria-label="放回唱片">×</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 15 Live 现场 */}
      <AnimatePresence>
        {live && (
          <motion.div className="vinyl-scene__live-stage" key="live" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <motion.div className="vinyl-scene__live-bg" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.4, ease: EASE }}>
              <img src={artist.img} alt="Khalil Fong live" loading="lazy" />
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
