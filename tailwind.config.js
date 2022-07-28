/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#289BDE",
        darkOne: "#1d1d1d",
        darkTwo: "#4A4A4A",
        darkThree: "#777",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
