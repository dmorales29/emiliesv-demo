import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SquareImage from "./SquareImage"
import MainCTABtn from "../buttons/MainCTABtn"
import doubleSectionStyles from "./doubleSection.module.css"
import singleSectionStyles from "./singleSection.module.css"

function DoubleSection() {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPage(filter: { slug: { eq: "home" } }) {
        edges {
          node {
            acf {
              imagen_plataformas {
                localFile {
                  childImageSharp {
                    fluid(jpegQuality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
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
    <section className={doubleSectionStyles.mainSection}>
      <h2 className={doubleSectionStyles.h2}>
        {data.allWordpressPage.edges[0].node.acf.slogan_plataformas_flatfmors}
      </h2>
      <div className={doubleSectionStyles.imagesContainer}>
        <div className={doubleSectionStyles.imageLeft}>
          <div>
            <SquareImage
              data={
                data.allWordpressPage.edges[0].node.acf.imagen_plataformas
                  .localFile.childImageSharp.fluid
              }
              titleSquare="Plataformas"
            />
            <MainCTABtn btnCTA="Descubre" />
          </div>
        </div>
        <div className={doubleSectionStyles.imageRight}>
          <div>
            <SquareImage
              data={
                data.allWordpressPage.edges[0].node.acf.imagen_flatforms
                  .localFile.childImageSharp.fluid
              }
              titleSquare="Flatforms"
            />
            <MainCTABtn btnCTA="Descubre" />
          </div>
        </div>
      </div>
      <Img
        className={`${singleSectionStyles.polkaDecoration} ${singleSectionStyles.doublePolkaDecoration}`}
        fluid={data.decorationPolka.edges[0].node.fluid}
      />
    </section>
  )
}

export default DoubleSection
