// ─── Music Data ───────────────────────────────────────────────
// To add a new album: add a new object to musicProjects.
// Audio files go in /public/audio/music/[project-id]/

export const musicProjects = [
  {
    id: 'somewhere-between',
    title: 'Somewhere Between',
    year: 2026,
    genre: 'Ambient · Experimental · Instrumental',
    artwork: '/images/music/somewhere-between.jpg',
    description: 'A record about the spaces between things. Between sleep and waking. Between here and there. Between what you meant to say and what came out. Recorded over three months in a small room with windows that faced a courtyard.',
    statement: 'These are not songs. They are atmospheres.',
    tracks: [
      { id: 'sb-01', number: 1, title: 'Opening', audioUrl: '/audio/music/somewhere-between/01-opening.mp3', duration: '4:12' },
      { id: 'sb-02', number: 2, title: 'Rain', audioUrl: '/audio/music/somewhere-between/02-rain.mp3', duration: '6:38' },
      { id: 'sb-03', number: 3, title: 'Somewhere Between', audioUrl: '/audio/music/somewhere-between/03-somewhere-between.mp3', duration: '8:04' },
      { id: 'sb-04', number: 4, title: 'Memory', audioUrl: '/audio/music/somewhere-between/04-memory.mp3', duration: '5:22' },
      { id: 'sb-05', number: 5, title: 'Dawn', audioUrl: '/audio/music/somewhere-between/05-dawn.mp3', duration: '7:15' },
    ],
  },
  {
    id: 'field-recordings-vol-1',
    title: 'Field Recordings Vol. I',
    year: 2025,
    genre: 'Field Recording · Concrete · Documentary',
    artwork: '/images/music/field-recordings.jpg',
    description: 'A collection of sounds gathered across Nepal over fourteen months. Rain against zinc roofing. Market sounds. Temple bells recorded from three hundred meters away. River ambience before a storm. Silence.',
    statement: 'The world is already composing.',
    tracks: [
      { id: 'fr-01', number: 1, title: 'Monsoon, Kathmandu', audioUrl: '/audio/music/field-recordings/01-monsoon.mp3', duration: '3:48' },
      { id: 'fr-02', number: 2, title: 'Market at Asan', audioUrl: '/audio/music/field-recordings/02-asan.mp3', duration: '5:12' },
      { id: 'fr-03', number: 3, title: 'Bells, Pashupatinath', audioUrl: '/audio/music/field-recordings/03-bells.mp3', duration: '4:30' },
      { id: 'fr-04', number: 4, title: 'Before the Storm', audioUrl: '/audio/music/field-recordings/04-storm.mp3', duration: '6:20' },
      { id: 'fr-05', number: 5, title: 'Trishuli River', audioUrl: '/audio/music/field-recordings/05-river.mp3', duration: '9:04' },
    ],
  },
  {
    id: 'nocturnes',
    title: 'Nocturnes',
    year: 2024,
    genre: 'Piano · Solo · Minimal',
    artwork: '/images/music/nocturnes.jpg',
    description: 'Late-night piano pieces. Written between midnight and four in the morning. No reverb. No processing. Just the instrument and the room.',
    statement: 'There is a particular quality of sound at three in the morning.',
    tracks: [
      { id: 'nc-01', number: 1, title: 'I.', audioUrl: '/audio/music/nocturnes/01.mp3', duration: '3:15' },
      { id: 'nc-02', number: 2, title: 'II.', audioUrl: '/audio/music/nocturnes/02.mp3', duration: '4:45' },
      { id: 'nc-03', number: 3, title: 'III.', audioUrl: '/audio/music/nocturnes/03.mp3', duration: '5:30' },
      { id: 'nc-04', number: 4, title: 'IV.', audioUrl: '/audio/music/nocturnes/04.mp3', duration: '2:58' },
      { id: 'nc-05', number: 5, title: 'V.', audioUrl: '/audio/music/nocturnes/05.mp3', duration: '6:22' },
    ],
  },
]

export function getMusicById(id) {
  return musicProjects.find(m => m.id === id)
}
