/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fade: {
        "transition": "opacity 500ms ease-in-out"
      }
    },
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
  },
  plugins: [],
}