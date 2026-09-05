import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion.js'

/**
 * CinematicHero
 * 
 * Reusable fullscreen cinematic hero component used across:
 * - Homepage
 * - Film project pages
 * - Music project pages
 * - Selected artwork pages
 *
 * Props:
 * - backgroundImage: string (URL)
 * - backgroundVideo: string (URL, optional)
 * - posterImage: string (fallback for video)
 * - overlayIntensity: number 0–1 (default 0.6)
 * - title: string
 * - subtitle: string
 * - quote: string
 * - metadata: array of { label, value }
 * - minHeight: string CSS value (default '100vh')
 * - children: React nodes (for custom CTAs etc)
 * - showGrain: boolean
 */
export default function CinematicHero({
  backgroundImage,
  backgroundVideo,
  posterImage,
  overlayIntensity = 0.6,
  title,
  subtitle,
  quote,
  metadata = [],
  minHeight = '100vh',
  children,
  showGrain = false,
}) {
  const reducedMotion = useReducedMotion()
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const bgStyle = reducedMotion ? {} : { y: bgY }
  const textStyle = reducedMotion ? {} : { y: textY, opacity }

  return (
    <div
      ref={containerRef}
      className="cinematic-hero relative overflow-hidden"
      style={{ minHeight }}
    >
      {/* Background media */}
      {backgroundVideo ? (
        <motion.video
          className="cinematic-hero__bg"
          style={bgStyle}
          src={backgroundVideo}
          poster={posterImage || backgroundImage}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      ) : backgroundImage ? (
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ ...bgStyle, scale: 1.05 }}
        >
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            aria-hidden="true"
          />
        </motion.div>
      ) : (
        // Fallback — gradient background
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 40%, #f6f8fa 0%, #ffffff 70%)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Cinematic overlay */}
      <div
        className="absolute inset-0 cinematic-overlay"
        style={{
          background: `linear-gradient(
            180deg,
            rgba(255, 255, 255, ${overlayIntensity * 0.4}) 0%,
            rgba(255, 255, 255, ${overlayIntensity * 0.15}) 35%,
            rgba(255, 255, 255, ${overlayIntensity * 0.7}) 75%,
            rgba(255, 255, 255, ${overlayIntensity * 0.95}) 100%
          )`,
        }}
        aria-hidden="true"
      />

      {/* Optional grain */}
      {showGrain && (
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-[0.02]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: '300px 300px',
          }}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-end h-full px-6 md:px-12 pb-16 md:pb-20"
        style={{ minHeight, ...textStyle }}
      >
        <div className="max-w-3xl">
          {/* Metadata labels */}
          {metadata.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-6">
              {metadata.map((m, i) => (
                <span key={i} className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone">
                  {m.label && <span className="text-smoke mr-2">{m.label}</span>}
                  {m.value}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          {title && (
            <motion.h1
              className="font-changa text-black leading-none tracking-wide mb-4 uppercase"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {title}
            </motion.h1>
          )}

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              className="font-sans text-[11px] tracking-[0.2em] uppercase text-parchment mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Quote */}
          {quote && (
            <motion.blockquote
              className="font-serif italic text-stone text-lg md:text-xl leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              &ldquo;{quote}&rdquo;
            </motion.blockquote>
          )}

          {/* Children (CTA buttons etc) */}
          {children && (
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
