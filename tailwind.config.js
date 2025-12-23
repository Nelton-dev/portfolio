/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#0a0a0b',
          cyan: '#00f2ff',
          purple: '#bc13fe',
        }
      }
    },
  },
  plugins: [],
}