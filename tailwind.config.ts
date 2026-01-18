import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F3344",   // azul petróleo (logo)
        secondary: "#C8A35A", // dourado fosco
        dark: "#0B0F14",      // preto elegante
        light: "#F5F3EF",     // off-white sofisticado
        muted: "#E6E4DF",     // véu translúcido
      },
    },
  },
  plugins: [],
};

export default config;