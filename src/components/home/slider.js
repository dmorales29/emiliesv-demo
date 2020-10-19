import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io"

import sliderStyles from "./slider.module.css"
import BadgeNew from "../../utils/BadgeNew"

function Slider() {
  const [x, setX] = useState(0)

  //Revisar lógica de slider y el global state para los media query
  //Cuando se hace resize y desaparece un slide sale disable la flecha

  const goLeft = () => {
    if (window.innerWidth < 768) {
      setX(x + 100)
    } else {
      setX(x + 120)
    }

    if (x >= 0) {
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
    }
  }

  const data = useStaticQuery(graphql`
    query {
      allWcProducts(
        filter: { categories: { elemMatch: { name: { eq: "novedades" } } } }
        sort: { fields: wordpress_id, order: DESC }
        limit: 6
      ) {
        edges {
          node {
            images {
              localFile {
                childImageSharp {
                  fluid(jpegQuality: 100, maxWidth: 200, maxHeight: 142) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            wordpress_id
          }
        }
      }
    }
  `)

  return (
    <div className={sliderStyles.slider_container}>
      <h2>Nuevos estilos</h2>
      <div className={sliderStyles.novedades_container}>
        {data.allWcProducts.edges.map(nameOfElement => (
          <Link
            style={{ transform: `translateX(${x}%)` }}
            to={`/novedades/${nameOfElement.node.wordpress_id}`}
            key={nameOfElement.node.wordpress_id}
            className={sliderStyles.wrapper_images}
          >
            <BadgeNew />
            <Img
              className={sliderStyles.novedades_container_img}
              fluid={
                nameOfElement.node.images[0].localFile.childImageSharp.fluid
              }
            />
          </Link>
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
