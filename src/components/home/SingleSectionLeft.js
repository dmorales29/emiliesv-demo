import React from "react"
import singleSectionLeftStyles from "./singleSectionLeft.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SubCTAComponent from "./SubCTAComponent"

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
      decorationArrow: allImageSharp(
        filter: { fluid: { originalName: { eq: "arrow.png" } } }
      ) {
        edges {
          node {
            fluid(jpegQuality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      decorationPolka: allImageSharp(
        filter: { fluid: { originalName: { eq: "decoration-02.png" } } }
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
    <section className={singleSectionLeftStyles.mainSection}>
      <div className={singleSectionLeftStyles.photoContainer}>
        <div className={singleSectionLeftStyles.image}>
          <Img
            fluid={
              data.allWordpressPage.edges[0].node.acf.imagen_sandalias.localFile
                .childImageSharp.fluid
            }
          />
          <span>Sandalias</span>
        </div>
      </div>
      <SubCTAComponent
        btnCTA="Encuentra el ideal"
        titleData={data.allWordpressPage.edges[0].node.acf.slogan_sandalias}
      />
      <Img
        className={singleSectionLeftStyles.arrowDecoration}
        fluid={data.decorationArrow.edges[0].node.fluid}
      />
      <Img
        className={singleSectionLeftStyles.polkaDecoration}
        fluid={data.decorationPolka.edges[0].node.fluid}
      />
    </section>
  )
}

export default SingleSectionLeft
