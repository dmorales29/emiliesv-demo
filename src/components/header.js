import React, { useState, useLayoutEffect } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import HeaderStyles from "./header.module.css"
import { Helmet } from "react-helmet"

export const query = graphql`
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
    allImageSharp(sort: { order: ASC, fields: id }) {
      edges {
        node {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Header = () => {
  const [menuMobile, showMenuMobile] = useState(false)
  const [size, setResize] = useState({
    width: window.innerWidth,
  })

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

  return (
    <StaticQuery
      query={query}
      render={data => (
        <header className={HeaderStyles.header}>
          <Helmet
            bodyAttributes={{
              class: `${
                size.width <= 768 && menuMobile
                  ? HeaderStyles.prevent_scroll
                  : ""
              }`,
            }}
          />
          <nav className={HeaderStyles.nav_container}>
            <a className={HeaderStyles.a_link_img} href="/">
              <Img
                className={HeaderStyles.a_link.img}
                fluid={data.allImageSharp.edges[1].node.fluid}
                alt=""
              />
            </a>
            <ul
              className={
                HeaderStyles.ul_container +
                `${menuMobile ? " " + HeaderStyles.visible : ""}`
              }
            >
              <li className={HeaderStyles.li_item}>
                <Link
                  className={HeaderStyles.a_link}
                  to="/"
                  activeStyle={{
                    color: "#FF786C",
                    borderBottom: "solid #FF786C 2px",
                    paddingBottom: "2px",
                  }}
                  onClick={() => {
                    size.width <= 768 &&
                      menuMobile &&
                      showMenuMobile(!menuMobile)
                  }}
                >
                  Home
                </Link>
              </li>

              {data.allWordpressPage.edges.map(menuItem => (
                <li key={menuItem.node.slug} className={HeaderStyles.li_item}>
                  <Link
                    className={HeaderStyles.a_link}
                    to={`/${menuItem.node.slug}`}
                    activeStyle={{
                      color: "#FF786C",
                      borderBottom: "solid #FF786C 2px",
                      paddingBottom: "2px",
                    }}
                    onClick={() => {
                      size.width <= 768 &&
                        menuMobile &&
                        showMenuMobile(!menuMobile)
                    }}
                  >
                    {menuItem.node.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className={
                HeaderStyles.menu_burguer_container +
                `${menuMobile ? " " + HeaderStyles.change : ""}`
              }
              onClick={() => {
                showMenuMobile(!menuMobile)
              }}
              aria-hidden="true"
            >
              <div className={HeaderStyles.bar1}></div>
              <div className={HeaderStyles.bar2}></div>
              <div className={HeaderStyles.bar3}></div>
            </div>
          </nav>
        </header>
      )}
    />
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
