import React from "react"
import SEO from "../components/seo"
import MainContainerHome from "../containers/home/MainContainerHome"

import SingleSectionLeft from "../components/home/SingleSectionLeft"
import SingleSectionRight from "../components/home/SingleSectionRight"
import DoubleSection from "../components/home/DoubleSection"
import InstagramModule from "../components/home/InstagramModule"
import Banner970x90 from "../utils/Banne970x90"
import loadable from "@loadable/component"
const EmilieMap = loadable(() => import("../utils/EmilieMap"))

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <MainContainerHome />
      <SingleSectionLeft />
      <Banner970x90 />
      <SingleSectionRight />
      <DoubleSection />
      <InstagramModule />
      <EmilieMap />
    </>
  )
}

export default IndexPage
