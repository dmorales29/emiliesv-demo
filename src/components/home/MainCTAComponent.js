import React from "react"
import globalStyles from "../global.module.css"
import mainCTAComponentStyles from "./mainCTAComponent.module.css"

function MainCTAComponent(props) {
  return (
    <div className={mainCTAComponentStyles.header_container}>
      <h1 className={mainCTAComponentStyles.h1}>{props.titleData}</h1>
      <button className={globalStyles.btn_cta}>{props.btnCTA}</button>
    </div>
  )
}

export default MainCTAComponent
