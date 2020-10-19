import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SingleModule from "../../containers/SingleModule"

function SingleSectionLeft() {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPage(filter: { slug: { eq: "home" } }) {
        edges {
          node {
            acf {
              imagen_sandalias {
                localFile {
                  childImageSharp {
                    fluid(jpegQuality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              slogan_sandalias
            }
          }
        }
      }
      title: allWordpressPage(filter: { menu_order: { eq: 2 } }) {
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
        selectSide="left"
        titleData={data.allWordpressPage.edges[0].node.acf.slogan_sandalias}
        to="sandalias"
        btnCTA="Encuentra el ideal"
        SquareImageData={
          data.allWordpressPage.edges[0].node.acf.imagen_sandalias.localFile
            .childImageSharp.fluid
        }
        titleSquare={data.title.edges[0].node.title}
      />
    </section>
  )
}

export default SingleSectionLeft
