import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import singleModuleStyles from "./singleModule.module.css"
import Img from "gatsby-image"
import TitleCTA from "./TitleCTA"
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
    <div
      className={`${
        props.selectSide === "left"
          ? singleModuleStyles.leftFlexDirection
          : singleModuleStyles.rightFlexDirection
      } ${singleModuleStyles.mainSection}`}
    >
      <TitleCTA titleData={props.titleData} btnCTA={props.btnCTA} />
      <div className={`${singleModuleStyles.photoContainer}`}>
        <SquareImage
          data={props.SquareImageData}
          titleSquare={props.titleSquare}
        />
      </div>
      <Img
        className={`${singleModuleStyles.arrowDecoration}`}
        fluid={data.decorationArrow.edges[0].node.fluid}
      />
      <Img
        className={`${singleModuleStyles.polkaDecoration}`}
        fluid={data.decorationPolka.edges[0].node.fluid}
      />
    </div>
  )
}

export default SingleSectionRight
