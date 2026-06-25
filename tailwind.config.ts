import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF8",
        ink: "#13151A",
        slate: "#5B5F73",
        clay: "#E8542E",
        claydim: "#C7461F",
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
