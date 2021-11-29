module.exports = {
 purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme:{
    extend: {
      spacing: {
        '2/3': '66.666667%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

};

