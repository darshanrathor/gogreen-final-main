

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        serif: ["Source Sans Pro", ...defaultTheme.fontFamily.serif],
        playfair : ['Playfair', "serif"],
      },
    },
  },
  plugins: [],
}