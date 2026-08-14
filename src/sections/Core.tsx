import { ClipReveal, Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";
import { core } from "../data/content";

export function Core() {
  const [jay, khalil, cheer, ...rest] = core;

  return (
    <section className="section core" id="core">
      <SectionHead no="CHAPTER 01 — ARCHIVE 001" title="私人宇宙 · 核心" />

      <p className="core__kicker meta">THE CORE</p>
      <h2 className="core__title">
        <ClipReveal>
          <span className="core__title-big">
            THE THINGS HE
            <br />
            KEEPS <em>COMING</em> BACK TO.
          </span>
        </ClipReveal>
      </h2>
      <Reveal delay={0.15}>
        <p className="core__zh">
          先看清楚核心。剩下的房间，都从这里长出来。
        </p>
      </Reveal>

      {/* 三巨头 —— 杂志式不对称 */}
      <div className="core__three">
        {[jay, khalil, cheer].map((c, i) => (
          <article className={`core__tri core__tri--${i + 1}`} key={c.id}>
            <div className="core__tri-media">
              <img src={c.image} alt={c.name} />
            </div>
            <div className="core__tri-body">
              <p className="meta core__tri-tag">{c.kind}</p>
              <h3 className="core__tri-name display">{c.en}</h3>
              <p className="core__tri-zh serif">{c.name}</p>
              <p className="core__tri-note">{c.note}</p>
              <p className="meta core__tri-evidence">{c.evidence}</p>
            </div>
          </article>
        ))}
      </div>

      {/* 其余核心 —— 档案行 */}
      <div className="core__rest">
        {rest.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.06}>
            <article className="core__row">
              <span className="meta core__row-no">0{3 + i}</span>
              <div className="core__row-main">
                <h3 className="core__row-name">
                  <span className="display">{c.en}</span>
                  <span className="serif core__row-zh">{c.name}</span>
                </h3>
                <p className="meta core__row-kind">{c.kind}</p>
              </div>
              <p className="core__row-note serif">{c.note}</p>
              <p className="meta core__row-evidence">{c.evidence}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
