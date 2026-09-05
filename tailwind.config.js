/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dynamic theme palette backed by CSS variables
        'void': 'var(--color-void)',
        'void-light': 'var(--color-void-light)',
        'charcoal': 'var(--color-charcoal)',
        'ash': 'var(--color-ash)',
        'smoke': 'var(--color-smoke)',
        'stone': 'var(--color-stone)',
        'parchment': 'var(--color-parchment)',
        'cream': 'var(--color-cream)',
        'offwhite': 'var(--color-offwhite)',
        'warm-white': 'var(--color-warm-white)',
        // Accent tones
        'earth': 'var(--color-earth)',
        'rust': 'var(--color-rust)',
        'deep-red': 'var(--color-deep-red)',
        'muted-blue': 'var(--color-muted-blue)',
        'sage': 'var(--color-sage)',
        'umber': 'var(--color-umber)',
      },
      fontFamily: {
        'changa': ['"Changa One"', 'cursive', 'sans-serif'],
        'luckiest': ['"Luckiest Guy"', 'cursive', 'sans-serif'],
        'serif': ['Cormorant Garamond', 'Cormorant', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'hero': ['clamp(2rem, 5vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'title': ['clamp(1.5rem, 3vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'scene': '120px',
        'section': '80px',
      },
      animation: {
        'grain': 'grain 0.5s steps(1) infinite',
        'slow-fade': 'slow-fade 2s ease-in-out forwards',
        'drift': 'drift 20s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
      },
      keyframes: {
        'grain': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        'slow-fade': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'drift': {
          '0%, 100%': { transform: 'scale(1.05) translateX(0px) translateY(0px)' },
          '25%': { transform: 'scale(1.08) translateX(-10px) translateY(-5px)' },
          '50%': { transform: 'scale(1.06) translateX(5px) translateY(-10px)' },
          '75%': { transform: 'scale(1.07) translateX(-5px) translateY(5px)' },
        },
        'breathe': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'cinema': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'slow-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '3000': '3000ms',
      },
      aspectRatio: {
        'cinema': '21 / 9',
        'film': '16 / 9',
        'portrait': '3 / 4',
        'square': '1 / 1',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
