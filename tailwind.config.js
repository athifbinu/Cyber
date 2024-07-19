/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1234px",
      Tv: "1536px",
    },
    extend: {
      colors: {
        home: "#6C55FB",
        herobtn: "#43C4E0",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      backgroundImage: {
        "about-background": "url('./src/assets/image/about-dot-vector.png')",
        "service-bg": "url('./src/assets/image/bagr1.png')",
      },
      boxShadow: {
        1: "0px 4px 30px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
