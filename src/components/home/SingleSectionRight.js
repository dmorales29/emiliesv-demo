import React from "react"
import singleSectionStyles from "./singleSection.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SubCTAComponent from "./SubCTAComponent"
import SquareImage from "./SquareImage"

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
    <section
      className={`${singleSectionStyles.mainSection} ${singleSectionStyles.rightFlexDirection}`}
    >
      <SubCTAComponent
        titleData={data.allWordpressPage.edges[0].node.acf.slogan_flats}
        btnCTA="Descubre"
      />
      <div
        className={`${singleSectionStyles.photoContainer} ${singleSectionStyles.rightEnd}`}
      >
        <SquareImage
          data={
            data.allWordpressPage.edges[0].node.acf.imagen_flats.localFile
              .childImageSharp.fluid
          }
          titleSquare="Flats"
        />
      </div>
      <Img
        className={`${singleSectionStyles.arrowDecoration} ${singleSectionStyles.rightArrowDecoration}`}
        fluid={data.decorationArrow.edges[0].node.fluid}
      />
      <Img
        className={`${singleSectionStyles.polkaDecoration} ${singleSectionStyles.rightPolkaDecoration}`}
        fluid={data.decorationPolka.edges[0].node.fluid}
      />
    </section>
  )
}

export default SingleSectionRight
