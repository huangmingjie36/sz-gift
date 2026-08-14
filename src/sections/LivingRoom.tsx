import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ClipReveal, Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";
import { livingRoom } from "../data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const SEASONS = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10"];

export function LivingRoom() {
  const [quote, setQuote] = useState<string | null>(null);
  const pick = () => {
    const next = livingRoom.quotes[Math.floor(Math.random() * livingRoom.quotes.length)];
    setQuote(next);
  };

  return (
    <section className="section living" id="living">
      <SectionHead no={livingRoom.chapter} title="私人宇宙 · 客厅" />

      <p className="living__kicker meta">{livingRoom.kicker}</p>
      <h2 className="living__title">
        <ClipReveal>
          <span className="living__title-big">
            HE WATCHED IT <em>AGAIN.</em>
          </span>
        </ClipReveal>
      </h2>

      <Reveal delay={0.12}>
        <p className="living__zh">
          {livingRoom.zh[0]}
          <br />
          {livingRoom.zh[1]}
        </p>
      </Reveal>

      {/* 十季五星 */}
      <Reveal delay={0.2} className="living__seasons">
        <p className="meta living__episodes">{livingRoom.episodes}</p>
        <div className="living__season-row">
          {SEASONS.map((s, i) => (
            <div className="living__season" key={s}>
              <span className="meta">{s}</span>
              <span className="living__season-stars">★★★★★</span>
              <span className="meta living__season-date">{i < 9 ? "07·19" : "08·16"}</span>
            </div>
          ))}
        </div>
        <p className="living__quote serif">{livingRoom.quote}</p>
        <p className="meta living__quote-note">{livingRoom.quoteNote}</p>
      </Reveal>

      <div className="living__grid">
        <Reveal delay={0.1} className="living__tvcol">
          <p className="meta living__tvnote">{livingRoom.meta}</p>
          <div className="living__tv">
            <img src={livingRoom.tv} alt={livingRoom.tvAlt} />
          </div>
        </Reveal>
        <div className="living__side">
          <Reveal delay={0.2}>
            <p className="living__note serif">
              It's the one where the sofa never moves, the coffee is always warm,
              and nobody ever really leaves.
            </p>
            <button className="living__btn" onClick={pick}>
              {livingRoom.button}
            </button>
            <div className="living__quote-box" aria-live="polite">
              <AnimatePresence mode="wait">
                {quote && (
                  <motion.div
                    key={quote}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.55, ease: EASE }}
                  >
                    <p className="living__quote-label meta">▸ SUBTITLE</p>
                    <p className="living__quote-text serif">{quote}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      {/* AFTER FRIENDS */}
      <div className="living__after">
        <Reveal className="record__block-head">
          <p className="meta record__label">{livingRoom.after.title}</p>
          <p className="record__block-zh serif">{livingRoom.after.zh}</p>
        </Reveal>
        <ul className="living__shows">
          {livingRoom.after.shows.map((s, i) => (
            <Reveal key={s.en} delay={(i % 6) * 0.05} as="li" className="living__show">
              <div className="living__show-name">
                <span className="living__show-cn serif">{s.name}</span>
                <span className="meta living__show-en">{s.en}</span>
              </div>
              <span className="meta living__show-seasons">{s.seasons}</span>
              <span className="living__show-stars">{s.stars}</span>
              <span className="meta living__show-note">{s.note}</span>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* THE SCREEN */}
      <div className="living__films">
        <Reveal className="record__block-head">
          <p className="meta record__label">{livingRoom.films.title}</p>
          <p className="record__block-zh serif">{livingRoom.films.zh}</p>
        </Reveal>
        <div className="living__film-grid">
          {livingRoom.films.items.map((f, i) => (
            <Reveal key={f.name} delay={(i % 5) * 0.05} className="living__film">
              <span className="living__film-name serif">{f.name}</span>
              <span className="meta living__film-meta">
                {f.year} · {f.tag}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
