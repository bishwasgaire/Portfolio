// ─── Music Data ───────────────────────────────────────────────
// To add a new album: add a new object to musicProjects.
// Audio files go in /public/audio/music/[project-id]/

export const musicProjects = [
  
 
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
