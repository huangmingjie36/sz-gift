import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { chapters } from "../data/content";
import { scrollToId } from "../lib/scroll";

/** 底部章节栏：当前章节名 + 进度线，点击展开档案式索引 */
export function ChapterBar() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx = chapters.findIndex((c) => c.id === e.target.id);
            if (idx >= 0) setActive(idx);
          }
        }
      },
      { threshold: 0.45 },
    );
    chapters.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const cur = chapters[active];

  return (
    <div className={`chbar ${open ? "chbar--open" : ""}`}>
      <motion.div
        className="chbar__progress"
        style={{ scaleX: progress }}
      />
      <div className="chbar__row">
        <button
          className="chbar__toggle meta"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="章节索引"
        >
          <span className="chbar__no">{cur?.no}</span>
          <span className="chbar__name">{cur?.title}</span>
          <span className="chbar__caret">{open ? "—" : "+"}</span>
        </button>
        <span className="chbar__pos meta">
          {String(active + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}
        </span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="chbar__index"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="meta chbar__index-title">INDEX — 私人宇宙目录</p>
            <ol>
              {chapters.map((c, i) => (
                <li key={c.id} className={i === active ? "is-active" : ""}>
                  <button
                    onClick={() => {
                      scrollToId(c.id);
                      setOpen(false);
                    }}
                  >
                    <span className="meta">{c.no}</span>
                    <span className="chbar__index-name">{c.title}</span>
                    <span className="meta chbar__index-label">{c.label}</span>
                  </button>
                </li>
              ))}
            </ol>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
