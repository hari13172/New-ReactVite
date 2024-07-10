// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      // You can also configure other font families here
    },
  },
  plugins: [],
};
