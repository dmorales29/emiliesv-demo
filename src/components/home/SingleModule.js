import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import singleSectionStyles from "./singleSection.module.css"
import Img from "gatsby-image"
import SubCTAComponent from "./SubCTAComponent"
import SquareImage from "./SquareImage"

function SingleSectionRight(props) {
  const data = useStaticQuery(graphql`
    query {
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
    <>
      <SubCTAComponent titleData={props.titleData} btnCTA={props.btnCTA} />
      <div className={`${singleSectionStyles.photoContainer}`}>
        <SquareImage
          data={props.SquareImageData}
          titleSquare={props.titleSquare}
        />
      </div>
      <Img
        className={`${singleSectionStyles.arrowDecoration}`}
        fluid={data.decorationArrow.edges[0].node.fluid}
      />
      <Img
        className={`${singleSectionStyles.polkaDecoration}`}
        fluid={data.decorationPolka.edges[0].node.fluid}
      />
    </>
  )
}

export default SingleSectionRight
