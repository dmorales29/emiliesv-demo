import React from "react"
import Img from "gatsby-image"
import squareImageStyles from "./squareImage.module.css"

function SquareImage(props) {
  return (
    <div className={squareImageStyles.image}>
      <Img fluid={props.data} />
      <span>{props.titleSquare}</span>
    </div>
  )
}

export default SquareImage
