import React from "react"
import mainCTABtnStyles from "./mainCTABtn.module.css"

function MainCTA(props) {
  return (
    <a href="/" className={mainCTABtnStyles.btn_cta}>
      {props.btnCTA}
    </a>
  )
}

export default MainCTA
