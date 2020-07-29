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

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

export default typography
