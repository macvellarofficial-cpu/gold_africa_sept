/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF4',
          100: '#FBF4E4',
          200: '#F5EDD8',
          300: '#E8C060',
          400: '#DFB845',
          500: '#C59B27',
          600: '#C9963A',
          700: '#B38A1F',
          800: '#8A6A15',
          900: '#5C440A',
        },
        dark: {
          950: '#0E0C09',
          900: '#15120E',
          850: '#1A1612',
          800: '#1F1A14',
          750: '#25201A',
          700: '#29221B',
          600: '#3A3229',
        },
        parchment: {
          50: '#FCFAF7',
          100: '#FAF7F2',
          200: '#F3EDE2',
          300: '#E8DFC8',
          400: '#D9CBAB',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cinzel', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Inter"', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(197, 155, 39, 0.25)',
        'gold-glow-lg': '0 0 45px rgba(197, 155, 39, 0.4)',
        'dark-card': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
