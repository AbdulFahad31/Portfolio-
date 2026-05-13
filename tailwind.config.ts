import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          base: "#0A0A0A",
          surface: "#111111",
          border: "#1E1E1E",
          primary: "#F5F5F5",
          secondary: "#888888"
        },
        accent: {
          blue: "#3B82F6",
          cyan: "#06B6D4"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.15)",
        "glow-strong": "0 0 64px rgba(59,130,246,0.22)"
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(245,245,245,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,245,0.035) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
