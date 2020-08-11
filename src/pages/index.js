import React from "react"
import SEO from "../components/seo"
import MainSection from "../components/home/MainSection"
import SingleSectionLeft from "../components/home/SingleSectionLeft"
import SingleSectionRight from "../components/home/SingleSectionRight"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <MainSection />
    <SingleSectionLeft />
    <SingleSectionRight />
  </>
)

export default IndexPage
