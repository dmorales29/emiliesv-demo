import React from "react"
import titleCTAStyles from "./titleCTA.module.css"

function TitleOnly(props) {
  return (
    <div className={titleCTAStyles.header_container}>
      <h1>{props.titleData}</h1>
    </div>
  )
}

export default TitleOnly
