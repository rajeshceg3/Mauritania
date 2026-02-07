/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#E6DEC7',
        dune: '#C2B280',
        sky: '#85C1E9',
        shadow: '#2C3E50',
        text: '#333333',
        clay: '#C0392B',
        white: '#Fdfbf7', // Soft white
      },
      fontFamily: {
        serif: ['Times New Roman', 'serif'],
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
