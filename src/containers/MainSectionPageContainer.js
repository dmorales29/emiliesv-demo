import React from "react"
import mainSectionPageContainerStyles from "./mainSectionPageContainer.module.css"

function MainSection({ children }) {
  return (
    <section className={mainSectionPageContainerStyles.mainSection}>
      {children}
    </section>
  )
}

export default MainSection
