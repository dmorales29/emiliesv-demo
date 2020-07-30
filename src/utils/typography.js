import Typography from "typography"

const typography = new Typography({
  baseFontSize: "12px",
  headerColor: "#707070",
  bodyColor: "#707070",
  baseLineHeight: 1.5,
  headerFontFamily: ["Playfair Display", "serif"],
  bodyFontFamily: ["Lato", "sans-serif"],
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    a: {
      color: "#FF786C",
    },
  }),
  // See below for the full list of options.
})

export default typography
