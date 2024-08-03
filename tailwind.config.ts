import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          50: '#e7f2ff',
          100: '#c5d4ee',
          200: '#a2b8dd',
          300: '#7f9bcd',
          400: '#5b7fbd',
          500: '#4265a4',
          600: '#324f80',
          700: '#23385d',
          800: '#12223b',
          900: '#010b1a'
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
