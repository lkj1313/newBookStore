/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        wheat: "#F5DEB3", // wheat 색상 추가
      },
    },
  },
  plugins: [],
};
