module.exports = {
 purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
 enabled: process.env.NODE_ENV === "production",
  darkMode: false, // or 'media' or 'class'
  theme:{

    extend: {
      spacing: {
        '2/3': '66.666667%',
      },
    },
  },

  variants:{

    extend: {},
  },
  plugins: [],

};

