import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Midnight Luxury Design System
        midnight: {
          black: '#090B10',    // Primary page background (Jet Black)
          DEFAULT: '#151C2B',  // Cards, panels, surfaces (Deep Midnight Blue)
          surface: '#151C2B',
          card: '#182133',
          elevated: '#1D283E',
          border: 'rgba(119, 146, 181, 0.15)',
        },
        gold: {
          antique: '#C6A15B',  // Antique Gold (Name, highlights, key accents)
          DEFAULT: '#C6A15B',
          light: '#DEC186',
          muted: '#9E8045',
          subtle: 'rgba(198, 161, 91, 0.15)',
        },
        burgundy: {
          muted: '#8C3F4D',    // Muted Burgundy (Subtle red accents, lighting)
          DEFAULT: '#8C3F4D',
          dark: '#5C2832',
          subtle: 'rgba(140, 63, 77, 0.15)',
        },
        steel: {
          blue: '#7792B5',     // Steel Blue (Technical elements, links, details)
          DEFAULT: '#7792B5',
          muted: '#5A718F',
          subtle: 'rgba(119, 146, 181, 0.15)',
        },
        silver: {
          warm: '#D6D3CC',     // Warm Silver (Primary readable body text)
          DEFAULT: '#D6D3CC',
          bright: '#EBE8E1',
        },
        muted: {
          grey: '#858A96',     // Muted Grey (Secondary descriptions, metadata)
          DEFAULT: '#858A96',
          border: 'rgba(133, 138, 150, 0.2)',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'JetBrains Mono', 'SF Mono', 'Menlo', 'monospace'],
      },
      borderRadius: {
        'luxury': '2px',
        'card': '4px',
        'subtle': '2px',
      },
      letterSpacing: {
        'luxury': '0.2em',
        'wide-editorial': '0.08em',
      },
    },
  },
  plugins: [],
}

export default config
