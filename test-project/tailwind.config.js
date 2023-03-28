/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [ 
  require('postcss-import'),
  require('tailwindcss'),
  require('postcss-custom-properties'),
  require('autoprefixer'),],
}