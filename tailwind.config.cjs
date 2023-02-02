/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ["Life Savers", "Arial"],
      body: ["Londrina Solid", "cursive"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#4c5a58",
      secondary: "#e29c3b",
    }),
    extend: {},
  },
  plugins: [],
};
