/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "485px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        brightBlue: "hsl(220, 98%, 61%)",
        "grad-1": "hsl(192, 100%, 67%)",
        "grad-2": "hsl(280, 87%, 65%)",
        "lm-VLG": "hsl(0, 0%, 98%)",
        "lm-VLGBlue": "hsl(236, 33%, 92%)",
        "lm-LGBlue": "hsl(233, 11%, 84%)",
        "lm-DGBlue": "hsl(236, 9%, 61%)",
        "lm-VDGBlue": "hsl(235, 19%, 35%)",
        "lm-VDBlue": "hsl(235, 21%, 11%)",
        "dm-VDDesatBlue": "hsl(235, 24%, 19%)",
        "dm-LGBlue": "hsl(234, 39%, 85%)",
        "dm-hov-LGBlue": "hsl(236, 33%, 92%)", //hover
        "dm-DGBlue": "hsl(234, 11%, 52%)",
        "dm-VDGBlue": "hsl(233, 14%, 35%)",
        "dm-hov-VDGBlue": "hsl(237, 14%, 26%)",
      },
      fontFamily: {
        body: ["Josefin Sans", defaultTheme.fontFamily.sans],
      },
      backgroundSize: {
        "50%": "100% 50%",
        "40%": "100% 40%",
        "30%": "100% 30%",
      },
      backgroundImage: {
        "lm-BgImg": "url('./assets/bg-desktop-light.jpg')",
        "dm-BgImg": "url('./assets/bg-desktop-dark.jpg')",
        "lm-Mob-BgImg": "url(./assets/bg-mobile-light.jpg)",
        "dm-Mob-BgImg": "url(./assets/bg-mobile-dark.jpg)",
        checked: "url('./assets/icon-check.svg')",
      },
      letterSpacing: {
        "letter-sp-1": ".25em",
        "letter-sp-2": ".3em",
        "letter-sp-3": ".35em",
        "letter-sp-4": ".4em",
      },
      boxShadow: {
        "3xl":
          "0 25px 50px -12px rgb(0 0 0 / 0.1), 25px 0 50px -12px rgb(0 0 0 / 0.1)",
      },
      spacing: {
        "h-1": "30vh",
        "h-2": "35vh",
        "h-3": "40vh",
        "h-4": "45vh",
        "h-5": "50vh",
      },
      screens: {
        tall: { raw: "(min-height: 600px)", max: "768px" },
        // => @media (min-height: 800px) { ... }
      },
    },
  },
  plugins: [],
};
