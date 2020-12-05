import React from "react"
import SEO from "../components/seo"
import MainContainerHome from "../containers/home/MainContainerHome"
import InstagramModule from "../components/home/InstagramModule"
import loadable from "@loadable/component"
const EmilieMap = loadable(() => import("../utils/EmilieMap"))

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <MainContainerHome />
      <InstagramModule />
      <EmilieMap />
    </>
  )
}

export default IndexPage
