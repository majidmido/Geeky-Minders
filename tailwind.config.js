module.exports = {
 purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx", "./public/**/*.html"],
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

