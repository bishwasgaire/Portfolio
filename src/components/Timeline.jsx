import { motion } from 'framer-motion'

export default function Timeline({ entries = [] }) {
  return (
    <div className="space-y-0">
      {entries.map((entry, i) => (
        <motion.div
          key={entry.year}
          className="flex gap-8 md:gap-16 py-8 border-b border-ash"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Year — large editorial typography */}
          <div className="flex-shrink-0 w-24 md:w-32">
            <span className="timeline-year">{entry.year}</span>
          </div>

          {/* Entry text */}
          <div className="flex-1 flex items-center">
            <p className="font-sans text-[13px] text-stone leading-relaxed font-light">
              {entry.entry}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
