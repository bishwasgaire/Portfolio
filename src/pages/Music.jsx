import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { musicProjects } from '../data/music.js'
import PageTransition from '../components/PageTransition.jsx'

export default function Music() {
  useEffect(() => {
    document.title = 'Music — Bishwas Gaire'
  }, [])

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20">
        {/* Header */}
        <div className="px-6 md:px-12 mb-16">
          <motion.p
            className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Sound Archive
          </motion.p>
          <motion.h1
            className="font-changa text-black leading-none tracking-wide mb-6 uppercase"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            MUSIC
          </motion.h1>
          <motion.p
            className="font-serif italic text-stone text-lg max-w-md leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Film scores, ambient experiments, field recordings, and nocturnal compositions.
          </motion.p>
        </div>

        {/* Album list */}
        <div className="px-6 md:px-12">
          {musicProjects.map((project, i) => (
            <motion.div
              key={project.id}
              className="border-t border-ash py-10 md:py-14"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
            >
              <Link
                to={`/music/${project.id}`}
                className="flex flex-col md:flex-row gap-6 md:gap-12 group"
                data-cursor="play"
              >
                {/* Album art */}
                <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-charcoal overflow-hidden">
                  {project.artwork ? (
                    <img
                      src={project.artwork}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-charcoal to-void" />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-center">
                  <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-2">
                    {project.year} · {project.genre}
                  </p>
                  <h2 className="font-serif font-light text-offwhite text-2xl md:text-3xl mb-3 group-hover:text-warm-white transition-colors duration-300 leading-tight">
                    {project.title}
                  </h2>
                  <p className="font-sans text-[12px] text-stone leading-relaxed max-w-xl mb-4">
                    {project.description.substring(0, 120)}…
                  </p>
                  <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-ash">
                    {project.tracks.length} tracks
                  </p>
                </div>

                {/* Track preview */}
                <div className="md:flex flex-col gap-2 hidden md:w-48 flex-shrink-0 justify-center">
                  {project.tracks.slice(0, 4).map(track => (
                    <div key={track.id} className="flex items-center gap-3">
                      <span className="font-mono text-[9px] text-ash">{String(track.number).padStart(2, '0')}</span>
                      <span className="font-sans text-[11px] text-stone truncate">{track.title}</span>
                    </div>
                  ))}
                  {project.tracks.length > 4 && (
                    <p className="font-sans text-[9px] text-ash">+ {project.tracks.length - 4}</p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
          <div className="border-t border-ash" />
        </div>
      </div>
    </PageTransition>
  )
}
