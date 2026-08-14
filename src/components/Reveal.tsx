import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  amount?: number;
  className?: string;
  as?: "div" | "li" | "span" | "figure" | "article";
};

/** 轻量 scroll-reveal：上移淡入 */
export function Reveal({
  children,
  delay = 0,
  y = 30,
  duration = 1.1,
  amount = 0.35,
  className,
  as = "div",
}: RevealProps) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

type ClipRevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  amount?: number;
  className?: string;
};

/** 标题遮罩揭示：子内容从下往上翻出（父级 overflow hidden） */
export function ClipReveal({
  children,
  delay = 0,
  duration = 1.25,
  amount = 0.4,
  className,
}: ClipRevealProps) {
  return (
    <motion.div
      className={`clipmask ${className ?? ""}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      <motion.div
        variants={{
          hidden: { y: "115%" },
          show: { y: "0%", transition: { duration, delay, ease: EASE } },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
