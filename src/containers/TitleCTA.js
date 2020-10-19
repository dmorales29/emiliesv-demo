import React from "react"
import titleCTAStyles from "./titleCTA.module.css"
import MainCTABtn from "../components/buttons/MainCTABtn"

function TitleCTA({ titleData, to, btnCTA }) {
  return (
    <div className={titleCTAStyles.header_container}>
      <h1>{titleData}</h1>
      <MainCTABtn to={to} btnCTA={btnCTA} />
    </div>
  )
}

export default TitleCTA
