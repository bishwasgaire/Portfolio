import { motion } from 'framer-motion'

export default function JournalEntry({ entry, index = 0 }) {
  const { date, title, text, images, audioSnippet, audioLabel, tags } = entry

  return (
    <motion.article
      className="py-12 md:py-16 border-b border-ash"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Date */}
      <p className="journal-date mb-4">{date}</p>

      {/* Title */}
      {title && (
        <h2 className="font-serif font-light text-offwhite text-2xl md:text-3xl mb-5 leading-tight">
          {title}
        </h2>
      )}

      {/* Text */}
      <p className="font-serif italic text-stone text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
        {text}
      </p>

      {/* Images — irregular layout */}
      {images && images.length > 0 && (
        <div
          className={`grid gap-3 mb-6 ${
            images.length === 1
              ? 'grid-cols-1 max-w-lg'
              : images.length === 2
              ? 'grid-cols-2 max-w-xl'
              : 'grid-cols-2 md:grid-cols-3 max-w-2xl'
          }`}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className={`bg-charcoal overflow-hidden ${
                i === 0 && images.length > 1 ? 'aspect-[4/3]' : 'aspect-square'
              }`}
            >
              {src ? (
                <img
                  src={src}
                  alt={`${title} — ${i + 1}`}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
              ) : (
                <div
                  className="w-full h-full"
                  style={{ background: `linear-gradient(${120 + i * 40}deg, #e1e4e8, #f6f8fa)` }}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Audio snippet */}
      {audioSnippet && (
        <div className="flex items-center gap-4 mb-6">
          <audio
            controls
            src={audioSnippet}
            className="h-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
            preload="none"
            aria-label={audioLabel || 'Audio recording'}
          />
          {audioLabel && (
            <span className="font-mono text-[10px] tracking-[0.12em] text-stone">
              {audioLabel}
            </span>
          )}
        </div>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {tags.map(tag => (
            <span
              key={tag}
              className="font-sans text-[9px] tracking-[0.2em] uppercase text-ash border border-ash px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  )
}
