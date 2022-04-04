module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        "cyan-gray-light-bg": "hsl(180, 52%, 96%)",
        "cyan-gray-light-filter": "hsl(180, 31%, 95%)",
        "cyan-gray": "hsl(180, 8%, 52%)",
        "cyan-gray-dark": "hsl(180, 14%, 20%)",
      },

      fontFamily: {
        primary: ["Spartan", "sans-serif"],
      },

      backgroundImage: {
        "header-desktop": "url('/images/bg-header-desktop.svg')",
        "header-mobile": "url('/images/bg-header-mobile.svg')",
      },

      width: {
        "90w": "90vw",
      },

      fontSize: {
        tiny: "10px",
      },
    },
  },
  plugins: [],
};
