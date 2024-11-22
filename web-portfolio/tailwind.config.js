/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
    theme: {
      colors: {
        text: '#FFFDFF',
        primary: '#1A1A1D',
        secondary: '#3B1C32',
        card: '#3b1c32a0',
        cardHover: '#3b1c32e9',
        third: '#6A1E55',
        aksen: '#A64D79',
      },
    extend: {
      fontFamily: {
        ovo: ['Ovo', 'serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

