/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "960px",
        lg: "1440px",
      },
      colors: {
        // Off-black: near black, but with a little warmth so it doesn't look flat.
        ink: {
          DEFAULT: "#111418",
          soft: "#181c22",
          line: "#2a2f37",
        },
        accent: {
          DEFAULT: "#38bdf8", // sky-400
          hover: "#7dd3fc", // sky-300
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
