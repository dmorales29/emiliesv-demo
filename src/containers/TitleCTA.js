import React from "react"
import titleCTAStyles from "./titleCTA.module.css"
import MainCTABtn from "../components/buttons/MainCTABtn"

function TitleCTA(props) {
  return (
    <div className={titleCTAStyles.header_container}>
      <h1>{props.titleData}</h1>
      <MainCTABtn btnCTA={props.btnCTA} />
    </div>
  )
}

export default TitleCTA
