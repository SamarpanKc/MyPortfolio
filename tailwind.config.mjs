import { Poppins, Tangerine } from "next/font/google";


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        silver: "#C0C5C1",
        oxfordBlueDark: "#0E1428",
        oxfordBlue: "#011638",
        tangerine: "#F18805",
        carmine: "#96031A",
      },
      fontFamily:{
        "poppins" : ['Poppins', 'serif'],
        "macondo" : ['Macondo', 'serif'],
        "noto" : ['Noto Sans', 'serif'],
        "notodevanagari" : ['Noto Sans Devanagari', 'serif'],
      }
    },
  },
  plugins: [],
};
