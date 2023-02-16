/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#101010',
        gray: '#515151',
        yellow: '#FFD900',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
