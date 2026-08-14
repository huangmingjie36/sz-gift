import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipReveal, Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";
import { Stadium } from "../components/Stadium";
import { matchday } from "../data/content";

export function Matchday() {
  const stageRef = useRef<HTMLDivElement>(null);
  const lit = useInView(stageRef, { once: true, amount: 0.4 });
  const [home, away] = matchday.match.score.split("—").map((s) => s.trim());

  return (
    <section className="section bayern" id="matchday">
      <div className="bayern__wm" aria-hidden="true">
        MIA SAN MIA
      </div>

      <SectionHead no={matchday.chapter} title="私人宇宙 · 比赛日" tone="paper" />

      <p className="meta bayern__club">
        {matchday.club}
        <span className="bayern__clubSub">{matchday.clubSub}</span>
      </p>

      <h2 className="bayern__title">
        <ClipReveal>
          MIA <span className="san">San</span> MIA<span className="dot">.</span>
        </ClipReveal>
      </h2>

      <Reveal delay={0.15}>
        <p className="bayern__zh">
          {matchday.zh[0]}
          <br />
          {matchday.zh[1]}
        </p>
      </Reveal>

      <div className={`matchday ${lit ? "is-lit" : ""}`} ref={stageRef}>
        <div className="matchday__head">
          <span className="meta">{matchday.match.label}</span>
          <span className="meta">{matchday.match.foot}</span>
        </div>
        <div className="matchday__stage">
          <Stadium lit={lit} />
          <div className="matchday__score">
            <p className="matchday__score-label">FINAL</p>
            <div className="matchday__nums">
              <span className="matchday__team">{matchday.match.home}</span>
              <span className="matchday__score-num">
                <span className="red">{home}</span>
                <span className="dash">—</span>
                {away}
              </span>
              <span className="matchday__team">{matchday.match.away}</span>
            </div>
            <p className="matchday__score-foot">90' · SAT 20:30 · ALLIANZ ARENA</p>
          </div>
        </div>
      </div>

      <div className="mannschaft">
        <div>
          <ClipReveal>
            <h3 className="mannschaft__title">{matchday.mannschaft.title}</h3>
          </ClipReveal>
          <Reveal delay={0.1}>
            <p className="meta mannschaft__sub">{matchday.mannschaft.sub}</p>
            <p className="mannschaft__zh">
              {matchday.mannschaft.zh[0]}
              <br />
              {matchday.mannschaft.zh[1]}
            </p>
          </Reveal>
        </div>
        <ul className="mannschaft__meta">
          {matchday.mannschaft.meta.map((m, i) => (
            <motion.li
              key={m}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>{m}</span>
              <i aria-hidden="true">·</i>
            </motion.li>
          ))}
        </ul>
      </div>

      <Reveal delay={0.2}>
        <p className="meta bayern__note">{matchday.note}</p>
      </Reveal>
    </section>
  );
}
