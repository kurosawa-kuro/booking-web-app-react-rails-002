module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-orange': {
          'lightest': '#FFF8E7',
          'lighter': '#FFECD8',
          'light': '#FFDAB1',
          'DEFAULT': '#FFC482',
          'dark': '#FFB057',
          'darker': '#FF9C2D',
          'darkest': '#FF8910',
          'extra-dark': '#E77C0A',
          'extra-darker': '#D06F05',
          'extra-darkest': '#B76100',
        },
      },
    },
  },
  plugins: [],
};
