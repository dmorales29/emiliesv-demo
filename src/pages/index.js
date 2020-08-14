import React from "react"
import SEO from "../components/seo"
import MainSection from "../components/home/MainSection"
import SingleSectionLeft from "../components/home/SingleSectionLeft"
import SingleSectionRight from "../components/home/SingleSectionRight"
import DoubleSection from "../components/home/DoubleSection"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <MainSection />
    <SingleSectionLeft />
    <SingleSectionRight />
    <DoubleSection />
  </>
)

export default IndexPage
