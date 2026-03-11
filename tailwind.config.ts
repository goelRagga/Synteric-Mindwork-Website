import type { Config } from "tailwindcss";
import { theme } from "./src/config/theme";

const { colors: c } = theme;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm)", "sans-serif"],
      },
      colors: {
        magenta: {
          DEFAULT: c.accent,
          light: c.accentLight,
          dim: "rgba(201,46,142,0.15)",
        },
        brand: {
          black: c.bgBase,
          surface: c.bgSurface,
          card: "rgba(255,255,255,0.03)",
          border: "rgba(255,255,255,0.07)",
          muted: c.fgMuted,
          white: c.fgPrimary,
        },
      },
      animation: {
        "drift-1": "drift1 12s ease-in-out infinite alternate",
        "drift-2": "drift2 14s ease-in-out infinite alternate",
        "drift-3": "drift3 10s ease-in-out infinite alternate",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "scroll-line": "scrollLine 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        drift1: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "100%": { transform: "translate(40px,30px) scale(1.1)" },
        },
        drift2: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "100%": { transform: "translate(-30px,40px) scale(0.95)" },
        },
        drift3: {
          "0%": { transform: "translate(-50%,-50%) scale(1)" },
          "100%": { transform: "translate(-50%,-50%) scale(1.2)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        scrollLine: {
          "0%,100%": { transform: "scaleY(0)", transformOrigin: "top", opacity: "0" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
