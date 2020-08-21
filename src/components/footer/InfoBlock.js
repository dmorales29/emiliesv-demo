import React from "react"
import infoBlockStyles from "./infoBlock.module.css"

function InfoBlock(props) {
  return (
    <div className={props.className}>
      <p className={infoBlockStyles.p}>{props.title}</p>
      {props.children}
    </div>
  )
}

export default InfoBlock
