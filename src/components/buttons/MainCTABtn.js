import React from "react"
import { Link } from "gatsby"
import mainCTABtnStyles from "./mainCTABtn.module.css"

function MainCTA({ btnCTA, to, icon }) {
  return (
    <Link to={to} className={mainCTABtnStyles.btn_cta}>
      {icon ? icon : null} {btnCTA}
    </Link>
  )
}

export default MainCTA
