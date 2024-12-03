/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgCoder: "#1A1A1A",
        textCoder: "#D2D2D2",
        detailCoder: "#D1E500",
        detaildLink : '#D9E376',
      },
    },
  },
  plugins: [],
};
