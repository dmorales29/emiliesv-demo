import React from "react"
import singleSectionStyles from "./singleSection.module.css"
import { graphql, useStaticQuery } from "gatsby"
import SingleModule from "./SingleModule"

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
    }
  `)

  return (
    <section
      className={`${singleSectionStyles.mainSection} ${singleSectionStyles.leftFlexDirection}`}
    >
      <SingleModule
        titleData={data.allWordpressPage.edges[0].node.acf.slogan_sandalias}
        btnCTA="Encuentra el ideal"
        SquareImageData={
          data.allWordpressPage.edges[0].node.acf.imagen_sandalias.localFile
            .childImageSharp.fluid
        }
        titleSquare="Sandalias"
      />
    </section>
  )
}

export default SingleSectionLeft
