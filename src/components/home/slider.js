import React from "react"
import { graphql, StaticQuery } from "gatsby"

export const query = graphql`
  query GET_MAIN_IMAGE {
    allWordpressPage(filter: { slug: { eq: "home" } }) {
      edges {
        node {
          acf {
            slogan_principal
            imagen_principal {
              source_url
            }
            slogan_sandalias
            imagen_sandalias {
              source_url
            }
            slogan_flats
            imagen_flats {
              source_url
            }
            slogan_plataformas_flatfmors
            imagen_plataformas {
              source_url
            }
            imagen_flatforms {
              source_url
            }
          }
          slug
        }
      }
    }
  }
`

function MainSlider() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <div>
          <h1>{data.allWordpressPage.edges[0].node.acf.slogan_principal}</h1>
          <img
            className={"a"}
            src={
              data.allWordpressPage.edges[0].node.acf.imagen_principal
                .source_url
            }
            alt=""
          />
        </div>
      )}
    />
  )
}

export default MainSlider
