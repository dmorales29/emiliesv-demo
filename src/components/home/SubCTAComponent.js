import React from "react"
import globalStyles from "../global.module.css"
import subCTAComponentStyles from "./subCTAComponent.module.css"

function SubCTAComponent(props) {
  return (
    <div className={subCTAComponentStyles.header_container}>
      <h2 className={subCTAComponentStyles.h2}>{props.titleData}</h2>
      <button
        className={`${globalStyles.btn_cta} ${subCTAComponentStyles.btnCTA}`}
      >
        {props.btnCTA}
      </button>
    </div>
  )
}

export default SubCTAComponent
