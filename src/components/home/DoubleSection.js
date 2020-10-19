import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SquareImage from "../../containers/SquareImage"
import MainCTABtn from "../buttons/MainCTABtn"
import doubleSectionStyles from "./doubleSection.module.css"

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
      titlePlataformas: allWordpressPage(filter: { menu_order: { eq: 4 } }) {
        edges {
          node {
            title
          }
        }
      }
      titleFlatforms: allWordpressPage(filter: { menu_order: { eq: 5 } }) {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  return (
    <section className={doubleSectionStyles.mainSection}>
      <h1>
        {data.allWordpressPage.edges[0].node.acf.slogan_plataformas_flatfmors}
      </h1>
      <div className={doubleSectionStyles.imagesContainer}>
        <div className={doubleSectionStyles.imageLeft}>
          <div>
            <SquareImage
              data={
                data.allWordpressPage.edges[0].node.acf.imagen_plataformas
                  .localFile.childImageSharp.fluid
              }
              titleSquare={data.titlePlataformas.edges[0].node.title}
            />
            <MainCTABtn to="plataformas" btnCTA="Descubre" />
          </div>
        </div>
        <div className={doubleSectionStyles.imageRight}>
          <div>
            <SquareImage
              data={
                data.allWordpressPage.edges[0].node.acf.imagen_flatforms
                  .localFile.childImageSharp.fluid
              }
              titleSquare={data.titleFlatforms.edges[0].node.title}
            />
            <MainCTABtn to="flatforms" btnCTA="Descubre" />
          </div>
        </div>
      </div>
      <Img
        className={doubleSectionStyles.polkaDecoration}
        fluid={data.decorationPolka.edges[0].node.fluid}
      />
    </section>
  )
}

export default DoubleSection
