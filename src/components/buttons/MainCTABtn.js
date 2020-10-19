import React from "react"
import { Link } from "gatsby"
import mainCTABtnStyles from "./mainCTABtn.module.css"

function MainCTA({ btnCTA, to }) {
  return (
    <Link to={to} className={mainCTABtnStyles.btn_cta}>
      {btnCTA}
    </Link>
  )
}

export default MainCTA
