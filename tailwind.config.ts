import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0D12",
          50: "#F5F6F7",
          100: "#141720",
          200: "#191D27",
          300: "#20242F",
          400: "#2A2F3B",
        },
        gold: {
          DEFAULT: "#D4A24E",
          soft: "#E8C888",
          dim: "#8A6E3C",
        },
        teal: {
          DEFAULT: "#4ECDC4",
          soft: "#8FE3DC",
        },
        ivory: {
          DEFAULT: "#EDEEF0",
          muted: "#888E99",
          faint: "#5B606A",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gold-radial":
          "radial-gradient(circle at 30% 20%, rgba(212,162,78,0.18), transparent 60%)",
        "teal-radial":
          "radial-gradient(circle at 80% 70%, rgba(78,205,196,0.12), transparent 55%)",
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.35)",
        "glass-lg": "0 24px 64px rgba(0,0,0,0.45)",
        "gold-glow": "0 0 40px rgba(212,162,78,0.15)",
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      animation: {
        "ticker": "ticker 28s linear infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
