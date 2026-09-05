import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu, Sun, Moon } from 'lucide-react'
import { useTheme } from '../App.jsx'

const navLinks = [
  { label: 'WORK', to: '/work' },
  { label: 'MUSIC', to: '/music' },
  { label: 'MUSIC VIDEOS', to: '/music-videos' },
  { label: 'ABOUT', to: '/about' },
  { label: 'CONTACT', to: '/contact' },
]

export default function Navigation() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Glassmorphic Navbar */}
      <header
        className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 backdrop-blur-xl bg-white/70 dark:bg-[#0a0908]/75 border-b border-black/10 dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
      >
        {/* Logo in Luckiest Guy font in pure black */}
        <Link
          to="/"
          className="font-luckiest text-xl md:text-2xl tracking-wider text-black dark:text-white transition-opacity hover:opacity-80 duration-200"
        >
          BISHWAS GAIRE
        </Link>

        {/* Desktop nav with Luckiest Guy font in clean black */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Primary navigation">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-luckiest text-sm md:text-base tracking-wider relative px-2 py-1 transition-all duration-200 inline-block text-black dark:text-white ${
                  isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-1 right-1 h-[2.5px] rounded-full bg-black dark:bg-white"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right controls: Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={17} strokeWidth={2.2} className="text-amber-400" />
            ) : (
              <Moon size={17} strokeWidth={2.2} className="text-black" />
            )}
          </button>

          {/* Mobile menu hamburger button */}
          <button
            className="md:hidden p-2 text-black dark:text-white -mr-1 transition-transform hover:scale-105"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white/95 dark:bg-[#0a0908]/95 backdrop-blur-2xl flex flex-col justify-center px-10 py-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 p-2 text-black dark:text-white hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={26} strokeWidth={2} />
            </button>

            <nav className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  <Link
                    to={link.to}
                    className="font-luckiest text-3xl tracking-wider text-black dark:text-white block transition-transform hover:scale-105"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-10 flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 text-black dark:text-white flex items-center gap-2 font-luckiest text-xs cursor-pointer"
              >
                {theme === 'dark' ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
                <span>{theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}</span>
              </button>
            </div>

            <p className="absolute bottom-8 left-10 font-luckiest text-xs tracking-widest uppercase text-stone dark:text-smoke">
              Artist · Musician · Filmmaker
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
