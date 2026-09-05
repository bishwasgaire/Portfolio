import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { getFilmById, films } from '../data/films.js'
import PageTransition from '../components/PageTransition.jsx'
import FilmPlayer from '../components/FilmPlayer.jsx'
import FilmStrip from '../components/FilmStrip.jsx'

export default function FilmProject() {
  const { filmId } = useParams()
  const navigate = useNavigate()
  const film = getFilmById(filmId)

  useEffect(() => {
    if (film) {
      document.title = `${film.title} — Films — Bishwas Gaire`
    }
  }, [film])

  if (!film) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <p className="font-serif italic text-xl text-stone mb-4">Film not found in catalog.</p>
        <button
          onClick={() => navigate('/films')}
          className="font-sans text-[10px] tracking-[0.2em] uppercase text-offwhite border border-ash px-4 py-2 hover:border-offwhite transition-colors"
        >
          Return to Films
        </button>
      </div>
    )
  }

  // Next film in list
  const currentIndex = films.findIndex(f => f.id === film.id)
  const nextFilm = films[(currentIndex + 1) % films.length]

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/films"
              className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.25em] uppercase text-stone hover:text-offwhite transition-colors duration-300 group"
              data-cursor="pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Films</span>
            </Link>
          </motion.div>

          {/* Film Title Header */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center gap-3 font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-3">
              <span>{film.year}</span>
              <span>·</span>
              <span>{film.category}</span>
              <span>·</span>
              <span>{film.duration}</span>
            </div>
            <h1 className="font-serif font-light text-offwhite text-4xl md:text-6xl lg:text-7xl leading-tight mb-4">
              {film.title}
            </h1>
            <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-smoke">
              {film.role}
            </p>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mb-14 overflow-hidden border border-ash/40"
          >
            <FilmPlayer videoUrl={film.videoUrl} posterUrl={film.posterUrl || film.thumbnail} title={film.title} />
          </motion.div>

          {/* Tagline & Synopsis */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-20">
            <div className="md:col-span-5">
              {film.tagline && (
                <blockquote className="border-l border-ash pl-6 py-2 font-serif italic text-xl md:text-2xl text-offwhite/90 leading-relaxed">
                  &ldquo;{film.tagline}&rdquo;
                </blockquote>
              )}
            </div>
            <div className="md:col-span-7">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-4">
                Synopsis
              </p>
              <p className="font-sans text-[14px] text-stone leading-relaxed font-light">
                {film.synopsis}
              </p>
            </div>
          </div>

          {/* Technical Specifications & Cinematography */}
          <div className="border-t border-ash/60 pt-16 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Camera & Optics */}
              <div>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-4">
                  Camera & Optics
                </p>
                <dl className="space-y-3 font-sans text-[11px]">
                  <div>
                    <dt className="text-ash uppercase tracking-wider text-[9px]">Body</dt>
                    <dd className="text-stone mt-0.5">{film.camera?.body || 'Custom'}</dd>
                  </div>
                  <div>
                    <dt className="text-ash uppercase tracking-wider text-[9px]">Lenses</dt>
                    <dd className="text-stone mt-0.5">{film.camera?.lens || 'Prime'}</dd>
                  </div>
                  <div>
                    <dt className="text-ash uppercase tracking-wider text-[9px]">Capture Format</dt>
                    <dd className="text-stone mt-0.5">{film.camera?.format || '4K 24fps'}</dd>
                  </div>
                  <div>
                    <dt className="text-ash uppercase tracking-wider text-[9px]">Aspect Ratio</dt>
                    <dd className="text-stone mt-0.5 font-mono">{film.camera?.aspectRatio || '16:9'}</dd>
                  </div>
                </dl>
              </div>

              {/* Cinematography Approach */}
              <div>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-4">
                  Cinematography
                </p>
                <div className="space-y-4 font-sans text-[12px] text-stone leading-relaxed font-light">
                  <p>{film.cinematography?.description}</p>
                  {film.cinematography?.framing && (
                    <p><span className="text-offwhite font-normal">Framing: </span>{film.cinematography.framing}</p>
                  )}
                  {film.cinematography?.movement && (
                    <p><span className="text-offwhite font-normal">Movement: </span>{film.cinematography.movement}</p>
                  )}
                </div>
              </div>

              {/* Color & Sound */}
              <div>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-4">
                  Color Grade & Sound
                </p>
                <p className="font-sans text-[12px] text-stone leading-relaxed font-light mb-4">
                  {film.color?.description}
                </p>

                {/* Color Swatches */}
                {film.color?.palette && (
                  <div className="flex gap-2 mb-6">
                    {film.color.palette.map((hex, idx) => (
                      <div
                        key={idx}
                        className="w-7 h-7 border border-ash/40"
                        style={{ backgroundColor: hex }}
                        title={hex}
                      />
                    ))}
                  </div>
                )}

                <div className="border-t border-ash/30 pt-4 space-y-2 font-sans text-[11px] text-stone">
                  {film.sound?.music && (
                    <p><span className="text-ash uppercase tracking-wider text-[9px] block">Music:</span> {film.sound.music}</p>
                  )}
                  {film.sound?.ambience && (
                    <p><span className="text-ash uppercase tracking-wider text-[9px] block">Ambience:</span> {film.sound.ambience}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* BTS Film Strip */}
          {film.btsImages && film.btsImages.length > 0 && (
            <div className="border-t border-ash/60 pt-16 mb-24">
              <div className="mb-6 flex justify-between items-end">
                <div>
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-2">
                    Production Archive
                  </p>
                  <h3 className="font-serif text-2xl text-offwhite font-light">
                    Behind the Scenes & Process Stills
                  </h3>
                </div>
                <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-ash hidden sm:inline-block">
                  Scroll horizontally →
                </span>
              </div>
              <FilmStrip images={film.btsImages} title={film.title} />
            </div>
          )}

          {/* Next Project Footer */}
          {nextFilm && (
            <div className="border-t border-ash pt-12">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-4">
                Next Film
              </p>
              <Link
                to={`/films/${nextFilm.id}`}
                className="group inline-block"
                data-cursor="pointer"
              >
                <h3 className="font-serif font-light text-3xl md:text-5xl text-offwhite group-hover:text-warm-white transition-colors duration-300">
                  {nextFilm.title} →
                </h3>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone mt-2">
                  {nextFilm.year} · {nextFilm.category} · {nextFilm.duration}
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
