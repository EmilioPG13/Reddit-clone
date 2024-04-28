module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        reddit_orange: {
          DEFAULT: '#FF5700',
        },
        reddit_light: {
          DEFAULT: '#E2E2E2',
          brighter: '#f8f8f8',
          brightest: '#f2f2f2',
        },
        reddit_border: {
          DEFAULT: '#DFDFEE',
        },
        reddit_text: {
          DEFAULT: '#3D4B65',
          darker: '#525F74',
          darkest: '#718096',
        },
        dark_reddit_light: {
          DEFAULT: '#4A5656',
          brighter: '#525F74',
          brightest: '#718B96',
        },
        dark_reddit_border: {
          DEFAULT: '#8E8E97',
        },
        dark_reddit_text: {
          DEFAULT: '#A9A9A9',
          darker: '#BEBEBE',
          darkest: '#B9B9B9',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
}