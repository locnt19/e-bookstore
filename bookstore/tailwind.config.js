module.exports = {
  purge: { enabled: true, content: ["./src/**/*.{html,ts}"] },
  important: true,
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
        lightSalmon: "#f1c7c5",
        lightWhite: "#faf9fd",
        lightPink: "#ffe9e9"
      },
      boxShadow: {
        light:
          "0 20px 25px -5px rgba(0, 0, 0, 0.01), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      },
      letterSpacing: {
        widest: ".15em"
      },
      gridTemplateColumns: {
        "1fr--auto": "1fr auto",
        "auto--1fr": "auto 1fr",
        "auto--1fr--auto": "auto 1fr auto",
        "2/3--auto-1fr": "calc(100% * 2 / 3) auto 1fr",
        "2/3--1/3": "calc(100% * 2 / 3) calc(100% * 1 / 3)"
      },
      minWidth: {
        "64": "16rem"
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%"
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10"
      },
      lineHeight: {
        1: "1"
      }
    }
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
      padding: ["hover", "focus"],
      transform: ["hover", "focus"],
      lineClamp: ["hover", "responsive"]
    }
  },
  plugins: [require("@tailwindcss/line-clamp")]
};
