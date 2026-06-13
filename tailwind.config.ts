import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1B2744",
        gold: "#C9A97A",
        "gold-light": "#E8D5B0",
        stone: "#8B8FA0",
        cream: "#F8F6F2",
        "cream-dark": "#EDEAE3",
        "dark-bg": "#111827",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
