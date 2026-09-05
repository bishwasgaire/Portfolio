import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { artworks } from '../data/artworks.js'
import { musicProjects } from '../data/music.js'
import { films } from '../data/films.js'
import { journalEntries } from '../data/journal.js'
import PageTransition from '../components/PageTransition.jsx'
import Footer from '../components/Footer.jsx'

// ── Painting home section ────────────────────────────────────────
function PaintingSection() {
  const paintings = artworks.filter(a => a.category === 'PAINTING').slice(0, 3)

  return (
    <section className="px-6 md:px-12 py-24 md:py-32">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-3">01</p>
          <h2 className="font-changa text-black text-4xl md:text-5xl uppercase tracking-wide leading-none">
            Painting
          </h2>
        </div>
        <Link
          to="/work"
          className="font-sans text-[10px] tracking-[0.18em] uppercase text-stone hover:text-offwhite transition-colors duration-300 pb-1 border-b border-ash hover:border-stone"
        >
          All Work →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {paintings.map((art, i) => (
          <motion.div
            key={art.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.15 }}
          >
            <Link to={`/work/${art.id}`} className="block group" data-cursor="view">
              <div className={`overflow-hidden bg-charcoal mb-3 ${i === 0 ? 'aspect-[3/4]' : i === 1 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                {art.coverImage ? (
                  <img
                    src={art.coverImage}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full" style={{ background: `radial-gradient(ellipse at ${30 + i * 20}% 40%, #e1e4e8, #f6f8fa)` }} />
                )}
              </div>
              <p className="font-serif text-offwhite text-sm font-light group-hover:text-warm-white transition-colors duration-300">{art.title}</p>
              <p className="font-sans text-[9px] tracking-[0.15em] uppercase text-stone mt-1">{art.medium} · {art.year}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ── Photography section ───────────────────────────────────────────
function PhotographySection() {
  const photos = artworks.filter(a => a.category === 'PHOTOGRAPHY').slice(0, 4)

  return (
    <section className="px-6 md:px-12 py-24 md:py-32 bg-void-light">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-3">02</p>
          <h2 className="font-changa text-black text-4xl md:text-5xl uppercase tracking-wide leading-none">
            Photography
          </h2>
        </div>
        <Link
          to="/work"
          className="font-sans text-[10px] tracking-[0.18em] uppercase text-stone hover:text-offwhite transition-colors duration-300 pb-1 border-b border-ash hover:border-stone"
        >
          All Work →
        </Link>
      </div>

      {/* Irregular photo layout */}
      <div className="grid grid-cols-12 gap-2 md:gap-3">
        {photos[0] && (
          <motion.div
            className="col-span-7 row-span-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Link to={`/work/${photos[0].id}`} className="block group h-full" data-cursor="view">
              <div className="h-full min-h-[300px] overflow-hidden bg-charcoal">
                {photos[0].coverImage ? (
                  <img src={photos[0].coverImage} alt={photos[0].title} className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" loading="lazy" />
                ) : (
                  <div className="w-full h-full" style={{ background: 'radial-gradient(ellipse at 40% 50%, #e1e4e8, #f6f8fa)' }} />
                )}
              </div>
            </Link>
          </motion.div>
        )}
        {photos.slice(1).map((photo, i) => (
          <motion.div
            key={photo.id}
            className="col-span-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: (i + 1) * 0.12 }}
          >
            <Link to={`/work/${photo.id}`} className="block group" data-cursor="view">
              <div className="aspect-[4/3] overflow-hidden bg-charcoal">
                {photo.coverImage ? (
                  <img src={photo.coverImage} alt={photo.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" />
                ) : (
                  <div className="w-full h-full" style={{ background: `radial-gradient(ellipse at ${50 + i * 15}% 40%, #e1e4e8, #f6f8fa)` }} />
                )}
              </div>
              <p className="font-sans text-[9px] tracking-[0.15em] uppercase text-stone mt-2">{photo.title} · {photo.year}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ── Music section ─────────────────────────────────────────────────
function MusicSection() {
  const album = musicProjects[0]

  return (
    <section className="px-6 md:px-12 py-24 md:py-32">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-3">03</p>
          <h2 className="font-changa text-black text-4xl md:text-5xl uppercase tracking-wide leading-none">
            Music
          </h2>
        </div>
        <Link
          to="/music"
          className="font-sans text-[10px] tracking-[0.18em] uppercase text-stone hover:text-offwhite transition-colors duration-300 pb-1 border-b border-ash hover:border-stone"
        >
          All Music →
        </Link>
      </div>

      {album && (
        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Link to={`/music/${album.id}`} className="flex-shrink-0 group" data-cursor="play">
            <div className="w-40 h-40 md:w-52 md:h-52 bg-charcoal overflow-hidden">
              {album.artwork ? (
                <img src={album.artwork} alt={album.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-charcoal to-void" />
              )}
            </div>
          </Link>

          <div className="flex flex-col justify-center">
            <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-2">{album.year} · {album.genre}</p>
            <h3 className="font-serif font-light text-offwhite text-3xl md:text-4xl mb-4 leading-tight">{album.title}</h3>
            <p className="font-serif italic text-stone text-base md:text-lg leading-relaxed max-w-md mb-6">&ldquo;{album.statement}&rdquo;</p>

            <div className="space-y-2">
              {album.tracks.slice(0, 3).map((track) => (
                <div key={track.id} className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-ash">{String(track.number).padStart(2, '0')}</span>
                  <span className="font-sans text-[12px] text-stone tracking-[0.06em]">{track.title}</span>
                  {track.duration && <span className="font-mono text-[10px] text-ash">{track.duration}</span>}
                </div>
              ))}
              {album.tracks.length > 3 && (
                <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-ash pt-1">+ {album.tracks.length - 3} more</p>
              )}
            </div>

            <Link
              to={`/music/${album.id}`}
              className="mt-6 font-sans text-[10px] tracking-[0.18em] uppercase text-stone hover:text-offwhite transition-colors duration-300 self-start border-b border-ash hover:border-stone pb-1"
            >
              Listen →
            </Link>
          </div>
        </motion.div>
      )}
    </section>
  )
}

// ── Film section ──────────────────────────────────────────────────
function FilmSection() {
  const featuredFilm = films[0]

  return (
    <section className="py-24 md:py-32 bg-void-light">
      <div className="px-6 md:px-12 flex items-end justify-between mb-12">
        <div>
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-3">04</p>
          <h2 className="font-changa text-black text-4xl md:text-5xl uppercase tracking-wide leading-none">
            Film
          </h2>
        </div>
        <Link
          to="/films"
          className="font-sans text-[10px] tracking-[0.18em] uppercase text-stone hover:text-offwhite transition-colors duration-300 pb-1 border-b border-ash hover:border-stone"
        >
          All Films →
        </Link>
      </div>

      {featuredFilm && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <Link to={`/films/${featuredFilm.id}`} className="block group" data-cursor="play">
            {/* Wide cinematic thumbnail */}
            <div className="relative aspect-[21/9] overflow-hidden bg-charcoal mb-0">
              {featuredFilm.thumbnail ? (
                <img
                  src={featuredFilm.thumbnail}
                  alt={featuredFilm.title}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-103"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #e1e4e8, #f6f8fa)' }} />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-void/90 via-transparent to-void/40" />

              {/* Film info overlay */}
              <div className="absolute inset-0 flex items-end p-8 md:p-12">
                <div>
                  <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-2">{featuredFilm.category} · {featuredFilm.duration}</p>
                  <h3 className="font-serif font-light text-offwhite text-4xl md:text-5xl leading-none mb-3 group-hover:text-warm-white transition-colors duration-500">{featuredFilm.title}</h3>
                  <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-stone">{featuredFilm.role}</p>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}
    </section>
  )
}

// ── Journal snippet ──────────────────────────────────────────────
function JournalSection() {
  const recent = journalEntries.slice(0, 2)

  return (
    <section className="px-6 md:px-12 py-24 md:py-32">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-3">05</p>
          <h2 className="font-changa text-black text-4xl md:text-5xl uppercase tracking-wide leading-none">
            Journal
          </h2>
        </div>
        <Link
          to="/journal"
          className="font-sans text-[10px] tracking-[0.18em] uppercase text-stone hover:text-offwhite transition-colors duration-300 pb-1 border-b border-ash hover:border-stone"
        >
          All Entries →
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        {recent.map((entry, i) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.15 }}
          >
            <p className="journal-date mb-3">{entry.date}</p>
            <h3 className="font-serif font-light text-offwhite text-xl mb-3">{entry.title}</h3>
            <p className="font-serif italic text-stone text-base leading-relaxed">{entry.text.substring(0, 140)}…</p>
            {entry.images?.[0] && (
              <div className="mt-5 aspect-[4/3] bg-charcoal overflow-hidden">
                <img src={entry.images[0]} alt={entry.title} className="w-full h-full object-cover opacity-80" loading="lazy" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ── Opening scene ─────────────────────────────────────────────────
function OpeningScene({ onEnter }) {
  const [phase, setPhase] = useState(0) // 0=dark, 1=image, 2=name, 3=ready

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 50)
    const t2 = setTimeout(() => setPhase(2), 150)
    const t3 = setTimeout(() => setPhase(3), 300)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <AnimatePresence>
        {phase >= 1 && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-[-5%] w-[110%] h-[110%]"
              style={{
                background: 'radial-gradient(ellipse at 35% 45%, #ffffff 0%, #f6f8fa 50%, #eaeef2 100%)',
              }}
            />
            {/* Subtle GitHub blue ambient leak */}
            <div
              className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse, rgba(9, 105, 218, 0.08) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void/90 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <AnimatePresence>
          {phase >= 2 && (
            <>
              <motion.p
                className="font-sans text-[9px] tracking-[0.35em] uppercase text-stone mb-6 font-semibold"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Artist · Musician · Filmmaker
              </motion.p>

              <motion.h1
                className="font-changa text-black leading-none tracking-tight mb-6 uppercase"
                style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 }}
              >
                BISHWAS<br />GAIRE
              </motion.h1>

              <motion.p
                className="font-serif italic text-stone text-lg md:text-xl mb-10 max-w-md mx-auto leading-relaxed font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                &ldquo;I create images, sounds, and stories.&rdquo;
              </motion.p>
            </>
          )}
        </AnimatePresence>

        {/* ENTER button */}
        <AnimatePresence>
          {phase >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <button
                onClick={onEnter}
                className="enter-btn"
                aria-label="Enter the portfolio"
                data-cursor="open"
              >
                ENTER
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom scroll hint */}
      <AnimatePresence>
        {phase >= 3 && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="w-px h-8 bg-gradient-to-b from-transparent to-stone" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── HOME PAGE ─────────────────────────────────────────────────────
export default function Home() {
  const navigate = useNavigate()
  const [entered, setEntered] = useState(() => {
    return sessionStorage.getItem('portfolio-entered') === 'true'
  })
  const [transitioning, setTransitioning] = useState(false)

  function handleEnter() {
    setTransitioning(true)
    sessionStorage.setItem('portfolio-entered', 'true')
    setTimeout(() => {
      setEntered(true)
      setTransitioning(false)
    }, 150)
  }

  // Update page title
  useEffect(() => {
    document.title = 'Bishwas Gaire | Artist · Musician · Filmmaker'
  }, [])

  return (
    <>
      {/* Opening scene (shown until entered) */}
      <AnimatePresence>
        {!entered && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <OpeningScene onEnter={handleEnter} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main portfolio content */}
      <AnimatePresence>
        {entered && (
          <PageTransition>
            {/* Hero — full-height cinematic intro */}
            <section
              className="relative min-h-screen flex flex-col justify-end pb-20 px-6 md:px-12 overflow-hidden"
              aria-label="Hero"
            >
              {/* Background */}
              <div
                className="absolute inset-[-5%] w-[110%] h-[110%]"
                style={{
                  background: 'radial-gradient(ellipse at 30% 50%, #ffffff 0%, #f6f8fa 70%)',
                  animation: 'slow-drift 40s ease-in-out infinite',
                }}
                aria-hidden="true"
              />

              {/* Subtle GitHub blue accent */}
              <div
                className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse, rgba(9, 105, 218, 0.06) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                }}
                aria-hidden="true"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-void/80 pointer-events-none" aria-hidden="true" />

              {/* Content */}
              <div className="relative z-10 max-w-4xl">
                <motion.p
                  className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Painting · Music · Photography · Cinematography
                </motion.p>

                <motion.h1
                  className="font-changa text-black leading-[0.92] tracking-tight mb-6 uppercase"
                  style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                >
                  BISHWAS<br />GAIRE
                </motion.h1>

                <motion.p
                  className="font-serif italic text-stone text-xl md:text-2xl max-w-xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                >
                  &ldquo;I am interested in the space between what is seen and what is felt.&rdquo;
                </motion.p>
              </div>
            </section>

            {/* Scene divider */}
            <div className="py-12 flex justify-center" aria-hidden="true">
              <div className="scene-divider" />
            </div>

            {/* Painting */}
            <PaintingSection />

            {/* Scene divider */}
            <div className="py-8 flex justify-center" aria-hidden="true">
              <div className="scene-divider" />
            </div>

            {/* Photography */}
            <PhotographySection />

            {/* Scene divider */}
            <div className="py-8 flex justify-center" aria-hidden="true">
              <div className="scene-divider" />
            </div>

            {/* Music */}
            <MusicSection />

            {/* Scene divider */}
            <div className="py-8 flex justify-center" aria-hidden="true">
              <div className="scene-divider" />
            </div>

            {/* Film */}
            <FilmSection />

            {/* Scene divider */}
            <div className="py-8 flex justify-center" aria-hidden="true">
              <div className="scene-divider" />
            </div>

            {/* Journal */}
            <JournalSection />

            {/* About teaser */}
            <section className="px-6 md:px-12 py-24 md:py-32 border-t border-ash">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="max-w-2xl"
              >
                <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-6">About</p>
                <blockquote className="font-serif font-light text-offwhite text-3xl md:text-4xl leading-tight mb-8">
                  &ldquo;I am interested in the space between what is seen and what is felt.&rdquo;
                </blockquote>
                <Link
                  to="/about"
                  className="font-sans text-[10px] tracking-[0.18em] uppercase text-stone hover:text-offwhite transition-colors duration-300 pb-1 border-b border-ash hover:border-stone"
                >
                  About Bishwas →
                </Link>
              </motion.div>
            </section>

            {/* Contact teaser */}
            <section className="px-6 md:px-12 py-24 md:py-32 border-t border-ash text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h2
                  className="font-serif font-light text-offwhite leading-none tracking-tight mb-8"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}
                >
                  LET'S MAKE SOMETHING.
                </h2>
                <Link
                  to="/contact"
                  className="font-sans text-[10px] tracking-[0.3em] uppercase text-stone hover:text-offwhite transition-colors duration-300 border-b border-ash hover:border-stone pb-1"
                >
                  Get in touch →
                </Link>
              </motion.div>
            </section>

            <Footer />
          </PageTransition>
        )}
      </AnimatePresence>
    </>
  )
}
