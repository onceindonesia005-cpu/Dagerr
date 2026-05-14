export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        heading: ["'Syne'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
        sans: ["'Syne'", "sans-serif"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
