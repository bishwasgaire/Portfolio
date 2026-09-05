import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react'
import { useAudio } from '../hooks/useAudio.js'
import AudioVisualizer from './AudioVisualizer.jsx'

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function MusicPlayer({ project }) {
  const { tracks, title, artwork, genre, year } = project
  const {
    currentTrack,
    currentTrackIndex,
    isPlaying,
    progress,
    duration,
    volume,
    isLoading,
    togglePlay,
    seek,
    changeVolume,
    nextTrack,
    prevTrack,
    selectTrack,
  } = useAudio(tracks)

  const [showVolume, setShowVolume] = useState(false)
  const progressPercent = duration > 0 ? (progress / duration) * 100 : 0

  return (
    <div className="w-full">
      {/* Album artwork + playing state */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-10">
        {/* Artwork */}
        <div className="relative flex-shrink-0">
          <div className="w-48 h-48 md:w-56 md:h-56 bg-charcoal overflow-hidden">
            {artwork ? (
              <motion.img
                src={artwork}
                alt={`${title} artwork`}
                className="w-full h-full object-cover"
                animate={isPlaying ? { scale: 1.03 } : { scale: 1 }}
                transition={{ duration: 3, ease: 'easeInOut' }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-charcoal to-void" />
            )}
          </div>

          {/* Visualizer overlay when playing */}
          <AnimatePresence>
            {isPlaying && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-12 flex items-end justify-center gap-[2px] px-4 pb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AudioVisualizer isPlaying={isPlaying} barCount={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-between py-2">
          <div>
            <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-stone mb-2">
              {year} · {genre}
            </p>
            <h2 className="font-serif font-light text-offwhite text-3xl md:text-4xl leading-tight mb-4">
              {title}
            </h2>
            {currentTrack && (
              <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-stone">
                Now playing — {currentTrack.title}
              </p>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={prevTrack}
              className="text-stone hover:text-offwhite transition-colors duration-300"
              aria-label="Previous track"
              data-cursor="play"
            >
              <SkipBack size={16} strokeWidth={1.5} />
            </button>

            <button
              onClick={togglePlay}
              className="w-10 h-10 border border-offwhite/30 hover:border-offwhite/70 flex items-center justify-center transition-all duration-300 hover:bg-offwhite/5"
              aria-label={isPlaying ? 'Pause' : 'Play'}
              data-cursor="play"
            >
              {isLoading ? (
                <span className="w-2 h-2 rounded-full bg-stone animate-pulse" />
              ) : isPlaying ? (
                <Pause size={14} strokeWidth={1.5} className="text-offwhite" />
              ) : (
                <Play size={14} strokeWidth={1.5} className="text-offwhite ml-0.5" />
              )}
            </button>

            <button
              onClick={nextTrack}
              className="text-stone hover:text-offwhite transition-colors duration-300"
              aria-label="Next track"
              data-cursor="play"
            >
              <SkipForward size={16} strokeWidth={1.5} />
            </button>

            {/* Volume */}
            <div className="relative flex items-center gap-2">
              <button
                className="text-stone hover:text-offwhite transition-colors duration-300"
                onClick={() => setShowVolume(!showVolume)}
                aria-label="Volume"
                data-cursor="sound"
              >
                {volume === 0 ? <VolumeX size={14} strokeWidth={1.5} /> : <Volume2 size={14} strokeWidth={1.5} />}
              </button>
              <AnimatePresence>
                {showVolume && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="overflow-hidden"
                  >
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={volume}
                      onChange={(e) => changeVolume(parseFloat(e.target.value))}
                      className="volume-slider"
                      aria-label="Volume"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-2">
        <div className="relative group">
          <input
            type="range"
            min="0"
            max={duration || 100}
            step="0.1"
            value={progress}
            onChange={(e) => seek(parseFloat(e.target.value))}
            className="audio-progress"
            aria-label="Playback progress"
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="font-mono text-[10px] text-stone">{formatTime(progress)}</span>
          <span className="font-mono text-[10px] text-stone">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Track listing */}
      <div className="mt-8 border-t border-ash">
        {tracks.map((track, i) => (
          <button
            key={track.id}
            onClick={() => selectTrack(i)}
            className={`w-full flex items-center gap-4 py-4 px-0 border-b border-ash text-left transition-all duration-300 group ${
              currentTrackIndex === i ? 'text-offwhite' : 'text-stone hover:text-parchment'
            }`}
            data-cursor="play"
          >
            {/* Track number or playing indicator */}
            <div className="w-8 flex-shrink-0">
              {currentTrackIndex === i && isPlaying ? (
                <div className="flex gap-[2px] items-end h-4">
                  {[0, 1, 2].map(j => (
                    <span
                      key={j}
                      className="visualizer-bar"
                      style={{
                        height: `${40 + (j * 20)}%`,
                        animationDelay: `${j * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
              ) : (
                <span className="font-mono text-[10px] text-stone">
                  {String(track.number).padStart(2, '0')}
                </span>
              )}
            </div>

            {/* Title */}
            <span className="font-sans text-[12px] tracking-[0.08em] flex-1">
              {track.title}
            </span>

            {/* Duration */}
            {track.duration && (
              <span className="font-mono text-[10px] text-stone">
                {track.duration}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
