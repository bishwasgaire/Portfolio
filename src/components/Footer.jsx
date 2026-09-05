import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ash py-10 px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Identity */}
        <div>
          <Link
            to="/"
            className="font-sans text-[10px] font-medium tracking-[0.25em] uppercase text-stone hover:text-offwhite dark:text-parchment dark:hover:text-white transition-colors duration-300"
          >
            BISHWAS GAIRE
          </Link>
          <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-smoke dark:text-stone mt-1">
            Artist · Musician · Filmmaker
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
          {[
            { label: 'Work', to: '/work' },
            { label: 'Music', to: '/music' },
            { label: 'Music Videos', to: '/music-videos' },
            { label: 'About', to: '/about' },
            { label: 'Contact', to: '/contact' },
          ].map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="font-sans text-[9px] tracking-[0.18em] uppercase text-smoke hover:text-stone dark:text-stone dark:hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-sans text-[9px] tracking-[0.12em] text-smoke dark:text-stone">
          © {year} Bishwas Gaire
        </p>
      </div>
    </footer>
  )
}
