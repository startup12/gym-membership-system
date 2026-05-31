import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          neon:    "#C8F135",
          cyan:    "#00D4AA",
          dark:    "#09090B",
          surface: "#111115",
          border:  "#1F1F25",
          muted:   "#71717A",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        sans:    ["var(--font-geist-sans)", "sans-serif"],
      },
      boxShadow: {
        "neon-sm": "0 0 12px rgba(200, 241, 53, 0.25)",
        "neon-md": "0 0 32px rgba(200, 241, 53, 0.35)",
        "cyan-sm": "0 0 12px rgba(0, 212, 170, 0.25)",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease-out forwards",
        "fade-in":    "fadeIn 0.4s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;