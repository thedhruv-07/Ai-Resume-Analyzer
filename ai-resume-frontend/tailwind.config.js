/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft, eye-friendly palette
        bg: {
          light: "#F8F6F4",
          lighter: "#FDFCFB",
          card: "#FFFFFF",
        },
        text: {
          primary: "#2D2D2D",
          secondary: "#6B7280",
          muted: "#A0A0A0",
        },
        border: {
          light: "#E5E5E5",
          subtle: "#F0F0F0",
        },
      },
    },
  },
  plugins: [],
}