// Minimal CSS-animated visualizer bars
// Not a nightclub effect — subtle waveform suggesting music is playing
export default function AudioVisualizer({ isPlaying, barCount = 16, height = 32 }) {
  if (!isPlaying) return null

  return (
    <div
      className="flex items-end gap-[2px]"
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      {Array.from({ length: barCount }, (_, i) => {
        const delay = (i * 0.07) % 0.8
        const minH = 15 + (i % 3) * 10
        const maxH = 50 + (i % 5) * 15

        return (
          <span
            key={i}
            className="inline-block bg-stone rounded-sm"
            style={{
              width: '2px',
              height: `${minH}%`,
              animation: `bar-dance ${0.6 + (i % 4) * 0.15}s ease-in-out ${delay}s infinite alternate`,
              transformOrigin: 'bottom',
            }}
          />
        )
      })}
    </div>
  )
}
