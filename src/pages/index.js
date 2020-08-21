import React from "react"
import SEO from "../components/seo"
import MainSection from "../components/home/MainSection"
import SingleSectionLeft from "../components/home/SingleSectionLeft"
import SingleSectionRight from "../components/home/SingleSectionRight"
import DoubleSection from "../components/home/DoubleSection"
import InstagramModule from "../components/home/InstagramModule"
import globalStyles from "../components/global.module.css"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className={globalStyles.containerInnerLayout}>
      <MainSection />
      <SingleSectionLeft />
      <SingleSectionRight />
      <DoubleSection />
    </div>
    <div>
      <InstagramModule />
    </div>
  </>
)

export default IndexPage
