import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/** 极简光标：小点 + 慢半拍圆环 + 克制的交互状态文字（OPEN / VIEW / NEXT / RACHEL / CLOSE） */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as Element | null;
      const hit = t?.closest("[data-cursor]") as HTMLElement | null;
      setLabel(hit?.dataset.cursor ?? null);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="cursor" aria-hidden="true">
      <motion.div className="cursor__dot" style={{ x, y }} />
      <motion.div
        className={`cursor__ring ${label ? "cursor__ring--label" : ""}`}
        style={{ x: rx, y: ry }}
      />
      <motion.p
        className="cursor__label meta"
        style={{ x: rx, y: ry }}
        initial={false}
        animate={label ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.p>
    </div>
  );
}
