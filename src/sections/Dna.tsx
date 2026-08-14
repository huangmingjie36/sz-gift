import { ClipReveal, Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";
import { dna } from "../data/content";

export function Dna() {
  return (
    <section className="section dna" id="dna">
      <SectionHead no="CHAPTER 06 — ARCHIVE 006" title="私人宇宙 · 文化基因" />

      <h2 className="dna__title">
        <ClipReveal>
          <span className="dna__title-big">CULTURAL DNA</span>
        </ClipReveal>
      </h2>
      <Reveal delay={0.12}>
        <p className="dna__zh">
          不是标签，不是 MBTI。是从 111 张唱片、118 部影视和十季老友记里，
          <br />
          慢慢浮现出来的六种底色。
        </p>
      </Reveal>

      <div className="dna__list">
        {dna.map((d, i) => (
          <Reveal key={d.key} delay={i * 0.05} className="dna__row">
            <div className="dna__row-head">
              <span className="meta dna__no">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="dna__key display">{d.key}</h3>
              <span className="dna__word serif">{d.word}</span>
            </div>
            <p className="dna__zh-line serif">{d.zh}</p>
            <ul className="dna__evidence">
              {d.evidence.map((e) => (
                <li key={e} className="meta">
                  <span className="dna__bullet">·</span> {e}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
