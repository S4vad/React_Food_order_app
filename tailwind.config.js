/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        bump: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(0.9)' },
          '30%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-3rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "meals-appear": {
          from: { opacity: "0", transform: "translateY(3rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        bump: "bump 300ms ease-out",
        "slide-down": "slide-down 300ms ease-out forwards",
        "meals-appear": "meals-appear 1s ease-out forwards", 
      },
    },
  },
  plugins: [],
};
