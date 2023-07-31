/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F8F8F8",
        foreground: "#FFFFFF",
        textColor: "#303030",
        accent: {
          primary: "#A259FF",
          secondary: "#0C904D",
        },
      },
    },
  },
  plugins: [],
};
