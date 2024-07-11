/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeMain: "#FFA62F",
        orangeLight: "#FFC96F",
        orangePale: "#FFE8C8",
        greenAccent: "#ACD793",
      },
    },
  },
  plugins: [],
};
