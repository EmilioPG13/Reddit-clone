module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        reddit_orange: {
          DEFAULT: '#FF5700', // This is the Reddit orange color
        },
        reddit_dark: {
          DEFAULT: '#E2E2E2', // This is a light gray color
          brighter: '#f8f8f8', // This is a very light gray, almost white
          brightest: '#f2f2f2', // This is a very light gray, even closer to white
        },
        reddit_border: {
          DEFAULT: '#DFDFEE', // This is a light grayish-blue color
        },
        reddit_text: {
          DEFAULT: '#1B212C', // This is a very dark gray, almost black
          darker: '#525F74', // This is a dark gray color
          darkest: '#718096' // This is a medium-dark gray color
        },
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
