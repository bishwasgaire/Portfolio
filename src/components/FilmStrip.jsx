// Horizontal film strip for BTS / process images
export default function FilmStrip({ images = [], title }) {
  if (!images || images.length === 0) return null

  return (
    <div className="w-full">
      <div className="film-strip">
        {images.map((src, i) => (
          <div
            key={i}
            className="film-strip__frame flex-shrink-0"
            style={{ width: 'clamp(220px, 30vw, 380px)' }}
          >
            <div className="aspect-[3/2] bg-charcoal overflow-hidden">
              {src ? (
                <img
                  src={src}
                  alt={`${title || 'BTS'} — frame ${i + 1}`}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
              ) : (
                <div
                  className="w-full h-full"
                  style={{
                    background: `linear-gradient(${135 + i * 30}deg, #e1e4e8, #f6f8fa)`,
                  }}
                />
              )}
            </div>
            {/* Frame number */}
            <div className="bg-void px-3 py-1 flex justify-between items-center">
              <span className="font-mono text-[8px] tracking-[0.15em] text-ash">
                {String(i + 1).padStart(3, '0')}
              </span>
              <span className="font-mono text-[8px] tracking-[0.08em] text-ash">◼◼◼</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
