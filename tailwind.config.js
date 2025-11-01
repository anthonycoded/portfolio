module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        'material-purple': '#040e7d',
        'material-blue': '#00e5ff',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      transitionProperty: {
        height: 'height',
      },
      screens: {
        landscape: { raw: '(max-height: 414px),(min-width:600px)' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
