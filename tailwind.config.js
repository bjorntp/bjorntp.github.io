/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        wheat: '#efd6ac',
        richblack: '#04151f',
        morkkricka: '#183a37',
        mahogny: '#c44900',
        djupplommon: '#432534',
        blush: '#fdf0e6',
        wine: '#5f2102',
        caramel: '#aa7f5c',
        midnight: '#243540',
      },
      fontFamily: {
        goudy: ['"Sorts Mill Goudy"', 'serif'],
        playfairdisplay: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
