import React from "react"
import layout from "../components/layout"

export default ({ pageContext }) => (
  <layout>
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}></h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
  </layout>
)
