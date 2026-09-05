import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Instagram, Youtube, Music } from 'lucide-react'
import { about } from '../data/about.js'
import Timeline from '../components/Timeline.jsx'
import PageTransition from '../components/PageTransition.jsx'

export default function About() {
  useEffect(() => {
    document.title = 'About — Bishwas Gaire'
  }, [])

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-24">
        {/* Header */}
        <div className="px-6 md:px-12 mb-16">
          <motion.p
            className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Biography & Artist Statement
          </motion.p>
          <motion.h1
            className="font-changa text-black leading-none tracking-wide mb-4 uppercase"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6.5rem)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {about.name.toUpperCase()}
          </motion.h1>
          <motion.p
            className="font-sans text-[11px] tracking-[0.25em] uppercase text-smoke"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {about.primaryTitle} — {about.location}
          </motion.p>
        </div>

        {/* Core Presentation Grid */}
        <div className="px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Left Column: Portrait & Meta */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* Portrait */}
            <div className="aspect-[4/5] bg-charcoal overflow-hidden border border-ash/50 relative mb-8">
              {about.portrait ? (
                <img
                  src={about.portrait}
                  alt={about.name}
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-charcoal via-asphalt to-void flex items-center justify-center">
                  <span className="font-serif text-3xl text-smoke italic">B.G.</span>
                </div>
              )}
              <div className="absolute bottom-3 left-3 bg-void/80 px-2.5 py-1 backdrop-blur-sm">
                <span className="font-mono text-[9px] tracking-[0.15em] text-stone">
                  {about.location}
                </span>
              </div>
            </div>

            {/* Disciplines */}
            <div className="mb-8">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-3">
                Disciplines
              </p>
              <div className="flex flex-wrap gap-2">
                {about.disciplines.map(d => (
                  <span
                    key={d}
                    className="font-sans text-[10px] tracking-[0.18em] uppercase text-offwhite border border-ash px-3 py-1 bg-charcoal/30"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="border-t border-ash/60 pt-6">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-2">
                Current Availability
              </p>
              <p className="font-sans text-[12px] text-stone leading-relaxed font-light">
                {about.availability}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Statement & Narrative */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div>
              {/* Primary Philosophy Quote */}
              <blockquote className="font-serif italic text-2xl md:text-3xl text-offwhite leading-relaxed border-l-2 border-ash pl-6 md:pl-8 mb-10">
                &ldquo;{about.philosophyStatement}&rdquo;
              </blockquote>

              {/* Biography Paragraphs */}
              <div className="space-y-6 font-sans text-[14px] md:text-[15px] text-stone leading-relaxed font-light">
                {about.biography.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Interconnectivity Concept Box */}
            <div className="border border-ash/60 p-8 mt-12 bg-charcoal/20">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-4">
                Creative Matrix — Art × Music × Cinema
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-[12px] text-stone">
                <div>
                  <p className="font-serif text-offwhite text-sm mb-1">Painting</p>
                  <p className="font-sans text-[11px] text-ash">Texture, tone, sensory silence, and tactile memory.</p>
                </div>
                <div>
                  <p className="font-serif text-offwhite text-sm mb-1">Sound</p>
                  <p className="font-sans text-[11px] text-ash">Field recording, spatial resonance, nocturnal pianos.</p>
                </div>
                <div>
                  <p className="font-serif text-offwhite text-sm mb-1">Cinema</p>
                  <p className="font-sans text-[11px] text-ash">Observational pacing, natural light, human stillness.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="px-6 md:px-12 max-w-5xl mb-24">
          <div className="border-t border-ash pt-16 mb-8">
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-3">
              Chronology
            </p>
            <h2 className="font-serif font-light text-3xl text-offwhite mb-8">
              Trajectory & Milestones
            </h2>
            <Timeline entries={about.timeline} />
          </div>
        </div>

        {/* Contact Teaser */}
        <div className="px-6 md:px-12">
          <div className="border border-ash p-8 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8 bg-charcoal/10">
            <div>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-2">
                Get In Touch
              </p>
              <h3 className="font-serif font-light text-2xl md:text-3xl text-offwhite">
                Inquiries, Commissions & Collaborations
              </h3>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.25em] uppercase text-offwhite border border-offwhite/40 px-6 py-4 hover:border-offwhite hover:bg-offwhite hover:text-void transition-all duration-300 w-fit"
              data-cursor="pointer"
            >
              <span>Initiate Contact</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
