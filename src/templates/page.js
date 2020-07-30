import React from "react"

export default ({ pageContext }) => (
  <section>
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}></h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
  </section>
)
