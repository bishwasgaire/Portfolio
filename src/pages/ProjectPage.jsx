import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { getArtworkById } from '../data/artworks.js'
import PageTransition from '../components/PageTransition.jsx'
import MediaGallery from '../components/MediaGallery.jsx'

export default function ProjectPage() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const artwork = getArtworkById(projectId)

  useEffect(() => {
    if (artwork) {
      document.title = `${artwork.title} — Bishwas Gaire`
    }
  }, [artwork])

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-stone mb-4">Work not found</p>
          <Link to="/work" className="font-sans text-[10px] tracking-[0.18em] uppercase text-stone hover:text-offwhite transition-colors duration-300 border-b border-ash pb-1">
            ← Back to Work
          </Link>
        </div>
      </div>
    )
  }

  const { title, year, medium, category, description, statement, coverImage, images, camera, lens, location } = artwork

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero image */}
        <div className="relative w-full bg-charcoal overflow-hidden" style={{ height: 'clamp(50vh, 70vh, 85vh)' }}>
          {coverImage ? (
            <motion.img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1.02, opacity: 1 }}
              transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
            />
          ) : (
            <div className="w-full h-full" style={{ background: 'radial-gradient(ellipse at 40% 50%, #e1e4e8, #f6f8fa)' }} />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-void/10 via-transparent to-void/90" />

          {/* Back button */}
          <Link
            to="/work"
            className="absolute top-24 left-6 md:left-12 flex items-center gap-2 font-sans text-[10px] tracking-[0.18em] uppercase text-stone hover:text-offwhite transition-colors duration-300"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Work
          </Link>
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 py-16 md:py-20 max-w-4xl">
          {/* Category + year */}
          <motion.div
            className="flex items-center gap-4 mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-stone">{category}</span>
            <span className="text-smoke dark:text-stone">·</span>
            <span className="font-sans text-[9px] tracking-[0.2em] text-stone">{year}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-serif font-light text-offwhite leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          {/* Medium */}
          <motion.p
            className="font-sans text-[11px] tracking-[0.18em] uppercase text-stone mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {medium}
          </motion.p>

          {/* Statement */}
          {statement && (
            <motion.blockquote
              className="font-serif italic text-parchment text-xl md:text-2xl leading-relaxed mb-8 border-l border-ash pl-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              &ldquo;{statement}&rdquo;
            </motion.blockquote>
          )}

          {/* Description */}
          <motion.p
            className="font-sans text-[14px] text-stone leading-relaxed mb-12 font-light max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {description}
          </motion.p>

          {/* Photography metadata */}
          {(camera || lens || location) && (
            <div className="flex flex-wrap gap-6 mb-12 pb-12 border-b border-ash">
              {camera && (
                <div>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-smoke dark:text-stone mb-1">Camera</p>
                  <p className="font-sans text-[12px] text-stone">{camera}</p>
                </div>
              )}
              {lens && (
                <div>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-smoke dark:text-stone mb-1">Lens</p>
                  <p className="font-sans text-[12px] text-stone">{lens}</p>
                </div>
              )}
              {location && (
                <div>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-smoke dark:text-stone mb-1">Location</p>
                  <p className="font-sans text-[12px] text-stone">{location}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Image gallery */}
        {images && images.length > 0 && (
          <div className="px-6 md:px-12 pb-20">
            <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-6">Images</p>
            <MediaGallery images={images} title={title} />
          </div>
        )}

        {/* Back nav */}
        <div className="px-6 md:px-12 pb-20 border-t border-ash pt-12">
          <Link
            to="/work"
            className="flex items-center gap-3 font-sans text-[10px] tracking-[0.18em] uppercase text-stone hover:text-offwhite transition-colors duration-300 w-fit"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Back to Work
          </Link>
        </div>
      </div>
    </PageTransition>
  )
}
