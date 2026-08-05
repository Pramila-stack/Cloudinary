/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sage: { DEFAULT: "#C4D2A6", deep: "#9DB07E", soft: "#DDE8CE" },
        rose: { DEFAULT: "#EBA9BC", soft: "#F5D9DF" },
        blush: "#FFEDF3",
        magenta: { DEFAULT: "#C43E7E", deep: "#9E2C60" },
        cream: "#F5EEE1",
        ink: { DEFAULT: "#40593A", soft: "#6E7E5F" },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        script: ['"Parisienne"', "cursive"],
        sans: ['"Poppins"', "system-ui", "sans-serif"],
      },
      borderRadius: { xl2: "1.25rem", "3xl": "1.75rem" },
      boxShadow: {
        soft: "0 14px 40px -18px rgba(150,120,90,0.45)",
        card: "0 10px 30px -14px rgba(120,90,110,0.35)",
        lift: "0 22px 50px -20px rgba(120,90,110,0.45)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(18px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        wiggle: { "0%,100%": { transform: "rotate(-4deg)" }, "50%": { transform: "rotate(4deg)" } },
      },
      animation: { "fade-up": "fade-up .6s ease-out both", float: "float 6s ease-in-out infinite", wiggle: "wiggle .5s ease-in-out" },
    },
  },
  plugins: [],
};
