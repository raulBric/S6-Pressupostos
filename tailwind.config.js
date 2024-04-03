/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 35px 60px -5px rgba(0, 0, 0, .15)',
      }
    },
  },
  plugins: [],
}
