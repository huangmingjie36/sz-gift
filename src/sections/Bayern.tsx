import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal, ClipReveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";
import { Stadium } from "../components/Stadium";
import { bayern } from "../data/content";

export function Bayern() {
  const stageRef = useRef<HTMLDivElement>(null);
  const lit = useInView(stageRef, { once: true, amount: 0.4 });
  const [home, away] = bayern.matchday.score.split("—").map((s) => s.trim());

  return (
    <section className="section bayern" id="bayern">
      <div className="bayern__wm" aria-hidden="true">
        MIA SAN MIA
      </div>

      <SectionHead no={bayern.chapter} title="私人宇宙 · 每个周末" tone="paper" />

      <p className="meta bayern__club">
        {bayern.club}
        <span className="bayern__clubSub">{bayern.clubSub}</span>
      </p>

      <h2 className="bayern__title">
        <ClipReveal>
          MIA <span className="san">San</span> MIA<span className="dot">.</span>
        </ClipReveal>
      </h2>

      <Reveal delay={0.15}>
        <p className="bayern__zh">
          {bayern.zh[0]}
          <br />
          {bayern.zh[1]}
        </p>
      </Reveal>

      <div className={`matchday ${lit ? "is-lit" : ""}`} ref={stageRef}>
        <div className="matchday__head">
          <span className="meta">{bayern.matchday.label}</span>
          <span className="meta">{bayern.matchday.foot}</span>
        </div>
        <div className="matchday__stage">
          <Stadium lit={lit} />
          <div className="matchday__score">
            <p className="matchday__score-label">FINAL</p>
            <div className="matchday__nums">
              <span className="matchday__team">{bayern.matchday.home}</span>
              <span className="matchday__score-num">
                <span className="red">{home}</span>
                <span className="dash">—</span>
                {away}
              </span>
              <span className="matchday__team">{bayern.matchday.away}</span>
            </div>
            <p className="matchday__score-foot">90' · SAT 20:30 · ALLIANZ ARENA</p>
          </div>
        </div>
      </div>

      <div className="mannschaft">
        <div>
          <ClipReveal>
            <h3 className="mannschaft__title">{bayern.mannschaft.title}</h3>
          </ClipReveal>
          <Reveal delay={0.1}>
            <p className="meta mannschaft__sub">{bayern.mannschaft.sub}</p>
            <p className="mannschaft__zh">
              {bayern.mannschaft.zh[0]}
              <br />
              {bayern.mannschaft.zh[1]}
            </p>
          </Reveal>
        </div>
        <ul className="mannschaft__meta">
          {bayern.mannschaft.meta.map((m, i) => (
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
    </section>
  );
}
