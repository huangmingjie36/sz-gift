import { ClipReveal } from "./Reveal";

type SectionHeadProps = {
  no: string;
  title: string;
  tone?: "ink" | "paper";
  className?: string;
};

/** 章节头部：ARCHIVE 编号 + 标题 */
export function SectionHead({ no, title, tone = "ink", className = "" }: SectionHeadProps) {
  return (
    <header className={`ch-head ch-head--${tone} ${className}`}>
      <span className="meta">{no}</span>
      <ClipReveal className="ch-head__title">
        <span className="meta">{title}</span>
      </ClipReveal>
    </header>
  );
}
