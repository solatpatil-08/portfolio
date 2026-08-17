module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5fbff",
          100: "#e6f4ff",
          500: "#0f4c81"
        }
      }
    }
  },
  plugins: []
}
