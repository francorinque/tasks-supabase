/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: "#35383f",
        light: "#fefffd",
        dark: "#2A2A28",
      },
      backgroundImage: {
        textGradient:
          "bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent",
      },
    },
  },
  plugins: [],
}
