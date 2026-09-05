import ArtworkCard from './ArtworkCard.jsx'

export default function ProjectGallery({ artworks }) {
  if (!artworks || artworks.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-stone">
          No works in this category
        </p>
      </div>
    )
  }

  return (
    <div className="masonry-grid">
      {artworks.map((artwork, index) => (
        <ArtworkCard
          key={artwork.id}
          artwork={artwork}
          index={index}
        />
      ))}
    </div>
  )
}
