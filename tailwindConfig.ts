/** @type {import("tailwindcss").Config} */
module.exports = {
    purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    media: false, // or 'media' or 'class'
    theme: {
      fontSize: {
        18: "18px",
        24: "24px",
        14: "14px",
        12: "12px",
        16: "16px",
        56: "56px",
      },
  
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
  
      extend: {
        width: {
          620: "620px",
          500: "500px",
          450: "450px",
        },
        borderWidth: {
          1: "1px",
        },
        colors: {
          enumPrimaryMain: "#095AD3",
          iconBorders: "#EAECF0",
        },
      },
    },
    plugins: [],
  };
  