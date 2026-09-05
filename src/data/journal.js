// ─── Journal Data ─────────────────────────────────────────────
// To add a new entry: add a new object to journalEntries.
// The journal is a visual diary — entries can contain
// images, audio snippets, text, and film stills.

export const journalEntries = [
  {
    id: 'rain-recording-01',
    date: '03.09.26',
    title: 'Recording rain',
    text: 'Spent the afternoon recording rain against the window. There is something in the rhythm of it — irregular but patterned. I recorded about forty minutes. I will use two.',
    images: [
      '/images/journal/rain-recording-01.jpg',
      '/images/journal/rain-recording-02.jpg',
    ],
    audioSnippet: '/audio/ambient/rain-window.mp3',
    audioLabel: 'Field recording — window, 3:42pm',
    tags: ['sound', 'field recording', 'rain'],
  },
  {
    id: 'monsoon-palette',
    date: '28.08.26',
    title: 'Monsoon palette',
    text: 'Mixed colors today trying to find the exact grey-green of clouds before a monsoon storm. I could not find it. I made sixteen attempts. I am keeping all sixteen.',
    images: [
      '/images/journal/monsoon-palette-01.jpg',
      '/images/journal/monsoon-palette-02.jpg',
    ],
    tags: ['painting', 'color', 'process'],
  },
  {
    id: 'location-scout-hills',
    date: '15.08.26',
    title: 'Location scout, eastern hills',
    text: 'Drove three hours east into the hills looking for the landscape I have been seeing in my head for months. Found it around noon — a clearing between pine trees with a view of the valley below. Photographed it every hour from noon to sunset.',
    images: [
      '/images/journal/hills-scout-01.jpg',
      '/images/journal/hills-scout-02.jpg',
      '/images/journal/hills-scout-03.jpg',
    ],
    tags: ['film', 'location', 'photography'],
  },
  {
    id: 'studio-light-experiment',
    date: '04.08.26',
    title: 'Light in the studio at 7am',
    text: 'The morning light comes through the east window at a specific angle for about twenty minutes. I have been trying to catch it for two weeks. Today I succeeded. The light does something to the canvases that I cannot replicate artificially.',
    images: [
      '/images/journal/studio-light-01.jpg',
    ],
    tags: ['studio', 'light', 'painting'],
  },
  {
    id: 'nocturne-composition',
    date: '22.07.26',
    title: 'The fifth nocturne',
    text: 'Finished the fifth nocturne at 3am. I have been working on it for three weeks. It is six minutes long and there are only twelve distinct notes in the whole thing. I am not sure if that is a success or a failure.',
    images: [
      '/images/journal/nocturne-notes-01.jpg',
    ],
    tags: ['music', 'composition', 'process'],
  },
  {
    id: 'negative-space-scout',
    date: '10.07.26',
    title: 'The abandoned school',
    text: 'Found the location for Negative Space — an old school on the edge of town. Closed for twelve years. Every room is intact but empty. The chalk marks are still on the blackboards.',
    images: [
      '/images/journal/school-01.jpg',
      '/images/journal/school-02.jpg',
    ],
    tags: ['film', 'location', 'experimental'],
  },
  {
    id: 'portrait-session-notes',
    date: '28.06.26',
    title: 'On portrait photography',
    text: 'I have been thinking about what a portrait is. It is not a likeness. A photograph is a likeness. A portrait is something else — a negotiation between the person and the camera. The photograph is what happens in the space between them.',
    images: [
      '/images/journal/portrait-session-01.jpg',
    ],
    tags: ['photography', 'portrait', 'reflection'],
  },
  {
    id: 'watercolor-process',
    date: '12.06.26',
    title: 'On watercolor',
    text: 'Watercolor is the most honest medium. You cannot lie with it. The pigment does what it wants. Your job is to understand what it wants and then make it want what you want. This takes years.',
    images: [
      '/images/journal/watercolor-process-01.jpg',
      '/images/journal/watercolor-process-02.jpg',
    ],
    tags: ['painting', 'watercolor', 'process'],
  },
]

export function getJournalById(id) {
  return journalEntries.find(j => j.id === id)
}
