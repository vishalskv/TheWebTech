module.exports = {
  darkMode: "class", // or 'media' if you want system preference
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
      colors: {
        primary: "rgb(253,78,21)",
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
