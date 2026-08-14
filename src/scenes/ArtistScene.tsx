import { motion } from "framer-motion";
import type { Artist } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

const fade = (delay: number, y = 20) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export function ArtistScene({ artist, index }: { artist: Artist; index: number }) {
  return (
    <div className={`scene-inner artist-scene artist-scene--${artist.id}`}>
      <header className="scene-head">
        <span className="meta">ACT I — MUSIC</span>
        <span className="meta">0{index + 2} / 05</span>
      </header>

      {/* JAY — 杂志横向展开：人物 + 专辑横排 + Live 单独一块 */}
      {artist.id === "jay" && (
        <div className="artist-layout artist-layout--spread">
          <motion.div
            className="artist-layout__photo"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            <img src={artist.img} alt={artist.zh} />
          </motion.div>
          <div className="artist-layout__side">
            <motion.h2 className="artist-layout__name" {...fade(0.6)}>
              {artist.en}
            </motion.h2>
            <motion.p className="artist-layout__zh serif" {...fade(0.9)}>
              {artist.zh}
            </motion.p>
            <motion.p className="meta artist-layout__meta" {...fade(1.2)}>
              {artist.meta}
            </motion.p>
            <div className="artist-layout__albums artist-layout__albums--row">
              {artist.albums.map((a, i) => (
                <motion.figure className="artist-layout__album" key={a.name} {...fade(1.1 + i * 0.15)}>
                  <img src={a.img} alt={a.name} />
                  <figcaption>
                    <span className="artist-layout__album-name serif">{a.name}</span>
                    <span className="meta artist-layout__album-year">{a.year}</span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
            <motion.figure className="artist-layout__live" {...fade(1.7)}>
              <span className="meta artist-layout__live-tag">LIVE</span>
              <div className="artist-layout__live-inner">
                <img src={artist.live.img} alt={artist.live.name} />
                <figcaption>
                  <span className="artist-layout__live-name serif">{artist.live.name}</span>
                  <span className="meta artist-layout__live-year">{artist.live.year}</span>
                </figcaption>
              </div>
            </motion.figure>
          </div>
        </div>
      )}

      {/* KHALIL — 唱片陈列：人物背景 + 4 封面（3 专辑 + 1 Live 居中） */}
      {artist.id === "khalil" && (
        <div className="artist-layout artist-layout--center">
          <motion.div
            className="artist-layout__bg"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
          >
            <img src={artist.img} alt={artist.zh} />
            <div className="artist-layout__scrim" />
          </motion.div>
          <div className="artist-layout__center-copy">
            <motion.h2 className="artist-layout__name artist-layout__name--light" {...fade(0.5)}>
              {artist.en}
            </motion.h2>
            <motion.p className="artist-layout__zh artist-layout__zh--light serif" {...fade(0.8)}>
              {artist.zh} · <span className="meta">{artist.meta}</span>
            </motion.p>
          </div>
          <div className="artist-layout__albums artist-layout__albums--records">
            {artist.albums.map((a, i) => (
              <motion.figure
                className={`artist-layout__record ${i === 1 ? "artist-layout__record--lead" : ""}`}
                key={a.name}
                initial={{ opacity: 0, y: 34, rotate: i === 0 ? -2 : i === 1 ? 1.5 : -1 }}
                animate={{ opacity: 1, y: 0, rotate: i === 0 ? -2 : i === 1 ? 1.5 : -1 }}
                transition={{ duration: 0.9, delay: 0.9 + i * 0.18, ease: EASE }}
              >
                <img src={a.img} alt={a.name} />
                <figcaption>
                  <span className="artist-layout__album-name artist-layout__album-name--light serif">{a.name}</span>
                  <span className="meta artist-layout__album-year">{a.year}</span>
                </figcaption>
              </motion.figure>
            ))}
            <motion.figure
              className="artist-layout__record artist-layout__record--live"
              initial={{ opacity: 0, y: 34, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              transition={{ duration: 0.9, delay: 1.5, ease: EASE }}
            >
              <span className="meta artist-layout__live-tag artist-layout__live-tag--dark">LIVE</span>
              <img src={artist.live.img} alt={artist.live.name} />
              <figcaption>
                <span className="artist-layout__album-name artist-layout__album-name--light serif">{artist.live.name}</span>
                <span className="meta artist-layout__album-year">{artist.live.year}</span>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      )}

      {/* CHEER — 留白：portrait + 专辑错位 + Live 安静相伴 */}
      {artist.id === "cheer" && (
        <div className="artist-layout artist-layout--quiet">
          <div className="artist-layout__quiet-copy">
            <motion.h2 className="artist-layout__name artist-layout__name--quiet" {...fade(0.4)}>
              {artist.en}
            </motion.h2>
            <motion.p className="artist-layout__zh serif" {...fade(0.7)}>
              {artist.zh}
            </motion.p>
            <motion.p className="meta artist-layout__meta" {...fade(1)}>
              {artist.meta}
            </motion.p>
          </div>
          <motion.div
            className="artist-layout__portrait"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
          >
            <img src={artist.img} alt={artist.zh} />
          </motion.div>
          <div className="artist-layout__albums artist-layout__albums--offset">
            {artist.albums.map((a, i) => (
              <motion.figure
                className={`artist-layout__album artist-layout__album--q${i + 1}`}
                key={a.name}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + i * 0.16, ease: EASE }}
              >
                <img src={a.img} alt={a.name} />
                <figcaption>
                  <span className="artist-layout__album-name serif">{a.name}</span>
                  <span className="meta artist-layout__album-year">{a.year}</span>
                </figcaption>
              </motion.figure>
            ))}
            <motion.figure
              className="artist-layout__album artist-layout__album--live-q"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease: EASE }}
            >
              <span className="meta artist-layout__live-tag">LIVE</span>
              <img src={artist.live.img} alt={artist.live.name} />
              <figcaption>
                <span className="artist-layout__album-name serif">{artist.live.name}</span>
                <span className="meta artist-layout__album-year">{artist.live.year}</span>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      )}
    </div>
  );
}
