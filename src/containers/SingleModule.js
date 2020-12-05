import React from "react"
import singleModuleStyles from "./singleModule.module.css"
import TitleCTA from "./TitleCTA"
import SquareImage from "./SquareImage"

function SingleSectionRight({
  selectSide,
  to,
  titleData,
  btnCTA,
  srcSquareImage,
  altSquareImage,
  titleSquare,
  arrowDecorationSrc,
  arrowDecorationAlt,
  polkaDecorationSrc,
  polkaDecorationAlt,
}) {
  return (
    <div
      className={`${
        selectSide === "left"
          ? singleModuleStyles.leftFlexDirection
          : singleModuleStyles.rightFlexDirection
      } ${singleModuleStyles.mainSection}`}
    >
      <TitleCTA to={to} titleData={titleData} btnCTA={btnCTA} />
      <div className={`${singleModuleStyles.photoContainer}`}>
        <SquareImage
          srcSquareImage={srcSquareImage}
          altSquareImage={altSquareImage}
          titleSquare={titleSquare}
        />
      </div>
      <img
        className={`${singleModuleStyles.arrowDecoration}`}
        src={arrowDecorationSrc}
        alt={arrowDecorationAlt}
      />
      <img
        className={`${singleModuleStyles.polkaDecoration}`}
        src={polkaDecorationSrc}
        alt={polkaDecorationAlt}
      />
    </div>
  )
}

export default SingleSectionRight
