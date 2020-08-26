import React from "react"
import MainCTABtn from "../buttons/MainCTABtn"
import mainCTAComponentStyles from "./mainCTAComponent.module.css"

function MainCTAComponent(props) {
  return (
    <div className={mainCTAComponentStyles.header_container}>
      <h1>{props.titleData}</h1>
      <MainCTABtn btnCTA="Nuevos estilos" />
    </div>
  )
}

export default MainCTAComponent
