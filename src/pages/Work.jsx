import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { artworks, categories, getArtworksByCategory } from '../data/artworks.js'
import PageTransition from '../components/PageTransition.jsx'
import ProjectGallery from '../components/ProjectGallery.jsx'

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const filtered = getArtworksByCategory(activeCategory)

  useEffect(() => {
    document.title = 'Work — Bishwas Gaire'
  }, [])

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20">
        {/* Header */}
        <div className="px-6 md:px-12 mb-14">
          <motion.p
            className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Selected Work
          </motion.p>
          <motion.h1
            className="font-changa text-black leading-none tracking-wide mb-10 uppercase"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            WORK
          </motion.h1>

          {/* Category filters */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery */}
        <div className="px-6 md:px-12">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectGallery artworks={filtered} />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
