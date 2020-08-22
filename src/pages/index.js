import React from "react"
import SEO from "../components/seo"
import MainSection from "../components/home/MainSection"
import SingleSectionLeft from "../components/home/SingleSectionLeft"
import SingleSectionRight from "../components/home/SingleSectionRight"
import DoubleSection from "../components/home/DoubleSection"
import InstagramModule from "../components/home/InstagramModule"
import globalStyles from "../components/global.module.css"

const IndexPage = () => {
  return (
    <div className={globalStyles.containerLayout}>
      <div className={globalStyles.containerInnerLayout}>
        <SEO title="Home" />
        <MainSection />
        <SingleSectionLeft />
        <SingleSectionRight />
        <DoubleSection />
      </div>
      <InstagramModule />
    </div>
  )
}

export default IndexPage

// className={globalStyles.containerLayout}
// className={globalStyles.containerInnerLayout}
