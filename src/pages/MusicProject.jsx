import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { getMusicById, musicProjects } from '../data/music.js'
import PageTransition from '../components/PageTransition.jsx'
import MusicPlayer from '../components/MusicPlayer.jsx'

export default function MusicProject() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const project = getMusicById(projectId)

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Music — Bishwas Gaire`
    }
  }, [project])

  if (!project) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <p className="font-serif italic text-xl text-stone mb-4">Record not found in sound archive.</p>
        <button
          onClick={() => navigate('/music')}
          className="font-sans text-[10px] tracking-[0.2em] uppercase text-offwhite border border-ash px-4 py-2 hover:border-offwhite transition-colors"
        >
          Return to Music
        </button>
      </div>
    )
  }

  // Other projects for footer navigation
  const otherProjects = musicProjects.filter(p => p.id !== project.id)

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              to="/music"
              className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.25em] uppercase text-stone hover:text-offwhite transition-colors duration-300 group"
              data-cursor="pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Sound Archive</span>
            </Link>
          </motion.div>

          {/* Statement Quote */}
          {project.statement && (
            <motion.blockquote
              className="border-l border-ash pl-6 py-1 my-10 font-serif italic text-xl md:text-2xl text-offwhite/90 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              "{project.statement}"
            </motion.blockquote>
          )}

          {/* Main Music Player Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mb-16"
          >
            <MusicPlayer project={project} />
          </motion.div>

          {/* Description & Liner Notes */}
          <motion.div
            className="border-t border-ash pt-12 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-3">
                Liner Notes
              </p>
              <div className="space-y-2 font-sans text-[11px] text-stone">
                <p><span className="text-ash uppercase tracking-wider">Format:</span> Digital & Field Master</p>
                <p><span className="text-ash uppercase tracking-wider">Year:</span> {project.year}</p>
                <p><span className="text-ash uppercase tracking-wider">Composer:</span> Bishwas Gaire</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-3">
                About the Record
              </p>
              <p className="font-sans text-[13px] text-stone leading-relaxed font-light">
                {project.description}
              </p>
            </div>
          </motion.div>

          {/* Other Albums Navigation */}
          {otherProjects.length > 0 && (
            <div className="border-t border-ash mt-20 pt-12">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-8">
                More in Sound Archive
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherProjects.map(other => (
                  <Link
                    key={other.id}
                    to={`/music/${other.id}`}
                    className="p-6 border border-ash/50 hover:border-ash group transition-all duration-300 bg-charcoal/20"
                    data-cursor="play"
                  >
                    <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-stone mb-1">
                      {other.year} · {other.genre}
                    </p>
                    <h3 className="font-serif text-lg text-offwhite group-hover:text-warm-white transition-colors duration-300">
                      {other.title}
                    </h3>
                    <p className="font-sans text-[10px] text-ash tracking-widest uppercase mt-3">
                      {other.tracks.length} tracks →
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
