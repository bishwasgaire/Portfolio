import { useState, useEffect, useRef, useCallback } from 'react'

export function useAudio(tracks = []) {
  const audioRef = useRef(null)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isLoading, setIsLoading] = useState(false)

  const currentTrack = tracks[currentTrackIndex] || null

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio()
    audio.volume = volume
    audio.preload = 'metadata'
    audioRef.current = audio

    const handleTimeUpdate = () => {
      setProgress(audio.currentTime)
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
      setIsLoading(false)
    }

    const handleEnded = () => {
      if (currentTrackIndex < tracks.length - 1) {
        setCurrentTrackIndex(i => i + 1)
      } else {
        setIsPlaying(false)
        setProgress(0)
      }
    }

    const handleWaiting = () => setIsLoading(true)
    const handleCanPlay = () => setIsLoading(false)

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('waiting', handleWaiting)
    audio.addEventListener('canplay', handleCanPlay)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('waiting', handleWaiting)
      audio.removeEventListener('canplay', handleCanPlay)
      audio.pause()
      audio.src = ''
    }
  }, []) // eslint-disable-line

  // Load new track when index changes
  useEffect(() => {
    if (!audioRef.current || !currentTrack) return
    const wasPlaying = isPlaying
    audioRef.current.src = currentTrack.audioUrl
    audioRef.current.load()
    setProgress(0)
    if (wasPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false))
    }
  }, [currentTrackIndex]) // eslint-disable-line

  const play = useCallback(() => {
    if (!audioRef.current) return
    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch(err => {
        console.warn('Playback failed:', err)
        setIsPlaying(false)
      })
  }, [])

  const pause = useCallback(() => {
    if (!audioRef.current) return
    audioRef.current.pause()
    setIsPlaying(false)
  }, [])

  const togglePlay = useCallback(() => {
    if (isPlaying) pause()
    else play()
  }, [isPlaying, play, pause])

  const seek = useCallback((time) => {
    if (!audioRef.current) return
    audioRef.current.currentTime = time
    setProgress(time)
  }, [])

  const changeVolume = useCallback((vol) => {
    if (!audioRef.current) return
    audioRef.current.volume = vol
    setVolume(vol)
  }, [])

  const nextTrack = useCallback(() => {
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(i => i + 1)
    }
  }, [currentTrackIndex, tracks.length])

  const prevTrack = useCallback(() => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(i => i - 1)
    } else if (audioRef.current) {
      audioRef.current.currentTime = 0
    }
  }, [currentTrackIndex])

  const selectTrack = useCallback((index) => {
    if (index === currentTrackIndex) {
      togglePlay()
    } else {
      setCurrentTrackIndex(index)
      setIsPlaying(true)
    }
  }, [currentTrackIndex, togglePlay])

  return {
    currentTrack,
    currentTrackIndex,
    isPlaying,
    progress,
    duration,
    volume,
    isLoading,
    play,
    pause,
    togglePlay,
    seek,
    changeVolume,
    nextTrack,
    prevTrack,
    selectTrack,
  }
}
