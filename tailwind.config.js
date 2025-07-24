import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "3_5xl": ["45px", "55px"],
      "4xl": ["48px", "58px"],
      "5xl": ["60px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        calsans: ["Cal Sans", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        secondary: {
          DEFAULT: colors.neutral[200],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[500],
          dark: colors.neutral[800],
          darkHover: colors.neutral[900],
        },
        background: {
          main: "#FFEDE8",
          sub: "#E7562E",
          card: "#FADDD5",
        },
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        pro: "391px",
        se: "376px",
      },
    },
  },
  plugins: [],
};
