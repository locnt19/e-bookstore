module.exports = {
  purge: ["./src/**/*.{html,ts}"],
  darkMode: false,
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem"
      }
    }
  },
  variants: {
    extend: { fontWeight: ["hover", "focus"] }
  },
  plugins: []
};
