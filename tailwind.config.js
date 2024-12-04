/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // IT AFFECTS THE HORIZONTAL PADDING  FOR THE SCREEN SIZES
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "1024px",
    // },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
      },
    },
    fontFamily: {
      dmSans: ["DM Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/img/BG1-only.jpg')",
      },
      colors: {
        primary: "#fcd42f",
      },
    },
  },
  plugins: [],
};
