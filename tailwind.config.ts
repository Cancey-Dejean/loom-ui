import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "var(--thd-container-width)",
    },
    colors: {
      "thd-color-violet": {
        0: "var(--thd-color-violet-0)",
        10: "var(--thd-color-violet-10)",
        20: "var(--thd-color-violet-20)",
        30: "var(--thd-color-violet-30)",
        40: "var(--thd-color-violet-40)",
        50: "var(--thd-color-violet-50)",
        60: "var(--thd-color-violet-60)",
        70: "var(--thd-color-violet-70)",
        80: "var(--thd-color-violet-80)",
        90: "var(--thd-color-violet-90)",
        100: "var(--thd-color-violet-100)",
      },
    },
    extend: {},
  },
  plugins: [],
}
export default config
