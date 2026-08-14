import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { opening } from "../data/content";
import { scrollToId } from "../lib/scroll";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Opening() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 38, damping: 20 });
  const smy = useSpring(my, { stiffness: 38, damping: 20 });
  const wmX = useTransform(smx, [-0.5, 0.5], [18, -18]);
  const wmY = useTransform(smy, [-0.5, 0.5], [12, -12]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section className="opening" id="opening">
      <motion.div
        className="opening__wm"
        style={{ x: wmX, y: wmY }}
        aria-hidden="true"
      >
        MÜNCHEN — SHENZHEN — MÜNCHEN
      </motion.div>

      <motion.header
        className="opening__top"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.5, ease: EASE }}
      >
        <span className="meta">{opening.volume}</span>
        <span className="meta">PERSONAL VOLUME — {new Date().getFullYear()}</span>
      </motion.header>

      <div className="opening__inner">
        <motion.p
          className="opening__kicker"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
        >
          {opening.kicker}
        </motion.p>

        <h1 className="opening__title">
          <motion.span
            className="opening__of"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 1.4 }}
          >
            OF
          </motion.span>
          <motion.span
            className="opening__name"
            initial={{ clipPath: "inset(0 0 100% 0)", y: 60 }}
            animate={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
            transition={{ duration: 1.7, delay: 1.1, ease: EASE }}
          >
            {opening.name}
          </motion.span>
        </h1>

        <motion.p
          className="opening__sub serif"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 2, ease: EASE }}
        >
          {opening.sub[0]}
          <br />
          {opening.sub[1]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.6 }}
        >
          <button className="opening__enter" onClick={() => scrollToId("sound")}>
            {opening.enter}
            <i />
          </button>
        </motion.div>
      </div>

      <motion.footer
        className="opening__bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 3.1 }}
      >
        <span className="meta">{opening.foot}</span>
        <span className="meta">{opening.scroll} ↓</span>
      </motion.footer>
    </section>
  );
}
