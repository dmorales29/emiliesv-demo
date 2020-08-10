import React, { useState, useLayoutEffect } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import globalStyles from "../global.module.css"
import headerStyles from "./header.module.css"
import { Helmet } from "react-helmet"

const Header = () => {
  const [menuMobile, showMenuMobile] = useState(false)
  const [size, setResize] = useState({
    width: window.innerWidth,
  })

  //Revisar que no se esté renderizando más de lo necesario

  //Recién cargada la página al abrir menú en mobile y clikear
  //a otra pestaña hay unflasheo de transición del home
  //(desaparece menú, muestra home y luego se va a la pestaña asignada)

  useLayoutEffect(() => {
    function handleresize() {
      setResize({
        width: window.innerWidth,
      })
    }

    window.addEventListener("resize", handleresize)

    return () => {
      window.removeEventListener("resize", handleresize)
    }
  }, [])

  const data = useStaticQuery(
    graphql`
      query GET_MENU_AND_LOGO {
        allWordpressPage(sort: { fields: [menu_order], order: ASC }, skip: 1) {
          edges {
            node {
              slug
              menu_order
              title
            }
          }
        }
        logo: file(relativePath: { eq: "emiliesv-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <header className={headerStyles.header}>
      <Helmet
        bodyAttributes={{
          class: `${
            size.width <= 768 && menuMobile ? globalStyles.prevent_scroll : ""
          }`,
        }}
      />
      <nav className={headerStyles.nav_container}>
        <a className={headerStyles.a_link_img} href="/">
          <Img
            className={headerStyles.a_link.img}
            fluid={data.logo.childImageSharp.fluid}
            alt="Logo Emilie"
          />
        </a>
        <ul
          className={
            headerStyles.ul_container +
            `${menuMobile ? " " + globalStyles.visible : ""}`
          }
        >
          <li className={headerStyles.li_item}>
            <Link
              className={headerStyles.a_link}
              to="/"
              activeStyle={{
                color: "var(--color-1)",
                borderBottom: "solid var(--color-1) 2px",
                paddingBottom: "2px",
              }}
              onClick={() => {
                size.width <= 768 && menuMobile && showMenuMobile(!menuMobile)
              }}
            >
              Home
            </Link>
          </li>

          {data.allWordpressPage.edges.map(menuItem => (
            <li key={menuItem.node.slug} className={headerStyles.li_item}>
              <Link
                className={headerStyles.a_link}
                to={`/${menuItem.node.slug}`}
                activeStyle={{
                  color: "#FF786C",
                  borderBottom: "solid #FF786C 2px",
                  paddingBottom: "2px",
                }}
                onClick={() => {
                  size.width <= 768 && menuMobile && showMenuMobile(!menuMobile)
                }}
              >
                {menuItem.node.title}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={
            headerStyles.menu_burguer_container +
            `${menuMobile ? " " + headerStyles.change : ""}`
          }
          onClick={() => {
            showMenuMobile(!menuMobile)
          }}
          aria-hidden="true"
        >
          <div className={headerStyles.bar1}></div>
          <div className={headerStyles.bar2}></div>
          <div className={headerStyles.bar3}></div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
