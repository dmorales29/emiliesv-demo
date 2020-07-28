import React from "react"
import layout from "../components/Layout"

export default ({ pageContext }) => (
  <layout>
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}></h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
  </layout>
)
