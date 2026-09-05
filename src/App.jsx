import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect, createContext, useContext } from 'react'

import Navigation from './components/Navigation.jsx'
import GrainOverlay from './components/GrainOverlay.jsx'
import CursorInteraction from './components/CursorInteraction.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import Music from './pages/Music.jsx'
import MusicProject from './pages/MusicProject.jsx'
import Films from './pages/Films.jsx'
import FilmProject from './pages/FilmProject.jsx'
import Journal from './pages/Journal.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

// ─── Sound Context ────────────────────────────────────────────
export const SoundContext = createContext({
  soundEnabled: false,
  setSoundEnabled: () => {},
})

export function useSoundContext() {
  return useContext(SoundContext)
}

// ─── Animated Routes ─────────────────────────────────────────
function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:projectId" element={<ProjectPage />} />
        <Route path="/music" element={<Music />} />
        <Route path="/music/:projectId" element={<MusicProject />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:filmId" element={<FilmProject />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

// ─── Shell ────────────────────────────────────────────────────
function AppShell() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <GrainOverlay />
      <CursorInteraction />
      <Navigation />
      <main>
        <AnimatedRoutes />
      </main>
      {!isHome && <Footer />}
    </>
  )
}

// ─── App ─────────────────────────────────────────────────────
export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(false)

  // Persist sound preference
  useEffect(() => {
    const stored = sessionStorage.getItem('sound-enabled')
    if (stored === 'true') setSoundEnabled(true)
  }, [])

  useEffect(() => {
    sessionStorage.setItem('sound-enabled', soundEnabled.toString())
  }, [soundEnabled])

  return (
    <SoundContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </SoundContext.Provider>
  )
}
