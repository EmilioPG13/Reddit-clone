module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        reddit_dark: {
          DEFAULT: '#030303',
          brighter: '#1a1a1a',
          brightest: '#272728',
        },
        reddit_border: {
          DEFAULT: '#343536',
        }
      },
      fontFamily: {
        'verdana': ['Verdana', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
