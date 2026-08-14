import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/** 极简光标微交互：小点 + 慢半拍的圆环。仅在精确指针设备上出现。 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

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
      setHovering(!!t?.closest("a, button, [data-hover]"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="cursor" aria-hidden="true">
      <motion.div className="cursor__dot" style={{ x, y }} />
      <motion.div
        className={`cursor__ring ${hovering ? "cursor__ring--hover" : ""}`}
        style={{ x: rx, y: ry }}
      />
    </div>
  );
}
