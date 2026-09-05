import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { journalEntries } from '../data/journal.js'
import JournalEntry from '../components/JournalEntry.jsx'
import PageTransition from '../components/PageTransition.jsx'

export default function Journal() {
  const [selectedTag, setSelectedTag] = useState('ALL')

  useEffect(() => {
    document.title = 'Journal — Bishwas Gaire'
  }, [])

  // Extract all unique tags
  const allTags = ['ALL', ...new Set(journalEntries.flatMap(entry => entry.tags || []))]

  const filteredEntries = selectedTag === 'ALL'
    ? journalEntries
    : journalEntries.filter(entry => entry.tags?.includes(selectedTag))

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
            Visual Diary & Notes
          </motion.p>
          <motion.h1
            className="font-changa text-black dark:text-white leading-none tracking-wide mb-6 uppercase"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            JOURNAL
          </motion.h1>
          <motion.p
            className="font-serif italic text-stone text-lg max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fragments, field recordings, color experiments, sketches, and reflections on process.
          </motion.p>
        </div>

        {/* Tag Filters */}
        <div className="px-6 md:px-12 mb-12">
          <div className="flex flex-wrap items-center gap-2 border-b border-ash/50 pb-6">
            <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-smoke dark:text-stone mr-3">Filter:</span>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`font-sans text-[10px] tracking-[0.18em] uppercase px-3 py-1 transition-all duration-300 ${
                  selectedTag === tag
                    ? 'text-offwhite border-b-2 border-offwhite font-medium'
                    : 'text-stone hover:text-offwhite'
                }`}
                data-cursor="pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Journal Entries List */}
        <div className="px-6 md:px-12 max-w-4xl">
          <AnimatePresence>
            {filteredEntries.map((entry, index) => (
              <JournalEntry key={entry.id} entry={entry} index={index} />
            ))}
          </AnimatePresence>
          {filteredEntries.length === 0 && (
            <p className="font-serif italic text-stone text-lg py-12">No entries matching this filter.</p>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
