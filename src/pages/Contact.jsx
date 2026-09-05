import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Instagram, Youtube, Check, Copy, ArrowUpRight } from 'lucide-react'
import { about } from '../data/about.js'
import PageTransition from '../components/PageTransition.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    discipline: 'General Inquiry',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'Contact — Bishwas Gaire'
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText(about.contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

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
            Inquiries & Transmissions
          </motion.p>
          <motion.h1
            className="font-changa text-black leading-none tracking-wide mb-6 uppercase"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            CONTACT
          </motion.h1>
          <motion.p
            className="font-serif italic text-stone text-lg max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            For commissions, original scores, film directing, print acquisitions, or multidisciplinary collaborations.
          </motion.p>
        </div>

        {/* Form and Contact Information Grid */}
        <div className="px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Interactive Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-ash/60 p-10 bg-charcoal/20 text-center py-16"
              >
                <div className="w-12 h-12 border border-offwhite/40 rounded-full flex items-center justify-center mx-auto mb-6 text-offwhite">
                  <Check size={20} />
                </div>
                <h3 className="font-serif text-2xl text-offwhite mb-3">Transmission Received</h3>
                <p className="font-sans text-[13px] text-stone max-w-sm mx-auto leading-relaxed mb-6 font-light">
                  Thank you for reaching out. Your note has been delivered. Bishwas will respond shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', discipline: 'General Inquiry', message: '' }) }}
                  className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone hover:text-offwhite border border-ash px-4 py-2 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-void border border-ash/80 px-4 py-3 text-offwhite font-sans text-[13px] focus:outline-none focus:border-offwhite/70 transition-colors placeholder:text-stone/40"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your.email@domain.com"
                    className="w-full bg-void border border-ash/80 px-4 py-3 text-offwhite font-sans text-[13px] focus:outline-none focus:border-offwhite/70 transition-colors placeholder:text-stone/40"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-2">
                    Discipline / Interest
                  </label>
                  <select
                    value={formState.discipline}
                    onChange={(e) => setFormState({ ...formState, discipline: e.target.value })}
                    className="w-full bg-void border border-ash/80 px-4 py-3 text-offwhite font-sans text-[13px] focus:outline-none focus:border-offwhite/70 transition-colors"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Painting / Print Acquisition">Painting / Print Acquisition</option>
                    <option value="Film / Cinematography">Film / Cinematography Direction</option>
                    <option value="Music / Original Score">Music / Original Score</option>
                    <option value="Fine Art Photography">Fine Art Photography</option>
                    <option value="Exhibition / Curatorial">Exhibition / Curatorial</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or inquiry..."
                    className="w-full bg-void border border-ash/80 px-4 py-3 text-offwhite font-sans text-[13px] focus:outline-none focus:border-offwhite/70 transition-colors resize-none placeholder:text-stone/40"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-sans text-[10px] tracking-[0.25em] uppercase text-offwhite border border-offwhite/40 px-8 py-4 hover:border-offwhite hover:bg-offwhite hover:text-void transition-all duration-300 disabled:opacity-50"
                  data-cursor="pointer"
                >
                  {isSubmitting ? 'Transmitting…' : 'Send Transmission →'}
                </button>
              </form>
            )}
          </div>

          {/* Right: Direct Information & Socials */}
          <div className="lg:col-span-5 space-y-12">
            {/* Direct Email Card */}
            <div className="border border-ash/60 p-8 bg-charcoal/20">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-2">
                Direct Email
              </p>
              <div className="flex items-center justify-between gap-4 mt-2">
                <a
                  href={`mailto:${about.contact.email}`}
                  className="font-serif text-xl md:text-2xl text-offwhite hover:text-warm-white transition-colors break-all"
                >
                  {about.contact.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="text-stone hover:text-offwhite p-2 transition-colors flex-shrink-0"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={16} className="text-offwhite" /> : <Copy size={16} />}
                </button>
              </div>
              {copied && (
                <p className="font-sans text-[10px] text-offwhite/70 tracking-widest mt-2 uppercase">
                  Copied to clipboard
                </p>
              )}
            </div>

            {/* Studio Location */}
            <div className="border-t border-ash/60 pt-8">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-3">
                Studio Location
              </p>
              <h4 className="font-serif text-xl text-offwhite mb-2">
                {about.location}
              </h4>
              <p className="font-sans text-[12px] text-stone font-light leading-relaxed">
                Available for local studio visits by private appointment, and worldwide for film productions and sound commissions.
              </p>
            </div>

            {/* Online Archives & Platforms */}
            <div className="border-t border-ash/60 pt-8">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-4">
                Platforms & Archives
              </p>
              <ul className="space-y-3 font-sans text-[12px]">
                {about.contact.instagram && (
                  <li>
                    <a
                      href={about.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-stone hover:text-offwhite transition-colors group"
                    >
                      <span>Instagram</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </li>
                )}
                {about.contact.vimeo && (
                  <li>
                    <a
                      href={about.contact.vimeo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-stone hover:text-offwhite transition-colors group"
                    >
                      <span>Vimeo / Cinema</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </li>
                )}
                {about.contact.spotify && (
                  <li>
                    <a
                      href={about.contact.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-stone hover:text-offwhite transition-colors group"
                    >
                      <span>Spotify / Music</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </li>
                )}
                {about.contact.soundcloud && (
                  <li>
                    <a
                      href={about.contact.soundcloud}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-stone hover:text-offwhite transition-colors group"
                    >
                      <span>SoundCloud / Field Audio</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </li>
                )}
                {about.contact.youtube && (
                  <li>
                    <a
                      href={about.contact.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-stone hover:text-offwhite transition-colors group"
                    >
                      <span>YouTube / Experiments</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
