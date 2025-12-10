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
        terminal: {
          bg: "#1e1e1e",
          titleBar: "#323232",
          border: "#404040",
          text: "#ccc",
          comment: "#7c7c7c",
          prompt: {
            path: "#6a9fb5",
            git: "#f0c674",
            branch: "#cc6666",
            modified: "#b5bd68",
            time: "#666",
          },
          diff: {
            addition: "#98c379",
            additionBg: "#2d4a3e",
          },
          link: "#6a9fb5",
          linkHover: "#8abfd8",
          command: "#de935f",
          cursor: "#f0c674",
        },
        social: {
          text: "#666",
          hover: "#ccc",
        },
      },
      fontFamily: {
        mono: [
          "var(--font-mono)",
          "SF Mono",
          "Monaco",
          "Inconsolata",
          "Fira Code",
          "Droid Sans Mono",
          "Source Code Pro",
          "monospace",
        ],
      },
      animation: {
        pulse: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
