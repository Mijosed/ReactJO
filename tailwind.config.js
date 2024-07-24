/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./views/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        olympic: ['"OlympicHeadline"', 'sans-serif'],
        olympicSans: ['"OlympicSans"', 'sans-serif'],
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    }
    },
  },
  plugins: [
    
  ],
}