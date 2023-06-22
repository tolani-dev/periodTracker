/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontWeight: {
      "medium-bold": "580",
    },
    colors: {
      primary: {
        shades: "#F2F0FF",
        DEFAULT: "#ABA0CD", //
        tint: "#E2DDFD",
        light: "#FFDFFE"
      },

      main: {
        DEFAULT: "#6245FE",
        tint: "#fdf3e0",
      },

      success: {
        shades: "#38B2AC",
        DEFAULT: "#2C7A7B", //
        tint: "#defff4",
      },

      error: {
        shades: "#F56565",
        DEFAULT: "#E53E3E", //
        tint: "#fdeaef",
      },

      info: {
        shades: "#805AD5",
        DEFAULT: "#553C9A", //
        tint: "#E9D8FD",
        light: "#3F4784",
      },

      accent: {
        shades: "#d9d9d9",
        DEFAULT: "#707070", //
        tint: "#F1F1F1",
        light: "#f1f1f1be",
      },
      green: {
        shades: "#1F8946",
        DEFAULT: "#5ef85eba", //
        tint: "#c0dec0c9",
      },
      grey: {
        shades: "#AEB3CD",
        DEFAULT: "#535875", //
        tint: "#f6f7fb",
      },
      white: {
        shades: "#FAFAFA",
        DEFAULT: "#FFFFFF", //
        tint: "#f6f7fb",
      },
    },

    fontFamily: {
      Muli: ["Muli", "sans"], //
    },
  },
};
// eslint-disable-next-line no-undef
// export const plugins = [require("daisyui")];
