import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Logo(props) {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "emiliesv-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoBw: file(relativePath: { eq: "emiliesv-logo-bw.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  switch (props.selectLogo) {
    case "logo":
      return (
        <a className={props.className} href="/">
          <Img fluid={data.logo.childImageSharp.fluid} alt="Logo Emilie" />
        </a>
      )
      break

    case "logoBw":
      return (
        <a className={props.className} href="/">
          <Img fluid={data.logoBw.childImageSharp.fluid} alt="Logo Emilie" />
        </a>
      )
      break

    default:
      return "Warning: No logo selected!"
  }
}

export default Logo
