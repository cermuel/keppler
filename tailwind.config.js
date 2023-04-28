/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "translate(0)" },
          "50%": { transform: "translate(15%, 15%)" },
          "100%": { transform: "translate(0)" },
        },
        reappear: {
          "0%": { transform: "translate(-500%, -250%)", display: "block" },
          "100%": { transform: "translate(0)", display: "block" },
        },
        upToDown: {
          "0%": { transform: "translate(0%, -100%)" },
          "100%": { transform: "translate(0%, 100%)", opacity: "0" },
          // "100%": { transform: "translate(0%, 0%)" },
        },
        rotate: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        move: {
          "0%": {
            opacity: "0.2",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0.2",
          },
        },
      },
      animation: {
        waving: "wave 2s linear infinite",
        reappearing: "reappear 1s ease-in-out",
        upToDown: "upToDown 2s linear infinite",
        rotateFaster: "rotate 15s linear infinite",
        rotateFastest: "rotate 10s linear infinite",
        rotateFast: "rotate 20s linear infinite",
        rotateMedium: "rotate 25s linear infinite",
        rotateSlow: "rotate 30s linear infinite",
        movement: "move 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
