import React from "react"
import SEO from "../components/seo"
import MainSection from "../components/home/MainSection"
import SingleSectionLeft from "../components/home/SingleSectionLeft"
import SingleSectionRight from "../components/home/SingleSectionRight"
import DoubleSection from "../components/home/DoubleSection"
import InstagramModule from "../components/home/InstagramModule"
import globalStyles from "../components/global.module.css"
import loadable from "@loadable/component"
import Banner970x90 from "../utils/Banne970x90"
const EmilieMap = loadable(() => import("../utils/EmilieMap"))

const IndexPage = () => {
  return (
    <div className={globalStyles.containerLayout}>
      <div className={globalStyles.containerInnerLayout}>
        <SEO title="Home" />
        <MainSection />
        <SingleSectionLeft />
        <Banner970x90 />
        <SingleSectionRight />
        <DoubleSection />
      </div>
      <InstagramModule />
      <EmilieMap />
    </div>
  )
}

export default IndexPage

// className={globalStyles.containerLayout}
// className={globalStyles.containerInnerLayout}
