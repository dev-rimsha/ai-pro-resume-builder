import type { Config } from "tailwindcss";

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
        primaryBlue: "#0072b1",
        secondaryBlue: "#27AAE1",
        primaryGreen: "#01b2ac",
        secondaryGreen: "#01b2ac90",
        primaryBlack: "#231F20",
        primaryGray: "#a3a3a3",
        secondaryGray: "#A7A7A7",
        primaryCran: "#00caa5",
        primarySlate: "#343434",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-in-up": {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "60%": { transform: "translateY(-10px)", opacity: "1" },
          "80%": { transform: "translateY(5px)" },
          "100%": { transform: "translateY(0)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },


      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
        "bounce-in-up": "bounce-in-up 0.8s ease-out forwards",
        rotate: "rotate 50s cubic-bezier(0.8, 0.2, 0.2, 0.8) infinite alternate",

      },
    },
  },
  plugins: [],
} satisfies Config;
