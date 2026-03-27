import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        bg: "#050810",
        surface: "#0B0D1C",
        "surface-2": "#10132B",
        line: "#1C1F38",
        "text-primary": "#EDE8E0",
        "text-secondary": "#6A6A90",
        gold: "#BF8D3C",
        "gold-light": "#E0AE5C",
        "gold-dim": "#7A5A25",
        azure: "#3D72F0",
        "azure-light": "#6090F8",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleFadeIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        lineGrow: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 0.75s ease forwards",
        "scale-fade-in": "scaleFadeIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "line-grow": "lineGrow 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
