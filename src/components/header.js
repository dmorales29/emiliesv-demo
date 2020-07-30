import React, { useState } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import HeaderStyles from "./header.module.css"
import { Helmet } from "react-helmet"

const Header = () => {
  const [menuMobile, showMenuMobile] = useState(false)

  // function checkSize() {
  //   window.addEventListener("resize", function (event) {
  //     if (menuMobile && window.innerWidth > 768) {
  //       return true
  //     }
  //     return false
  //   })
  // }

  //console.log(checkSize)

  return (
    <StaticQuery
      query={graphql`
        {
          allImageSharp(sort: { order: ASC, fields: id }) {
            edges {
              node {
                fluid(maxWidth: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          allWordpressPage(sort: { fields: [menu_order], order: ASC }) {
            edges {
              node {
                slug
                menu_order
                title
              }
            }
          }
        }
      `}
      render={data => (
        <header className={HeaderStyles.header}>
          <Helmet
            bodyAttributes={{
              class: `${
                menuMobile && window.innerWidth <= 768
                  ? HeaderStyles.prevent_scroll
                  : menuMobile && window.innerWidth > 768
                  ? ""
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
                      if (window.innerWidth <= 768) {
                        showMenuMobile(!menuMobile)
                      }
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
