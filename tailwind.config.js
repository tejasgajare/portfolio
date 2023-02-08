/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelyellow: '#ffe1c6',
        pastelpink: '#fef1f2',
        greenish: "#e5f2e5",
        watermelon: '#F77375',
        darkgray: '#797979',
        lightgray: '#AEAEAE',
        blackish: '#444444',
      }
    },
  },  
  plugins: [],
}
