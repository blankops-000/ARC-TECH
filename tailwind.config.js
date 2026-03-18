/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0e1018",
        panel: "rgba(10, 10, 10, 0.85)",
        accent: "#ffffff",
        accent2: "#d1d5db",
      },
      fontFamily: {
        sans: ["Space Grotesk", "Segoe UI", "sans-serif"],
        serif: ["Literata", "Times New Roman", "serif"],
      },
      boxShadow: {
        soft: "0 24px 60px rgba(4, 6, 16, 0.55)",
        accent: "0 10px 30px rgba(255, 255, 255, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease forwards",
      },
    },
  },
  plugins: [],
}
