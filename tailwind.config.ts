import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1C1C1E",
        gold: "#C4A265",
        "gold-light": "#D4B87A",
        stone: "#8B7D72",
        cream: "#F9F7F3",
        "cream-dark": "#EDE9E3",
        "dark-bg": "#111114",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
