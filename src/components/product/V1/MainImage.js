import React from "react"
import Img from "gatsby-image"
import mainImageStyles from "./mainImage.module.css"

export const MainImage = ({ fluid, onClick }) => {
  return (
    <Img
      className={mainImageStyles.ImageContainer}
      fluid={fluid}
      onClick={onClick}
    />
  )
}
