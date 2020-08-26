import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import singleSectionStyles from "../components/home/singleSection.module.css"
import Img from "gatsby-image"
import SquareImage from "./SquareImage"
import subCTAComponentStyles from "../components/home/subCTAComponent.module.css"

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
    <div
      className={
        props.selectSide === "left"
          ? singleSectionStyles.leftFlexDirection
          : singleSectionStyles.rightFlexDirection
      }
    >
      <div className={subCTAComponentStyles.header_container}>
        <h1>{props.titleData}</h1>
      </div>
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
    </div>
  )
}

export default SingleSectionRight
