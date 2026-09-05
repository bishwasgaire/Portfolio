import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function MediaGallery({ images = [], title }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const nextImage = () => setLightboxIndex(i => Math.min(i + 1, images.length - 1))
  const prevImage = () => setLightboxIndex(i => Math.max(i - 1, 0))

  return (
    <>
      {/* Gallery grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="block overflow-hidden bg-charcoal group"
            data-cursor="view"
            aria-label={`${title || 'Image'} ${i + 1}`}
          >
            <div className={`${i === 0 ? 'aspect-[4/3]' : 'aspect-square'} overflow-hidden`}>
              {src ? (
                <img
                  src={src}
                  alt={`${title || 'Gallery image'} ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div
                  className="w-full h-full"
                  style={{ background: `linear-gradient(${120 + i * 50}deg, #e1e4e8, #f6f8fa)` }}
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-void/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-stone hover:text-offwhite transition-colors duration-300 z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={20} strokeWidth={1} />
            </button>

            <motion.img
              key={lightboxIndex}
              src={images[lightboxIndex]}
              alt={`${title || 'Image'} ${lightboxIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation */}
            <div className="absolute inset-x-0 bottom-8 flex justify-center gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i) }}
                  className={`w-1 h-1 rounded-full transition-all duration-300 ${
                    i === lightboxIndex ? 'bg-offwhite scale-150' : 'bg-stone'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next */}
            {lightboxIndex > 0 && (
              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 text-stone hover:text-offwhite transition-colors duration-300 text-2xl font-light"
                onClick={(e) => { e.stopPropagation(); prevImage() }}
                aria-label="Previous image"
              >
                ←
              </button>
            )}
            {lightboxIndex < images.length - 1 && (
              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 text-stone hover:text-offwhite transition-colors duration-300 text-2xl font-light"
                onClick={(e) => { e.stopPropagation(); nextImage() }}
                aria-label="Next image"
              >
                →
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
