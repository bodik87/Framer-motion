/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myRed: "#F0466D",
        myGreen: "#05D7A0",
        myYellow: "#FFD264",
        myDark: "#043C4A",
      },
    },
  },
  plugins: [],
};
