/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { body: ["Nunito"] },
      colors: {
        "price-yellow": "rgb(255, 219, 0)",
      },
      boxShadow: {
        price: "0.125rem 0.125rem 0px rgba(204,0,8,1)",
      },
    },
  },
  plugins: [],
};
