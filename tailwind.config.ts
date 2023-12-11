import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        "thd-color-grey": {
          10: "var(--thd-color-grey-10)",
          20: "var(--thd-color-grey-20)",
          30: "var(--thd-color-grey-30)",
          40: "var(--thd-color-grey-40)",
          50: "var(--thd-color-grey-50)",
          60: "var(--thd-color-grey-60)",
          70: "var(--thd-color-grey-70)",
          80: "var(--thd-color-grey-80)",
          90: "var(--thd-color-grey-90)",
          100: "var(--thd-color-grey-100)",
        },
        "thd-color-yellow": {
          10: "var(--thd-color-yellow-10)",
          20: "var(--thd-color-yellow-20)",
          30: "var(--thd-color-yellow-30)",
          40: "var(--thd-color-yellow-40)",
          50: "var(--thd-color-yellow-50)",
          60: "var(--thd-color-yellow-60)",
          70: "var(--thd-color-yellow-70)",
          80: "var(--thd-color-yellow-80)",
          90: "var(--thd-color-yellow-90)",
          100: "var(--thd-color-yellow-100)",
        },
        "lns-color": {
          blurple: "var(--lns-color-blurple)",
        },
      },
      screens: {
        "2xl": "1440px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
}
export default config
