/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": { min: "1366px" },
      },
      colors: {
        background: "#F8F8F8",
        foreground: "#FFFFFF",
        textColor: { DEFAULT: "#303030", light: "#9a9a9a" },
        accent: {
          primary: "#A259FF",
          secondary: "#0C904D",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
