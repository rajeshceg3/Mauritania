/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#EAE5D9', // Softer, more pastel
        dune: '#D4C5A9', // Muted ochre
        sky: '#CEDFEA', // Pale, muted blue
        indigo: '#5D6D7E', // Muted indigo
        violet: '#8E8F99', // Muted violet
        clay: '#B03A2E', // Muted clay
        text: '#2C2C2C', // Soft black
        white: '#FDFBF7', // Soft white
        shadow: '#2C3E50', // Keep shadow for contrast
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'breath': 'breath 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breath: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}
