import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

kirkhamTheme.baseFontSize = "14px"
kirkhamTheme.headerColor = "#707070"
kirkhamTheme.bodyColor = "#707070"
kirkhamTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: "#FF786C",
  },
})

const typography = new Typography(kirkhamTheme)

export const { scale, rhythm, options } = typography
export default typography
