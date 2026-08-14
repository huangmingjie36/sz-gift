import { motion } from "framer-motion";
import { SectionHead } from "../components/SectionHead";
import { ClipReveal, Reveal } from "../components/Reveal";
import { fragments } from "../data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const item = (rotate: number, delay = 0) => ({
  initial: { opacity: 0, y: 44, rotate },
  whileInView: { opacity: 1, y: 0, rotate },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 1.1, delay, ease: EASE },
});

export function Fragments() {
  const [a, b, c] = fragments.polaroids;

  return (
    <section className="section fragments" id="fragments">
      <SectionHead no={fragments.chapter} title="私人宇宙 · 待整理" />

      <h2 className="fragments__title display">
        <ClipReveal>FRAGMENTS</ClipReveal>
      </h2>
      <Reveal delay={0.1}>
        <p className="fragments__zh">
          {fragments.zh[0]}
          <br />
          {fragments.zh[1]}
        </p>
      </Reveal>

      <div className="scrapbook">
        <motion.figure className="polaroid polaroid--a" {...item(a.rotate)}>
          <img src={a.img} alt="占位照片 — 待扫描" />
          <figcaption>{a.caption}</figcaption>
        </motion.figure>

        <motion.div className="note" {...item(1.2, 0.1)}>
          {fragments.note}
        </motion.div>

        <motion.div className="ticket" {...item(-1.4, 0.15)}>
          <p className="ticket__no">NO. 0001 — SHENZHEN SPECIALTY</p>
          <div className="ticket__route">
            <span>{fragments.ticket.from}</span>
            <i>→</i>
            <span>{fragments.ticket.to}</span>
          </div>
          <p className="ticket__note">{fragments.ticket.note}</p>
        </motion.div>

        <motion.figure className="polaroid polaroid--b" {...item(b.rotate, 0.1)}>
          <img src={b.img} alt="占位照片 — 旅行" />
          <figcaption>{b.caption}</figcaption>
        </motion.figure>

        <motion.div className="filmstrip" {...item(0.6, 0.15)}>
          <div className="filmstrip__holes" />
          <div className="filmstrip__frames">
            {fragments.filmstrip.map((n) => (
              <div className="filmstrip__frame" key={n}>
                <span>{n}</span>
              </div>
            ))}
          </div>
          <div className="filmstrip__holes" />
        </motion.div>

        <motion.figure className="polaroid polaroid--c" {...item(c.rotate, 0.05)}>
          <img src={c.img} alt="占位照片 — 未命名" />
          <figcaption>{c.caption}</figcaption>
        </motion.figure>

        <motion.div className="stamp" {...item(-8, 0.2)}>
          {fragments.stamp}
        </motion.div>
      </div>
    </section>
  );
}
