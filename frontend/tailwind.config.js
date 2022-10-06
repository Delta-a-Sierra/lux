const { MdInbox } = require("react-icons/md");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#084887",
        secondary: "#909CC2",
        accent: "#F58A07",
        white: "#fff",
        online: "#4ACB68",
        offline: "#A5A5A5",
        away: "#E2C639",
        busy: "#E25313",
        gray: {
          100: "#f2f2f2",
          200: "#e9e9e9",
          500: "#7f7f7f",
        },
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      gridTemplateRows: {
        "min-auto": "auto 1fr",
        "2min-auto": "auto auto 1fr",
      },
    },
  },
  plugins: [],
};
