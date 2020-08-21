import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import sliderStyles from "./slider.module.css"
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io"
import { useState } from "react"

function Slider() {
  const [x, setX] = useState(0)

  //Revisar lógica de slider y el global state para los media query
  //Cuando se hace resize y desaparece un slide sale disable la flecha

  const goLeft = () => {
    setX(x + 120)

    if (x === 0) {
      setX(0)
    }
  }

  const goRight = () => {
    if (window.innerWidth < 768) {
      setX(x - 100)
    } else {
      setX(x - 120)
    }

    if (x <= -360 && window.innerWidth > 1023) {
      setX(0)
    } else if (x <= -480 && window.innerWidth <= 1023) {
      setX(0)
    } else if (x <= -960 && window.innerWidth < 768) {
      setX(0)
    }
  }

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
    <div className={sliderStyles.slider_container}>
      <h2>Nuevos estilos</h2>
      <div className={sliderStyles.novedades_container}>
        {Object.keys(data.novedades.edges[0].node.acf).map(nameOfElement => (
          <a
            style={{ transform: `translateX(${x}%)` }}
            href="/"
            key={nameOfElement}
            className={sliderStyles.wrapper_images}
          >
            <span className={sliderStyles.new_badge}>New</span>
            <Img
              className={sliderStyles.novedades_container_img}
              fluid={
                data.novedades.edges[0].node.acf[nameOfElement].localFile
                  .childImageSharp.fluid
              }
            />
          </a>
        ))}
      </div>
      <div className={sliderStyles.slider_controller}>
        <button
          className={
            sliderStyles.icon + (x >= 0 ? " " + sliderStyles.opacity : "")
          }
          onClick={() => goLeft()}
        >
          <IoIosArrowDropleftCircle
            viewBox="50 50 410 410"
            size="30px"
            color="var(--medium-gray-2)"
          />
        </button>
        <button
          className={
            sliderStyles.icon +
            (x <= -360 && window.innerWidth > 1023
              ? " " + sliderStyles.opacity
              : x <= -480 && window.innerWidth <= 1023
              ? " " + sliderStyles.opacity
              : "")
          }
          onClick={() => goRight()}
        >
          <IoIosArrowDroprightCircle
            viewBox="50 50 410 410"
            size="30px"
            color="var(--medium-gray-2)"
          />
        </button>
      </div>
    </div>
  )
}

export default Slider
