/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        interRegular: "Inter Regular",
        interMedium: "Inter Medium",
        interSemiBold: "Inter Semi Bold",
        interBold: "Inter Bold",
        interExtraBold: "Inter Extra Bold",
      },
      colors: {
        spacialPink: "#EE1C47",
        spacialBlue: "#09153D",
        spacialOrange: "#FF823A",
        spacialGray: "#676C7B",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
    },
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};