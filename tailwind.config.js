/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        smallMobile: "330px",
        mobile: "375px",
        largeMobile: "425px",
        smallTablet: "768px",
        largeTablet: "868px",
        smallDekstop: "1024px",
        laptop: "1280px",
        largeDekstop: "1440px",
      },

      keyframes: {
        "pop-in": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "pop-in": "pop-in 0.7s ease-out forwards",
      },

      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("@xpd/tailwind-3dtransforms"),
    require("tw-elements/plugin.cjs"),
  ],
};

