import { motion } from "framer-motion";
import { RecordShelf } from "../components/RecordShelf";
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
        <span className="meta">0{index + 1} / 04</span>
      </header>

      {/* JAY — 杂志横向展开：人物 + 唱片架 */}
      {artist.id === "jay" && (
        <div className="artist-layout artist-layout--spread">
          <motion.div
            className="artist-layout__photo"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            <img src={artist.img} alt={artist.zh} loading="lazy" />
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
            <motion.div {...fade(1.3)}>
              <RecordShelf artistId={artist.id} albums={artist.albums} live={artist.live} layout="spread" />
            </motion.div>
          </div>
        </div>
      )}

      {/* KHALIL — 唱片陈列：人物背景 + 唱片架 */}
      {artist.id === "khalil" && (
        <div className="artist-layout artist-layout--center">
          <motion.div
            className="artist-layout__bg"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
          >
            <img src={artist.img} alt={artist.zh} loading="lazy" />
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
          <motion.div {...fade(1)}>
            <RecordShelf artistId={artist.id} albums={artist.albums} live={artist.live} layout="records" />
          </motion.div>
        </div>
      )}

      {/* CHEER — 留白：portrait + 安静唱片架 */}
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
            <motion.div {...fade(1.2)}>
              <RecordShelf artistId={artist.id} albums={artist.albums} live={artist.live} layout="quiet" />
            </motion.div>
          </div>
          <motion.div
            className="artist-layout__portrait"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
          >
            <img src={artist.img} alt={artist.zh} loading="lazy" />
          </motion.div>
        </div>
      )}
    </div>
  );
}
