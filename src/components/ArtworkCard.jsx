import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ArtworkCard({ artwork, index = 0 }) {
  const { id, title, year, category, medium, coverImage, aspectRatio } = artwork

  // Vary sizing for editorial masonry feel
  const sizeClass = index % 5 === 0 ? 'col-span-2' : ''

  const aspectClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    square: 'aspect-square',
    wide: 'aspect-[16/9]',
  }

  const imgAspect = aspectClasses[aspectRatio] || aspectClasses.portrait

  return (
    <div className={`masonry-item ${sizeClass}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Link
          to={`/work/${id}`}
          className="block group"
          data-cursor="view"
        >
          {/* Image */}
          <div className={`image-reveal ${imgAspect} bg-charcoal mb-3 overflow-hidden`}>
            {coverImage ? (
              <img
                src={coverImage}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              // Placeholder — light subtle gradient
              <div
                className="w-full h-full"
                style={{
                  background: `radial-gradient(ellipse at ${(index * 30) % 100}% ${(index * 25 + 20) % 100}%, #e1e4e8, #f6f8fa)`,
                }}
              />
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-stone opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
          </div>

          {/* Metadata */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-serif text-offwhite font-light text-base leading-tight group-hover:text-warm-white transition-colors duration-300">
                {title}
              </h3>
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-stone mt-1">
                {medium} · {year}
              </p>
            </div>
            <span className="font-sans text-[9px] tracking-[0.18em] uppercase text-stone mt-1 flex-shrink-0">
              {category}
            </span>
          </div>
        </Link>
      </motion.div>
    </div>
  )
}
