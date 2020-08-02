import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import sliderStylers from "./slider.module.css"

function Slider() {
  const data = useStaticQuery(graphql`
    query {
      novedades: allWordpressPage(filter: { slug: { eq: "novedades" } }) {
        edges {
          node {
            acf {
              imagen_novedad_1 {
                localFile {
                  childImageSharp {
                    fluid(jpegQuality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              imagen_novedad_2 {
                localFile {
                  childImageSharp {
                    fluid(jpegQuality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              imagen_novedad_3 {
                localFile {
                  childImageSharp {
                    fluid(jpegQuality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              imagen_novedad_4 {
                localFile {
                  childImageSharp {
                    fluid(jpegQuality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              imagen_novedad_5 {
                localFile {
                  childImageSharp {
                    fluid(jpegQuality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              imagen_novedad_6 {
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
    }
  `)

  return (
    <div className={sliderStylers.slider_container}>
      <h2>Nuevos estilos</h2>
      <div className={sliderStylers.novedades_container}>
        {Object.keys(data.novedades.edges[0].node.acf).map(nameOfElement => (
          <a
            href=""
            key={nameOfElement}
            className={sliderStylers.wrapper_images}
          >
            <span className={sliderStylers.new_badge}>New</span>
            <Img
              className={sliderStylers.novedades_container_img}
              fluid={
                data.novedades.edges[0].node.acf[nameOfElement].localFile
                  .childImageSharp.fluid
              }
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Slider
