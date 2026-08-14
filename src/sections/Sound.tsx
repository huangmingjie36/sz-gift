import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, ClipReveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";
import { Ticker } from "../components/Ticker";
import { sound, type Artist } from "../data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

/** 缓慢的图片视差 + 缩放 */
function useSlowZoom() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);
  return { ref, y, scale };
}

function JayChou({ artist }: { artist: Artist }) {
  const { ref, y, scale } = useSlowZoom();
  return (
    <article className="artist artist--jay" ref={ref}>
      <motion.div className="artist__media" style={{ y, scale }}>
        <img src={artist.image} alt={artist.imageAlt} />
      </motion.div>
      <div className="artist__body">
        <Reveal>
          <p className="meta artist__tag">{artist.tag}</p>
        </Reveal>
        <ClipReveal amount={0.6}>
          <h3 className="artist__name display">{artist.name}</h3>
        </ClipReveal>
        <Reveal delay={0.15}>
          <p className="meta artist__sub">{artist.sub}</p>
          <p className="meta artist__meta">{artist.meta}</p>
          <p className="artist__zh">{artist.zh}</p>
          <p className="artist__note">{artist.note}</p>
        </Reveal>
      </div>
      <span className="artist__rail" aria-hidden="true">
        2000 — ∞ · CD · NIGHT
      </span>
    </article>
  );
}

function KhalilFong({ artist }: { artist: Artist }) {
  return (
    <article className="artist artist--khalil">
      <div className="artist__rail" aria-hidden="true">
        SOUL — GROOVE — VINYL
      </div>
      <div className="artist__inner">
        <Reveal className="artist__media" y={40}>
          <img src={artist.image} alt={artist.imageAlt} />
        </Reveal>
        <div className="artist__body">
          <Reveal>
            <p className="meta artist__tag">{artist.tag}</p>
          </Reveal>
          <ClipReveal amount={0.6}>
            <h3 className="artist__name display">{artist.name}</h3>
          </ClipReveal>
          <Reveal delay={0.15}>
            <p className="meta artist__sub">{artist.sub}</p>
            <p className="meta artist__meta">{artist.meta}</p>
            <p className="artist__zh">{artist.zh}</p>
            <p className="artist__note">{artist.note}</p>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

function CheerChen({ artist }: { artist: Artist }) {
  return (
    <article className="artist artist--cheer">
      <div className="artist__body">
        <Reveal>
          <p className="meta artist__tag">{artist.tag}</p>
        </Reveal>
        <ClipReveal amount={0.6}>
          <h3 className="artist__name">{artist.name}</h3>
        </ClipReveal>
        <Reveal delay={0.15}>
          <p className="meta artist__sub">{artist.sub}</p>
          <p className="meta artist__meta">{artist.meta}</p>
          <p className="artist__zh">{artist.zh}</p>
          <p className="artist__note">{artist.note}</p>
        </Reveal>
      </div>
      <Reveal className="artist__media" y={40} delay={0.1}>
        <img src={artist.image} alt={artist.imageAlt} />
      </Reveal>
    </article>
  );
}

export function Sound() {
  return (
    <section className="section sound" id="sound">
      <SectionHead no={sound.chapter} title="私人宇宙 · 精神背景音" />

      <h2 className="sound__title">
        <span className="sound__side">SIDE A —</span>
        <ClipReveal>
          <span className="sound__word">SOUND</span>
        </ClipReveal>
      </h2>

      <div className="sound__intro">
        <Reveal>
          <p className="sound__zh">
            {sound.intro[0]}
            <br />
            {sound.intro[1]}
          </p>
        </Reveal>
        <Reveal delay={0.25} className="sound__meta-wrap">
          <p className="meta sound__meta">{sound.introNote}</p>
        </Reveal>
      </div>

      <Ticker items={sound.ticker} tone="ink" />

      <JayChou artist={sound.artists[0]} />
      <KhalilFong artist={sound.artists[1]} />
      <CheerChen artist={sound.artists[2]} />

      <div className="sound__others">
        <div className="sound__others-left">
          <ClipReveal>
            <h3 className="sound__others-title display">{sound.voices.title}</h3>
          </ClipReveal>
          <Reveal delay={0.1}>
            <p className="sound__others-zh">{sound.voices.zh}</p>
          </Reveal>
        </div>
        <div>
          <ul className="sound__voices">
            {sound.voices.rows.map((v, i) => (
              <motion.li
                key={v.no}
                className="sound__voices-row"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
              >
                <span className="meta">{v.no}</span>
                <span className="v-name">{v.name}</span>
                <span className="meta v-note">{v.note}</span>
              </motion.li>
            ))}
          </ul>
          <Reveal delay={0.3}>
            <p className="sound__voices-end">{sound.voices.end}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
