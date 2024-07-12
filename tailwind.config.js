/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        default: "url(/bobacursor.png), default",
        pointer: "url(/bobapointer.png), pointer",
      },
      colors: {
        orangeMain: "#FFA62F",
        orangeLight: "#FFC96F",
        orangePale: "#FFE8C8",
        orangeVeryPale: "#FEFAF6",
        greenAccent: "#ACD793",
        darkGreenAccent: "#80AF81",
      },
    },
  },
  plugins: [],
};
