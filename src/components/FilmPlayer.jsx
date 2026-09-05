import { useState, useRef } from 'react'
import { Play, Pause, Maximize2 } from 'lucide-react'

export default function FilmPlayer({ videoUrl, posterUrl, title }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  if (!videoUrl) {
    // Poster-only display when no video available
    return (
      <div className="relative w-full aspect-video bg-charcoal overflow-hidden">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={title || 'Film still'}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-charcoal to-void flex items-center justify-center">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-smoke">
              Film unavailable
            </p>
          </div>
        )}
        <div className="absolute inset-0 bg-void/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone">
            Preview unavailable
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative w-full aspect-video bg-void group cursor-pointer"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onClick={togglePlay}
      data-cursor="play"
    >
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        className="w-full h-full object-cover"
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
        aria-label={title}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-void/30 transition-opacity duration-500 ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Play/Pause button */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-16 h-16 border border-offwhite/30 rounded-full flex items-center justify-center backdrop-blur-sm hover:border-offwhite/60 transition-colors duration-300">
          {isPlaying ? (
            <Pause size={20} strokeWidth={1} className="text-offwhite" />
          ) : (
            <Play size={20} strokeWidth={1} className="text-offwhite ml-1" />
          )}
        </div>
      </div>

      {/* Fullscreen button */}
      <button
        className={`absolute bottom-4 right-4 text-stone hover:text-offwhite transition-all duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={(e) => { e.stopPropagation(); handleFullscreen() }}
        aria-label="Fullscreen"
      >
        <Maximize2 size={16} strokeWidth={1.5} />
      </button>
    </div>
  )
}
