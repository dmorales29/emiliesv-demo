import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SingleModule from "../../containers/SingleModule"

function SingleSectionRight() {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPage(filter: { slug: { eq: "home" } }) {
        edges {
          node {
            acf {
              imagen_flats {
                localFile {
                  childImageSharp {
                    fluid(jpegQuality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              slogan_flats
            }
          }
        }
      }
      title: allWordpressPage(filter: { menu_order: { eq: 3 } }) {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  return (
    <section>
      <SingleModule
        selectSide="right"
        titleData={data.allWordpressPage.edges[0].node.acf.slogan_flats}
        to="flats"
        btnCTA="Descubre"
        SquareImageData={
          data.allWordpressPage.edges[0].node.acf.imagen_flats.localFile
            .childImageSharp.fluid
        }
        titleSquare={data.title.edges[0].node.title}
      />
    </section>
  )
}

export default SingleSectionRight
