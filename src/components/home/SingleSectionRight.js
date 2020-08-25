import React from "react"
import singleSectionStyles from "./singleSection.module.css"
import { graphql, useStaticQuery } from "gatsby"
import SingleModule from "./SingleModule"

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
    }
  `)

  return (
    <section
      className={`${singleSectionStyles.mainSection} ${singleSectionStyles.rightFlexDirection}`}
    >
      <SingleModule
        titleData={data.allWordpressPage.edges[0].node.acf.slogan_flats}
        btnCTA="Descubre"
        SquareImageData={
          data.allWordpressPage.edges[0].node.acf.imagen_flats.localFile
            .childImageSharp.fluid
        }
        titleSquare="Flats"
      />
    </section>
  )
}

export default SingleSectionRight
