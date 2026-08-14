import { motion } from "framer-motion";
import { SectionHead } from "../components/SectionHead";
import { you } from "../data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.6 },
  transition: { duration: 1.4, delay, ease: EASE },
});

export function You() {
  return (
    <section className="section you" id="you">
      <SectionHead no={you.chapter} title="私人宇宙 · 关于你" />

      <div className="you__inner">
        <motion.p className="you__kicker meta" {...fadeUp(0.3)}>
          {you.kicker}
        </motion.p>

        <p className="you__line">
          {you.lines.map((line, i) => (
            <motion.span
              key={line}
              className="you__line-row"
              style={{ display: "block" }}
              {...fadeUp(0.7 + i * 0.55)}
            >
              {i === 2 ? <em>{line}</em> : line}
            </motion.span>
          ))}
        </p>

        <motion.p className="you__zh" {...fadeUp(2.1)}>
          {you.zh[0]}
          <br />
          {you.zh[1]}
        </motion.p>

        <motion.p className="you__end serif" {...fadeUp(3)}>
          {you.end}
        </motion.p>
      </div>

      <span className="you__vertical meta" aria-hidden="true">
        {you.vertical}
      </span>
    </section>
  );
}
