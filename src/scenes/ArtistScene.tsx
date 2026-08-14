import { motion } from "framer-motion";
import type { Artist } from "../data/scenes";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ArtistScene({ artist, index }: { artist: Artist; index: number }) {
  return (
    <div className={`scene-inner artist-scene artist-scene--${artist.id}`}>
      <motion.div
        className="artist-scene__bg"
        initial={{ scale: 1.08, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.3, ease: EASE }}
      >
        <img src={artist.img} alt={artist.zh} />
        <div className="artist-scene__scrim" />
      </motion.div>

      <header className="scene-head scene-head--light">
        <span className="meta">ACT I — MUSIC</span>
        <span className="meta">0{index + 1} / 04</span>
      </header>

      <div className="artist-scene__copy">
        <motion.h2
          className="artist-scene__name"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
        >
          {artist.en}
        </motion.h2>
        <motion.p
          className="artist-scene__zh serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.1 }}
        >
          {artist.zh}
        </motion.p>
        <motion.p
          className="meta artist-scene__meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.5 }}
        >
          {artist.meta}
        </motion.p>
      </div>
    </div>
  );
}
