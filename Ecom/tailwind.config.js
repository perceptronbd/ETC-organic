/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f8f8",
        foreground: "#ffffff",
        textColor: { DEFAULT: "#111111", light: "#808080" },
        accent: {
          primary: "#A259FF",
          secondary: "#0C904D",
          tertiary: "#239F95",
        },
      },
    },
  },
  plugins: [],
};
