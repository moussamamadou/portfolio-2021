const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  experimental: {
    applyComplexClasses: true,
  },
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        body: ["Neue Machina", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
        },
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1496px",
          "3xl": "1752px",
        },
      },
    },
  },
};
