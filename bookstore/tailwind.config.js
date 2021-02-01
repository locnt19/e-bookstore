module.exports = {
  purge: ["./src/**/*.{html,ts}"],
  darkMode: false,
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem"
      },
      colors: {
        salmon: "#f65d4e",
        lightWhite: "#faf9fd",
        lightPink: "#ffe9e9"
      },
      boxShadow: {
        light:
          "0 20px 25px -5px rgba(0, 0, 0, 0.01), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      },
      letterSpacing: {
        widest: ".15em"
      }
    }
  },
  variants: {
    extend: { fontWeight: ["hover", "focus"] }
  },
  plugins: []
};
