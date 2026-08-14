import { ClipReveal, Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";
import { Ticker } from "../components/Ticker";
import { recordRoom } from "../data/content";

const MAX_ERA = 8;

export function RecordRoom() {
  return (
    <section className="section record" id="record">
      <SectionHead no={recordRoom.chapter} title="私人宇宙 · 唱片房" />

      <h2 className="record__title">
        <span className="record__side meta">THE RECORD ROOM —</span>
        <ClipReveal>
          <span className="record__word">SOUND</span>
        </ClipReveal>
      </h2>

      <div className="record__intro">
        <Reveal>
          <p className="record__zh">
            {recordRoom.intro[0]}
            <br />
            {recordRoom.intro[1]}
          </p>
        </Reveal>
        <Reveal delay={0.2} className="record__stat">
          <p className="record__stat-num">
            <strong>{recordRoom.fiveStarCount}</strong>
            <span className="meta">/ {recordRoom.totalCount} ★5</span>
          </p>
          <p className="meta">RECORDS RATED 5 — DOUBAN</p>
        </Reveal>
      </div>

      <Ticker items={recordRoom.ticker} tone="ink" />

      {/* THE THREE */}
      <div className="record__three">
        <Reveal className="record__block-head">
          <p className="meta record__label">{recordRoom.three.title}</p>
          <p className="record__block-zh serif">{recordRoom.three.zh}</p>
        </Reveal>
        <div className="record__three-grid">
          {recordRoom.three.items.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.1} className={`record__tri record__tri--${i + 1}`}>
              <div className="record__tri-img">
                <img src={a.image} alt={a.zh} />
              </div>
              <div className="record__tri-body">
                <p className="meta record__tri-tag">{a.tag}</p>
                <h3 className="record__tri-name display">{a.name}</h3>
                <p className="serif record__tri-zh">{a.zh}</p>
                <p className="record__tri-line serif">{a.line}</p>
                <p className="meta record__tri-stars">★ × {a.stars}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* FAYE */}
      <Reveal className="record__faye">
        <div className="record__faye-body">
          <p className="meta record__faye-tag">{recordRoom.faye.tag}</p>
          <h3 className="record__faye-name display">{recordRoom.faye.name}</h3>
          <p className="serif record__faye-zh">{recordRoom.faye.zh}</p>
          <p className="record__faye-line serif">{recordRoom.faye.line}</p>
        </div>
        <p className="meta record__faye-stars">★ × {recordRoom.faye.stars} · ALL 5-STAR</p>
      </Reveal>

      {/* FEMALE VOICES */}
      <div className="record__voices">
        <Reveal className="record__block-head">
          <p className="meta record__label">{recordRoom.voices.title}</p>
          <p className="record__block-zh serif">{recordRoom.voices.zh}</p>
        </Reveal>
        <div className="record__voices-grid">
          {recordRoom.voices.groups.map((g, gi) => (
            <Reveal key={g.name} delay={gi * 0.1} className="record__voice-group">
              <p className="meta record__voice-en">{g.en}</p>
              <h4 className="record__voice-name">{g.name}</h4>
              <ul className="record__voice-list">
                {g.members.map((m) => (
                  <li key={m} className="serif">
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ON REPEAT */}
      <div className="record__repeat">
        <Reveal className="record__block-head">
          <p className="meta record__label">{recordRoom.onRepeat.title}</p>
          <p className="record__block-zh serif">{recordRoom.onRepeat.zh}</p>
        </Reveal>
        <ul className="record__repeat-list">
          {recordRoom.onRepeat.items.map((s, i) => (
            <Reveal key={s.song} delay={(i % 6) * 0.04} as="li" className="record__repeat-row">
              <span className="meta record__repeat-no">{String(i + 1).padStart(2, "0")}</span>
              <span className="record__repeat-song serif">{s.song}</span>
              <span className="record__repeat-artist">{s.artist}</span>
              <span className="meta record__repeat-note">{s.note}</span>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* 5-STAR RECORDS */}
      <div className="record__five">
        <Reveal className="record__block-head">
          <p className="meta record__label">{recordRoom.fiveStar.title}</p>
          <p className="record__block-zh serif">{recordRoom.fiveStar.zh}</p>
        </Reveal>
        <div className="record__five-grid">
          {recordRoom.fiveStar.items.map((r, i) => (
            <Reveal key={r.name + r.year} delay={i * 0.03} className="record__five-item">
              <p className="record__five-name serif">{r.name}</p>
              <p className="meta record__five-artist">{r.artist}</p>
              <p className="meta record__five-year">{r.year}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ERA MAP */}
      <div className="record__era">
        <Reveal className="record__block-head">
          <p className="meta record__label">{recordRoom.era.title}</p>
          <p className="record__block-zh serif">{recordRoom.era.zh}</p>
        </Reveal>
        <div className="record__era-map">
          {recordRoom.era.years.map((y) => (
            <div className="record__era-col" key={y.y}>
              <div
                className="record__era-bar"
                style={{ height: `${Math.max(6, (y.n / MAX_ERA) * 100)}%` }}
                data-year={y.y}
              />
              <span className="meta record__era-year">{y.y}</span>
            </div>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="meta record__era-note">{recordRoom.era.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
