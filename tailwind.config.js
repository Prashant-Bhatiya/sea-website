/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // User requested palette
        "twilight-indigo": "#2B3A55",
        "blue-slate": "#566277",
        "metallic-gold": "#D4AB3F",
        "golden-bronze": "#B89E58",
        "ivory-mist": "#F6F0DF",

        // Semantic aliases
        "primary": "#2B3A55",
        "primary-dark": "#1E2A40",
        "primary-light": "#384A6B",
        "secondary": "#566277",
        "accent": "#D4AB3F",
        "accent-gold": "#D4AB3F",
        "accent-bronze": "#B89E58",
        "bronze": "#B89E58",
        "background": "#F6F0DF",
        "surface": "#FAF7F0",
        "surface-card": "#FFFFFF",
        "surface-high": "#EEE7D2",
        "surface-highest": "#E4DCC4",
        "on-surface": "#1E1C12",
        "on-surface-variant": "#566277"
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem"
      }
    },
  },
  plugins: [],
}
