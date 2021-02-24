module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "1/3": "33.33333%",
      },
    },
    colors: {
      black: "#000000",
      navy: "#14213d",
      yellow: "#fca311",
      gray: "#757575",
      white: "#ffffff",
    },
    fontFamily: {
      display: ["Volkhov", "serif"],
      body: ["Open Sans", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
