import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-raised": "var(--surface-raised)",
        "text-primary": "var(--text-primary)",
        "text-[#1C1D20]": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "inverse-bg": "var(--inverse-background)",
        "inverse-text": "var(--inverse-text)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
