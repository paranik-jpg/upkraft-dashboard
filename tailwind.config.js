/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#4D44B5',
        'light-bg': '#F9F9F9',
        'accent-blue': '#4099ff',
        'gauge-orange': '#FFB648',
        'gauge-red': '#F761A1',
      }
    },
  },
  plugins: [],
}