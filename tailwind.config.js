/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Red Rose"],
        secondary: ["Sora"],
      },
      colors: {
        purple: "#A02279",
        primary: "#434343",
        border1: "#A3A3A3",
        border2: "#D7D7D7",
        gradient: "linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)",
        gradient2: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
        backgroundfoo: "#1D1D1E",
        backgrounddark: "#1D1D1E",
      },
      boxShadow: {
        shadowcustom: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
