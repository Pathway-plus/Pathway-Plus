/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F65A06",
        "primary-light": "#FA7A35",
        "blue": "#4580ED",
        "pink-red": "#FA3553",
        "purple": "#C933D6",
        "green": "#33D670",
        "yellow": "#FADD35",
      },
      boxShadow: {
        "default": "0 0px 10px 2px rgba(0,0,0,0.2)",
        "expand": "0 0px 15px 3px rgba(0,0,0,0.25)",
        "shrink": "0 0px 15px 2px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
