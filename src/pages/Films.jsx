import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { films, filmCategories, getFilmsByCategory } from '../data/films.js'
import FilmCard from '../components/FilmCard.jsx'
import PageTransition from '../components/PageTransition.jsx'

export default function Films() {
  const [activeCategory, setActiveCategory] = useState('ALL')

  useEffect(() => {
    document.title = 'Music Videos — Bishwas Gaire'
  }, [])

  const filteredFilms = getFilmsByCategory(activeCategory)

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-24">
        {/* Header */}
        <div className="px-6 md:px-12 mb-14">
          <motion.p
            className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Visual Direction & Music Videos
          </motion.p>
          <motion.h1
            className="font-changa text-black dark:text-white leading-none tracking-wide mb-6 uppercase"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            MUSIC VIDEOS
          </motion.h1>
          <motion.p
            className="font-serif italic text-stone text-lg max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Official music videos, audiovisual stories, and visual direction.
          </motion.p>
        </div>

        {/* Categories Bar */}
        <div className="px-6 md:px-12 mb-16">
          <div className="flex flex-wrap items-center gap-2 border-b border-ash/60 pb-6">
            {filmCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-all duration-300 ${
                  activeCategory === cat
                    ? 'text-offwhite border-b-2 border-offwhite font-medium'
                    : 'text-stone hover:text-offwhite'
                }`}
                data-cursor="pointer"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Film Catalog Grid */}
        <div className="px-6 md:px-12">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
          >
            <AnimatePresence>
              {filteredFilms.map((film, index) => (
                <FilmCard key={film.id} film={film} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Philosophical Note */}
        <div className="px-6 md:px-12 mt-28 border-t border-ash/40 pt-16">
          <div className="max-w-2xl">
            <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-4">
              Cinematic Approach
            </p>
            <p className="font-serif italic text-xl text-offwhite/80 leading-relaxed">
              "We waited for the light to come to us, not the other way around. The stillness of the camera mirrors the stillness of the landscape."
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
