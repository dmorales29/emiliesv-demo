import React from "react"
import Img from "gatsby-image"

export const MainImage = ({ fluid, onClick }) => {
  return <Img fluid={fluid} onClick={onClick} />
}
