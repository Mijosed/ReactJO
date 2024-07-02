/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./views/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        olympic: ['"OlympicHeadline"', 'sans-serif'],
        olympicSans: ['"OlympicSans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}