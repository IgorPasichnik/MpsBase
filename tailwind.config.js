module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        customUpShodow: "0 -10px 15px -3px rgba(0, 0, 0, 0.2)",
      },
      screens: {
        custom2xl: "1920px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        customOrange: "#E07E0A",
        customHoverOrange: "#c37314",
        customBlack: "#2c2926",
        customGray4: "#24292f",
        customGray1: "#373d44",
        customGray3: "#363c43",
        customGray2: "#33383e",
        customGray: "#292929",
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
