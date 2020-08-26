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
      className={`${singleSectionStyles.mainSection} ${mainSectionStyles.mainSection}`}
    >
      <SingleModuleV2
        selectSide="left"
        titleData={data.allWordpressPage.edges[0].node.acf.slogan_sandalias}
        SquareImageData={
          data.allWordpressPage.edges[0].node.acf.imagen_sandalias.localFile
            .childImageSharp.fluid
        }
        titleSquare="Sandalias"
      />
    </section>
  )
}

export default MainSection
