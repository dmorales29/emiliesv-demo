import React from "react"
import subCTAComponentStyles from "./subCTAComponent.module.css"
import MainCTABtn from "../buttons/MainCTABtn"

function SubCTAComponent(props) {
  return (
    <div className={subCTAComponentStyles.header_container}>
      <h2 className={subCTAComponentStyles.h2}>{props.titleData}</h2>
      <MainCTABtn btnCTA={props.btnCTA} />
    </div>
  )
}

export default SubCTAComponent
