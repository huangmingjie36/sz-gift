import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ClipReveal, Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";
import { friends } from "../data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Friends() {
  const [quote, setQuote] = useState<string | null>(null);

  const pick = () => {
    const next = friends.quotes[Math.floor(Math.random() * friends.quotes.length)];
    setQuote(next);
  };

  return (
    <section className="section friends" id="friends">
      <SectionHead no={friends.chapter} title="私人宇宙 · 陪伴" />

      <p className="friends__kicker">{friends.kicker}</p>
      <h2 className="friends__title">
        <ClipReveal>
          <span className="friends__title-big">
            HE WATCHED IT <em>AGAIN.</em>
          </span>
        </ClipReveal>
      </h2>
      <Reveal delay={0.15}>
        <p className="friends__zh">
          {friends.zh[0]}
          <br />
          {friends.zh[1]}
        </p>
      </Reveal>

      <div className="friends__grid">
        <Reveal delay={0.1} className="friends__tvcol">
          <p className="meta friends__tvnote">{friends.episodes}</p>
          <div className="friends__tv">
            <img src={friends.tv} alt={friends.tvAlt} />
          </div>
        </Reveal>

        <div className="friends__side">
          <Reveal delay={0.2}>
            <p className="meta friends__episodes">{friends.meta}</p>
            <p className="friends__note serif">{friends.note}</p>
            <button className="friends__btn" onClick={pick}>
              {friends.button}
            </button>
            <div className="friends__quote" aria-live="polite">
              <AnimatePresence mode="wait">
                {quote && (
                  <motion.div
                    key={quote}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.55, ease: EASE }}
                  >
                    <p className="friends__quote-label">▸ SUBTITLE — {friends.kicker}</p>
                    <p className="friends__quote-text">{quote}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
