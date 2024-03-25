import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "verde-loro": "#B8CF37",
        "verde-loro-50": "#b8cf378c",
        "verde-bg": "#b8cf3726",
        "verde-bg2": "#d7e6b282",
        "verde-bg3": "#b6cf3726",
        "verde-linea": "#16A76E",
        "verde-linea-15": "#16A76E26",
        "azul-text": "#074546",
        "about-bg": "#ffd36180",
      },
    },
  },
  plugins: [],
};
export default config;
