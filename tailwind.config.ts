import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        parallax: 'url("../public/parallax.jpg")',
      },
      colors: {
        primary: "#415a77",
        secondary: "#778da9",
        dark: "#1b263b",
        background: "#e0e1dd",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
export default config;
