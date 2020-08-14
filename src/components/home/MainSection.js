import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import mainSectionStyles from "./mainSection.module.css"
import Slider from "./Slider"
import MainCTAComponent from "./MainCTAComponent"

function MainSection() {
  const data = useStaticQuery(graphql`
    query {
      home: allWordpressPage(filter: { slug: { eq: "home" } }) {
        edges {
          node {
            acf {
              slogan_principal
              imagen_principal {
                localFile {
                  childImageSharp {
                    fluid(jpegQuality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
      decoration: allImageSharp(
        filter: { fluid: { originalName: { eq: "decoration-01.png" } } }
      ) {
        edges {
          node {
            fluid(jpegQuality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <section className={mainSectionStyles.main_container}>
      <MainCTAComponent
        titleData={data.home.edges[0].node.acf.slogan_principal}
      />
      <Img
        className={mainSectionStyles.main_container_image}
        fluid={
          data.home.edges[0].node.acf.imagen_principal.localFile.childImageSharp
            .fluid
        }
      />
      <Img
        className={mainSectionStyles.background_image}
        fluid={data.decoration.edges[0].node.fluid}
      />
      <Slider />
    </section>
  )
}

export default MainSection
