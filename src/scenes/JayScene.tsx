import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { artists, signature } from "../data/scenes";
import { shouldShowPickSignature } from "../lib/sig";
import { useAudio } from "../audio/AudioDirector";

const EASE = [0.22, 1, 0.36, 1] as const;
const CHOICES_KEY = "chen-album-choices";

export function JayScene() {
  const artist = artists[0];
  const { duck, unduck } = useAudio();
  const [opened, setOpened] = useState<number | null>(null);
  const [live, setLive] = useState(false);
  const [egg, setEgg] = useState(false);

  useEffect(() => {
    const prev = (() => { try { return JSON.parse(localStorage.getItem(CHOICES_KEY) || "{}"); } catch { return {}; } })();
    if (prev.jay) {
      const i = artist.albums.findIndex((a) => a.name === prev.jay);
      if (i >= 0) setOpened(i);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpened(null); setLive(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (opened !== null || live) duck();
    else unduck();
  }, [opened, live, duck, unduck]);

  const [sig, setSig] = useState(false);

  const openAlbum = (i: number) => {
    setOpened(i);
    if (shouldShowPickSignature()) {
      setSig(true);
      window.setTimeout(() => setSig(false), 2600);
    }
    const all = (() => { try { return JSON.parse(localStorage.getItem(CHOICES_KEY) || "{}"); } catch { return {}; } })();
    all.jay = artist.albums[i].name;
    try { localStorage.setItem(CHOICES_KEY, JSON.stringify(all)); } catch {}
    // 连点彩蛋
    if (opened === i) setEgg(true);
    window.setTimeout(() => setEgg(false), 2000);
  };

  return (
    <div className="scene-inner cd-scene">
      <header className="scene-head">
        <span className="meta">ACT I — THE RECORD ROOM</span>
        <span className="meta">JAY · 01 / 04</span>
      </header>

      <div className="cd-scene__copy">
        <motion.h2 className="cd-scene__name" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: EASE }}>
          {artist.en}
        </motion.h2>
        <motion.p className="cd-scene__zh serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
          {artist.zh}
        </motion.p>
      </div>

      {/* 桌面：三个 CD 盒 */}
      <div className="cd-scene__desk">
        {artist.albums.map((a, i) => (
          <motion.button
            key={a.name}
            className={`cd-case ${opened === i ? "is-open" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 + i * 0.15, ease: EASE }}
            onClick={() => openAlbum(i)}
            data-cursor="open"
            data-hover="open"
            aria-label={a.name}
          >
            <span className="cd-case__cover"><img src={a.img} alt={a.name} loading="lazy" /></span>
            <span className="cd-case__disc" aria-hidden="true" />
            <span className="meta cd-case__name">{a.name}</span>
            <span className="meta cd-case__year">{a.year}</span>
          </motion.button>
        ))}
      </div>

      {/* 桌下露出一张票：无与伦比 */}
      <motion.button
        className={`cd-scene__ticket ${live ? "is-live" : ""}`}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4, ease: EASE }}
        onClick={() => setLive((v) => !v)}
        data-cursor="pull"
        data-hover="pull"
      >
        <span className="cd-scene__ticket-tear" aria-hidden="true" />
        <span className="meta cd-scene__ticket-label">LIVE · TICKET</span>
        <span className="cd-scene__ticket-name serif">{artist.live.name}</span>
        <span className="meta cd-scene__ticket-year">{artist.live.year}</span>
      </motion.button>

      {/* 专辑展开：CD 盒打开 */}
      <AnimatePresence>
        {opened !== null && (
          <motion.div className="cd-scene__open" key="open" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="cd-scene__backdrop" onClick={() => setOpened(null)} />
            <motion.div
              className="cd-scene__case-open"
              layoutId={`jay-case-${opened}`}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="cd-scene__case-cover"><img src={artist.albums[opened].img} alt={artist.albums[opened].name} /></div>
              <div className="cd-scene__case-disc" aria-hidden="true" />
              <div className="cd-scene__case-booklet">
                <span className="meta cd-scene__case-kind">CD</span>
                <h3 className="cd-scene__case-name serif">{artist.albums[opened].name}</h3>
                <span className="meta cd-scene__case-year">{artist.albums[opened].year} · {artist.en}</span>
                {artist.albums[opened].evidence && <p className="meta cd-scene__case-evidence">{artist.albums[opened].evidence}</p>}
              </div>
            </motion.div>
            <button className="shelf__close meta" onClick={() => setOpened(null)} aria-label="放回 CD">×</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live：演唱会暗场 */}
      <AnimatePresence>
        {live && (
          <motion.div className="cd-scene__live" key="live" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <motion.div className="cd-scene__live-bg" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.4, ease: EASE }}>
              <img src={artist.live.img} alt={artist.live.name} loading="lazy" />
              <div className="cd-scene__live-scrim" />
            </motion.div>
            <div className="cd-scene__live-copy">
              <span className="meta cd-scene__live-tag">LIVE</span>
              <h3 className="cd-scene__live-name serif">{artist.live.name}</h3>
              <span className="meta cd-scene__live-year">{artist.live.year} · {artist.en}</span>
            </div>
            <button className="shelf__close meta" onClick={() => setLive(false)} aria-label="收起">×</button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {sig && (
          <motion.p className="pick-sig signature" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            picked by {signature}
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {egg && (
          <motion.p className="shelf__egg serif" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: EASE }}>
            行，知道你喜欢了。
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
