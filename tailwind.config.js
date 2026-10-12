/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Single breakpoint from the design handoff: mobile < 760px, desktop >= 760px.
    screens: {
      md: '760px',
    },
    extend: {
      colors: {
        bg: '#efede8',
        ink: '#141412',
        'ink-2': '#4f4c46',
        muted: '#5f5c55',
        'muted-2': '#77746c',
        'muted-3': '#a19d93',
        line: '#d3d0c8',
        'grid-dash': '#cfcbc2',
        'bar-idle': '#dcd8cf',
        'photo-bg': '#d8d4ca',
        card: '#ffffff',
        accent: 'oklch(0.58 0.2 32)',
        'accent-on-dark': 'oklch(0.72 0.17 32)',
        'dark-1': '#efede8',
        'dark-2': '#d6d3cb',
        'dark-3': '#b7b4ac',
        'dark-4': '#a9a69e',
      },
      fontFamily: {
        // Big Shoulders at opsz 72 == the former "Big Shoulders Display" cut.
        display: [['var(--font-display)', 'sans-serif'], { fontVariationSettings: '"opsz" 72' }],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      spacing: {
        // Horizontal page padding used throughout the design.
        'page-x': 'clamp(18px,3vw,36px)',
      },
      keyframes: {
        mq: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'mq 30s linear infinite reverse',
      },
    },
  },
  plugins: [],
}
