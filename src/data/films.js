// ─── Films Data ───────────────────────────────────────────────
// To add a new film: add a new object to films.
// Videos go in /public/videos/films/[film-id]/

export const films = [
  {
    id: 'chhora',
    title: 'BISHWAS — CHHORA',
    year: 2024,
    category: 'MUSIC VIDEO',
    duration: '03:45',
    role: 'Artist · Direction · Performance',
    tagline: 'A Tale Of A Young Boy · Prod. Sleepless Beats',
    synopsis: 'A raw, atmospheric audiovisual journey chronicling the identity, struggle, and poetic introspection of a young boy. Written and performed by Bishwas Gaire, with production by Sleepless Beats.',
    thumbnail: 'https://i.ytimg.com/vi/OxeHJRXqIV8/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=OxeHJRXqIV8',
    youtubeId: 'OxeHJRXqIV8',
    posterUrl: 'https://i.ytimg.com/vi/OxeHJRXqIV8/hqdefault.jpg',
    cinematography: {
      description: 'Intimate visual storytelling balancing raw personal reflection and evocative ambient cityscapes.',
      framing: 'Dynamic portraiture and evocative wide frames mirroring solitude and youth.',
      movement: 'Restrained, organic camera movement flowing naturally with the melodic cadence.',
    },
    camera: {
      body: 'Digital Cinema',
      lens: 'Prime Optics',
      format: '4K Ultra HD',
      aspectRatio: '16:9',
    },
    color: {
      description: 'Atmospheric cinematic grade with warm nocturnal amber tones and deep shadows.',
      palette: ['#c99a5e', '#7b5736', '#2b231d', '#151210', '#e3c69c'],
    },
    sound: {
      music: 'CHHORA — Bishwas Gaire (Prod. Sleepless Beats)',
      ambience: 'Urban room ambience and atmospheric textural resonance.',
      design: 'Intimate vocal mixing layered over evocative melodic production.',
    },
    btsImages: [],
  },
  {
    id: 'drohi-premjaal',
    title: 'BISHWAS — DROHI PREMJAAL "द्रोही प्रेमजाल"',
    year: 2024,
    category: 'MUSIC VIDEO',
    duration: '03:18',
    role: 'Artist · Direction · Performance',
    tagline: 'A Treacherous Love Affair · Prod. LEXNOUR Beats',
    synopsis: 'An evocative cinematic composition exploring betrayal, vulnerability, and the complex web of passionate yet treacherous love. Written and performed by Bishwas Gaire with production by LEXNOUR Beats.',
    thumbnail: 'https://i.ytimg.com/vi/F6mDg7qHgeQ/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=F6mDg7qHgeQ',
    youtubeId: 'F6mDg7qHgeQ',
    posterUrl: 'https://i.ytimg.com/vi/F6mDg7qHgeQ/hqdefault.jpg',
    cinematography: {
      description: 'Moody, dramatic visual aesthetics accentuating psychological tension and emotional conflict.',
      framing: 'Tight cinematic close-ups juxtaposed with shadowy spatial silhouettes.',
      movement: 'Expressive camera tempo in harmony with hard-hitting beats and narrative flow.',
    },
    camera: {
      body: 'Digital Cinema',
      lens: 'Anamorphic & Prime Optics',
      format: '4K Ultra HD',
      aspectRatio: '16:9',
    },
    color: {
      description: 'High-contrast noir styling with crimson accents, cool shadows, and deep blacks.',
      palette: ['#cf222e', '#8a1f26', '#3b1216', '#14080a', '#f5d0c5'],
    },
    sound: {
      music: 'DROHI PREMJAAL — Bishwas Gaire (Prod. LEXNOUR Beats)',
      ambience: 'Tense atmospheric room tones and heavy low-end pulses.',
      design: 'Crisp vocal delivery over hard-hitting international beat production.',
    },
    btsImages: [],
  },
  {
    id: 'the-last-light',
    title: 'The Last Light',
    year: 2026,
    category: 'SHORT FILM',
    duration: '08:42',
    role: 'Director · Cinematography · Editor',
    tagline: 'A quiet visual study of isolation, memory, and the changing light of a rural landscape.',
    synopsis: 'An old man tends to his fields as evening approaches. No dialogue. No music. Only the sounds of wind, insects, and the creak of old wood. A study in the relationship between a person and a landscape — and what happens when one of them begins to disappear.',
    thumbnail: '/images/films/the-last-light-thumb.jpg',
    videoUrl: '/videos/films/the-last-light/film.mp4',
    posterUrl: '/images/films/the-last-light-poster.jpg',
    cinematography: {
      description: 'Shot entirely in available light. No artificial lighting of any kind. We followed the sun — the only source of illumination. This forced us to be completely at the mercy of natural time.',
      framing: 'Predominantly static frames. Camera moves only when the subject moves. We waited for the light to come to us, not the other way around.',
      movement: 'Almost none. The stillness of the camera mirrors the stillness of the landscape.',
    },
    camera: {
      body: 'Sony FX3',
      lens: 'Zeiss 35mm T2.1 CP.3',
      format: 'S-Log3, 4K 24fps',
      aspectRatio: '2.39:1 Cinemascope',
    },
    color: {
      description: 'Deliberately desaturated. Earth tones pushed toward grey. The only saturation preserved is in the warm highlights of sunset. The visual palette echoes the emotional state — a world losing its color as the light fades.',
      palette: ['#c8b89a', '#8a7060', '#4a4038', '#1a1410', '#d4a058'],
    },
    sound: {
      music: 'No score. The film is intentionally without music.',
      ambience: 'Wind through tall grass. Distant cattle. The creak of wooden structures. Birdsong tapering as the sun sets.',
      design: 'All sound recorded on location. No artificial foley.',
    },
    btsImages: [
      '/images/films/the-last-light-bts-01.jpg',
      '/images/films/the-last-light-bts-02.jpg',
      '/images/films/the-last-light-bts-03.jpg',
      '/images/films/the-last-light-bts-04.jpg',
      '/images/films/the-last-light-bts-05.jpg',
    ],
  },
  {
    id: 'rainfall',
    title: 'Rainfall',
    year: 2025,
    category: 'MUSIC VIDEO',
    duration: '04:18',
    role: 'Director · Cinematographer',
    tagline: 'A music video for an ambient track about the monsoon season.',
    synopsis: 'Shot over three days during peak monsoon in the Kathmandu Valley. The brief was to visualize the feeling of rain rather than rain itself. The film shows surfaces, reflections, the behavior of water on different materials.',
    thumbnail: '/images/films/rainfall-thumb.jpg',
    videoUrl: '/videos/films/rainfall/film.mp4',
    posterUrl: '/images/films/rainfall-poster.jpg',
    cinematography: {
      description: 'Macro and extreme close-up work. We wanted to defamiliarize rain — to make something ordinary become strange and beautiful.',
      framing: 'Extreme close-ups. Details. Abstractions. Surfaces rather than scenes.',
      movement: 'Slow motion throughout. Shot at 120fps, played back at 24.',
    },
    camera: {
      body: 'Sony FX6',
      lens: 'Sony 90mm Macro',
      format: '4K 120fps slow motion',
      aspectRatio: '16:9',
    },
    color: {
      description: 'Cooler than reality. Blues and greens shifted toward teal. A deliberately wet palette.',
      palette: ['#6a8a9a', '#3a5060', '#c8d8e0', '#2a3840', '#a8c0c8'],
    },
    sound: {
      music: 'Somewhere Between — Bishwas Gaire',
      ambience: 'Rain. Water. Drips. Wind.',
      design: 'Music and ambience layered. Rain sounds mixed into the score.',
    },
    btsImages: [
      '/images/films/rainfall-bts-01.jpg',
      '/images/films/rainfall-bts-02.jpg',
      '/images/films/rainfall-bts-03.jpg',
    ],
  },
  {
    id: 'the-space-between',
    title: 'The Space Between',
    year: 2025,
    category: 'DOCUMENTARY',
    duration: '22:15',
    role: 'Director · Editor · Sound',
    tagline: 'A documentary portrait of a Newari craftsman and his relationship with a dying tradition.',
    synopsis: 'Ambar Shrestha has been making traditional Newari wood carvings for forty years. His sons have other plans. This film is an intimate portrait of a man and a practice — and the complicated feelings around what continues and what ends.',
    thumbnail: '/images/films/space-between-thumb.jpg',
    videoUrl: '/videos/films/space-between/film.mp4',
    posterUrl: '/images/films/space-between-poster.jpg',
    cinematography: {
      description: 'Observational documentary style. The camera is present but unobtrusive. We spent four days with the subject before filming began.',
      framing: 'Close observation of hands and tools. The work as much a subject as the person doing the work.',
      movement: 'Hand-held, but restrained. We avoided zoom.',
    },
    camera: {
      body: 'Sony FX3',
      lens: '35mm & 85mm',
      format: '4K 24fps',
      aspectRatio: '16:9',
    },
    color: {
      description: 'Warm tones. Wood, dust, light through small windows. The color of old things.',
      palette: ['#c8a870', '#8a6840', '#4a3820', '#d8b888', '#2a1810'],
    },
    sound: {
      music: 'Original piano score, minimal and sparse.',
      ambience: 'Workshop sounds. Chisels. Grain on wood. The city outside.',
      design: 'The sound of the craft is the sound of the documentary.',
    },
    btsImages: [
      '/images/films/space-between-bts-01.jpg',
      '/images/films/space-between-bts-02.jpg',
      '/images/films/space-between-bts-03.jpg',
      '/images/films/space-between-bts-04.jpg',
    ],
  },
  {
    id: 'negative-space',
    title: 'Negative Space',
    year: 2024,
    category: 'EXPERIMENTAL',
    duration: '06:30',
    role: 'Director · Camera · Edit · Sound',
    tagline: 'An experimental study of empty rooms.',
    synopsis: 'A film made in an abandoned school. No people. No explanations. Only rooms that once held something and now hold only light and dust.',
    thumbnail: '/images/films/negative-space-thumb.jpg',
    videoUrl: '/videos/films/negative-space/film.mp4',
    posterUrl: '/images/films/negative-space-poster.jpg',
    cinematography: {
      description: 'Architectural cinematography. The building as the subject. We photographed each room systematically — north wall, east wall, ceiling, floor.',
      framing: 'Rigidly symmetrical. The formality of the framing contrasts with the decay of the space.',
      movement: 'Extremely slow dolly moves. Almost imperceptible.',
    },
    camera: {
      body: 'BMPCC 6K',
      lens: 'Laowa 12mm Zero-D',
      format: 'BRAW 6K',
      aspectRatio: '1.85:1',
    },
    color: {
      description: 'Desaturated near-monochrome with occasional warm accents where light enters through broken windows.',
      palette: ['#d0c8c0', '#888078', '#404038', '#181810', '#c8a060'],
    },
    sound: {
      music: 'Sine tones and low-frequency drones.',
      ambience: 'The building itself. Wind through broken windows. Pigeons.',
      design: 'The architecture of the sound matches the architecture of the image.',
    },
    btsImages: [
      '/images/films/negative-space-bts-01.jpg',
      '/images/films/negative-space-bts-02.jpg',
    ],
  },
]

export const filmCategories = ['ALL', 'SHORT FILM', 'MUSIC VIDEO', 'DOCUMENTARY', 'EXPERIMENTAL']

export function getFilmById(id) {
  return films.find(f => f.id === id)
}

export function getFilmsByCategory(category) {
  if (category === 'ALL') return films
  return films.filter(f => f.category === category)
}
