/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      'Robot': ['Roboto']
    },
    extend: {
      backgroundImage: {
        ahus: "url('/src/assets/ahus_cropped.jpg')",
      },
    },
  },
  plugins: [],
}