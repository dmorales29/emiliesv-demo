import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SingleModuleV2 from "../../utils/SingleModuleV2"
import singleSectionStyles from "../home/singleSection.module.css"
import mainSectionStyles from "./mainSection.module.css"

function MainSection() {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPage(filter: { slug: { eq: "home" } }) {
        edges {
          node {
            acf {
              imagen_flatforms {
                localFile {
                  childImageSharp {
                    fluid(jpegQuality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              slogan_plataformas_flatfmors
            }
          }
        }
      }
    }
  `)

  return (
    <section
      className={`${singleSectionStyles.mainSection} ${mainSectionStyles.mainSection}`}
    >
      <SingleModuleV2
        selectSide="right"
        titleData={
          data.allWordpressPage.edges[0].node.acf.slogan_plataformas_flatfmors
        }
        SquareImageData={
          data.allWordpressPage.edges[0].node.acf.imagen_flatforms.localFile
            .childImageSharp.fluid
        }
        titleSquare="Flatforms"
      />
    </section>
  )
}

export default MainSection
