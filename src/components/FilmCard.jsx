import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function FilmCard({ film, index = 0 }) {
  const { id, title, year, category, duration, role, tagline, thumbnail, posterUrl } = film

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: (index % 2) * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link
        to={`/films/${id}`}
        className="block group"
        data-cursor="play"
      >
        {/* Cinematic thumbnail — 16:9 or wider */}
        <div className="relative overflow-hidden aspect-video bg-charcoal mb-4">
          {thumbnail || posterUrl ? (
            <img
              src={thumbnail || posterUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-103"
              loading="lazy"
              style={{ transform: 'scale(1.02)' }}
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(135deg, #e1e4e8 0%, #f6f8fa 100%)`,
              }}
            />
          )}

          {/* Film catalog overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent opacity-80" />

          {/* Duration badge */}
          <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-[0.12em] text-stone opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {duration}
          </div>

          {/* Category */}
          <div className="absolute top-4 left-4 font-sans text-[9px] tracking-[0.2em] uppercase text-stone bg-void/80 px-2 py-0.5 rounded border border-ash/50">
            {category}
          </div>

          {/* Play indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-12 h-12 border border-ash bg-void/90 rounded-full flex items-center justify-center shadow-md">
              <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-transparent border-l-offwhite ml-1" />
            </div>
          </div>
        </div>

        {/* Film metadata — catalog style */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-serif font-light text-offwhite text-xl leading-tight mb-1 group-hover:text-warm-white transition-colors duration-300">
              {title}
            </h3>
            <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-stone mb-2">
              {year} · {duration}
            </p>
            <p className="font-sans text-[10px] tracking-[0.12em] uppercase text-smoke mb-3">
              {role}
            </p>
            {tagline && (
              <p className="font-serif italic text-stone text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                &ldquo;{tagline}&rdquo;
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
