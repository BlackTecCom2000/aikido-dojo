/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        kanji: ['"Noto Serif JP"', 'serif'],
      },
      colors: {
        washi: '#F5EFE6',
        sumi: '#2C221E',
        inkDark: '#0B0F19',
        silkLight: '#FFFDF9',
        bamboo: '#D4C3A3',
        bambooHover: '#C5AF89',
        vermillion: '#C83E2B',
        kigold: '#E5A93C',
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.2s ease-out forwards',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
