import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "kikirik-primary": "#CDA747",
        "kikirik-secondary": "#EDD28C",
        "kikirik-accent": "#F5C242",
        "kikirik-background": "#E0CC8C"

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
export default config;
