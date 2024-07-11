/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        default: "url(/bobacursor.png), default",
        pointer: "url(/bobapointer.png), pointer",
      },
    },
  },
  plugins: [],
};
