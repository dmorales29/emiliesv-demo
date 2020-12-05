import React from "react"
import squareImageStyles from "./squareImage.module.css"

function SquareImage({ srcSquareImage, altSquareImage, titleSquare }) {
  return (
    <div className={squareImageStyles.image}>
      <img src={srcSquareImage} alt={altSquareImage} />
      <span>{titleSquare}</span>
    </div>
  )
}

export default SquareImage
