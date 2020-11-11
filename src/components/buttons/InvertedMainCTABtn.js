import React from "react"
import { Link } from "gatsby"
import invertedMainCTABtnStyles from "./invertedMainCTABtn.module.css"

function InvertedMainCTABtn({ btnCTA, to, icon }) {
  return (
    <Link to={to} className={invertedMainCTABtnStyles.btn_cta}>
      {icon ? icon : null} {btnCTA}
    </Link>
  )
}

export default InvertedMainCTABtn
