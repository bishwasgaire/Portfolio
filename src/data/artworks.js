// ─── Artwork Data ─────────────────────────────────────────────
// To add a new artwork: add a new object to this array.
// Replace coverImage/images paths with actual artwork files in /public/images/

export const artworks = [
  {
    id: 'fragments-of-rain',
    title: 'Fragments of Rain',
    year: 2026,
    category: 'PAINTING',
    medium: 'Watercolor on paper',
    description: 'An exploration of memory through diluted pigment and layered texture. Rain becomes a metaphor for the way recollection bleeds and disperses, never quite the shape you remember.',
    statement: 'Water and pigment do not lie. They settle where gravity takes them.',
    coverImage: '/images/paintings/fragments-of-rain-cover.jpg',
    images: [
      '/images/paintings/fragments-of-rain-01.jpg',
      '/images/paintings/fragments-of-rain-02.jpg',
      '/images/paintings/fragments-of-rain-03.jpg',
    ],
    aspectRatio: 'portrait',
  },
  {
    id: 'still-hours',
    title: 'Still Hours',
    year: 2025,
    category: 'PAINTING',
    medium: 'Oil on linen',
    description: 'A meditation on domestic silence. The hours between activity. The dust in afternoon light. The way a room holds presence even after the person has left.',
    statement: 'I wanted to paint the feeling of a held breath.',
    coverImage: '/images/paintings/still-hours-cover.jpg',
    images: [
      '/images/paintings/still-hours-01.jpg',
      '/images/paintings/still-hours-02.jpg',
    ],
    aspectRatio: 'landscape',
  },
  {
    id: 'threshold',
    title: 'Threshold',
    year: 2026,
    category: 'PAINTING',
    medium: 'Acrylic and charcoal',
    description: 'Doorways. Passages. The architecture of transition. Painted from memory of spaces between — neither inside nor outside.',
    statement: 'The most interesting place is always the doorway.',
    coverImage: '/images/paintings/threshold-cover.jpg',
    images: [
      '/images/paintings/threshold-01.jpg',
      '/images/paintings/threshold-02.jpg',
    ],
    aspectRatio: 'portrait',
  },
  {
    id: 'monsoon-study',
    title: 'Monsoon Study I–IV',
    year: 2024,
    category: 'PAINTING',
    medium: 'Ink wash on paper',
    description: 'A series of four studies painted during monsoon season. Each piece captures a different quality of rain — its sound, its weight, its effect on color and atmosphere.',
    statement: 'Four paintings. Four kinds of silence.',
    coverImage: '/images/paintings/monsoon-study-cover.jpg',
    images: [
      '/images/paintings/monsoon-01.jpg',
      '/images/paintings/monsoon-02.jpg',
      '/images/paintings/monsoon-03.jpg',
      '/images/paintings/monsoon-04.jpg',
    ],
    aspectRatio: 'square',
  },
  // ── Photography ──────────────────────────────────────────────
  {
    id: 'between-hills',
    title: 'Between Hills',
    year: 2026,
    category: 'PHOTOGRAPHY',
    medium: 'Digital photography',
    description: 'A series shot across the hill stations of eastern Nepal during the pre-monsoon season. Mist, terraced fields, and the particular quality of light at high altitude.',
    statement: 'The hills hold light differently at five in the morning.',
    coverImage: '/images/photography/between-hills-cover.jpg',
    images: [
      '/images/photography/between-hills-01.jpg',
      '/images/photography/between-hills-02.jpg',
      '/images/photography/between-hills-03.jpg',
    ],
    camera: 'Sony A7 IV',
    lens: '35mm f/1.8',
    location: 'Eastern Nepal',
    aspectRatio: 'landscape',
  },
  {
    id: 'portraits-of-silence',
    title: 'Portraits of Silence',
    year: 2025,
    category: 'PHOTOGRAPHY',
    medium: 'Film photography',
    description: 'Intimate portraits shot on 35mm film. Subjects photographed in available light — no flash, no studio. The camera made as unobtrusive as possible.',
    statement: 'I wanted the portraits to feel like conversations.',
    coverImage: '/images/photography/portraits-cover.jpg',
    images: [
      '/images/photography/portrait-01.jpg',
      '/images/photography/portrait-02.jpg',
      '/images/photography/portrait-03.jpg',
      '/images/photography/portrait-04.jpg',
    ],
    camera: 'Canon AE-1',
    lens: '50mm f/1.4',
    location: 'Kathmandu',
    aspectRatio: 'portrait',
  },
  {
    id: 'the-grey-hours',
    title: 'The Grey Hours',
    year: 2026,
    category: 'PHOTOGRAPHY',
    medium: 'Digital photography',
    description: 'Pre-dawn street photography. The city before the city wakes. Fog, street lights, and the particular loneliness of 4am.',
    statement: 'Cities reveal themselves before sunrise.',
    coverImage: '/images/photography/grey-hours-cover.jpg',
    images: [
      '/images/photography/grey-hours-01.jpg',
      '/images/photography/grey-hours-02.jpg',
    ],
    camera: 'Fujifilm X-T5',
    lens: '23mm f/2',
    location: 'Kathmandu',
    aspectRatio: 'landscape',
  },
  // ── Visual Art / Experimental ─────────────────────────────────
  {
    id: 'color-field-study',
    title: 'Color Field Study No. 7',
    year: 2026,
    category: 'VISUAL ART',
    medium: 'Mixed media on canvas',
    description: 'Large-format color study exploring chromatic relationships between earth tones and cooler greys. Informed by landscape but abstracted into pure color relationships.',
    statement: 'Color has temperature before it has name.',
    coverImage: '/images/visual-art/color-field-cover.jpg',
    images: [
      '/images/visual-art/color-field-01.jpg',
      '/images/visual-art/color-field-02.jpg',
    ],
    aspectRatio: 'landscape',
  },
  {
    id: 'memory-architecture',
    title: 'Memory Architecture',
    year: 2025,
    category: 'EXPERIMENTAL',
    medium: 'Photography, paint, cyanotype',
    description: 'An experimental series combining photographic prints with paint and cyanotype processes. Images layered on top of each other like sedimentary memory.',
    statement: 'Memory is not a photograph. It is a painting of a photograph.',
    coverImage: '/images/experimental/memory-arch-cover.jpg',
    images: [
      '/images/experimental/memory-arch-01.jpg',
      '/images/experimental/memory-arch-02.jpg',
      '/images/experimental/memory-arch-03.jpg',
    ],
    aspectRatio: 'portrait',
  },
]

export const categories = ['ALL', 'PAINTING', 'PHOTOGRAPHY', 'VISUAL ART', 'EXPERIMENTAL']

export function getArtworkById(id) {
  return artworks.find(a => a.id === id)
}

export function getArtworksByCategory(category) {
  if (category === 'ALL') return artworks
  return artworks.filter(a => a.category === category)
}
