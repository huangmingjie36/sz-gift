import { ClipReveal, Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";
import { deepCuts } from "../data/content";

export function DeepCuts() {
  return (
    <section className="section deepcuts" id="deepcuts">
      <SectionHead no={deepCuts.chapter} title="私人宇宙 · 深藏曲目" />

      <h2 className="deepcuts__title display">
        <ClipReveal>DEEP CUTS</ClipReveal>
      </h2>
      <Reveal delay={0.1}>
        <p className="deepcuts__zh">{deepCuts.zh}</p>
      </Reveal>

      <div className="deepcuts__grid">
        {deepCuts.items.map((d, i) => (
          <Reveal key={d.name} delay={(i % 4) * 0.06} className="deepcuts__item">
            <span className="meta deepcuts__no">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="deepcuts__name serif">{d.name}</h3>
            <p className="deepcuts__work">{d.work}</p>
            <p className="meta deepcuts__tag">{d.tag}</p>
            <p className="deepcuts__note serif">{d.note}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
