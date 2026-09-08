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
          deep: "#075985", // sky-800 — accent that stays readable on light surfaces
        },
        // Off-white panel: warm, low-glare, sits with the ink palette rather than
        // fighting it. Not pure #fff so it doesn't blow out against the dark page.
        paper: {
          DEFAULT: "#f4f6f8",
          line: "#d9e0e6",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
