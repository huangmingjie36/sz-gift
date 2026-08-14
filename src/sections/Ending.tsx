import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ending, meta } from "../data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  { delay: 0.4, duration: 1.3 },
  { delay: 2.0, duration: 1.1 },
  { delay: 3.1, duration: 1.5 },
  { delay: 4.8, duration: 1.2 },
];
const SEAL_DELAY = 5.9;

export function Ending() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const v = (i: number) => ({
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: STEPS[i].duration, delay: STEPS[i].delay, ease: EASE },
    },
  });

  return (
    <section className="ending" id="ending" ref={ref}>
      <p className="meta ending__top">ARCHIVE 006 — {meta.originZh}特产 · 送达</p>

      <motion.p className="ending__line-1" variants={v(0)} initial="hidden" animate={inView ? "show" : "hidden"}>
        {ending.lines[0].text as string}
      </motion.p>

      <motion.p className="ending__line-2" variants={v(1)} initial="hidden" animate={inView ? "show" : "hidden"}>
        {ending.lines[1].text as string}
      </motion.p>

      <motion.h2 className="ending__line-3" variants={v(2)} initial="hidden" animate={inView ? "show" : "hidden"}>
        {(ending.lines[2].text as string[])[0]}
        <br />
        {(ending.lines[2].text as string[])[1]}
      </motion.h2>

      <motion.p className="ending__line-4" variants={v(3)} initial="hidden" animate={inView ? "show" : "hidden"}>
        {ending.lines[3].text as string}
      </motion.p>

      <motion.div
        className="ending__seal"
        initial={{ opacity: 0, scale: 1.7, rotate: 4 }}
        animate={inView ? { opacity: 1, scale: 1, rotate: -5 } : { opacity: 0, scale: 1.7, rotate: 4 }}
        transition={{ duration: 0.8, delay: SEAL_DELAY, ease: [0.18, 0.9, 0.32, 1.2] }}
      >
        {ending.seal}
      </motion.div>

      <p className="ending__foot">
        <span className="meta">{ending.foot}</span>
        <span className="meta">
          {meta.originZh} — {meta.year}
        </span>
      </p>
    </section>
  );
}
