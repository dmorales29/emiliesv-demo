import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import HeaderStyles from "./Header.module.css"
import Img from "gatsby-image"

const Header = () => (
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
      <header>
        <nav className={HeaderStyles.nav_container}>
          <a className={HeaderStyles.a_link} href="/">
            <Img
              className={HeaderStyles.a_link.img}
              fluid={data.allImageSharp.edges[1].node.fluid}
              alt=""
            />
          </a>
          <ul className={HeaderStyles.ul_container}>
            {data.allWordpressPage.edges.map(menuItem => (
              <li key={menuItem.node.slug} className={HeaderStyles.li_item}>
                <Link
                  className={HeaderStyles.a_link}
                  to={`/${menuItem.node.slug}`}
                  activeStyle={{
                    color: "#FF786C",
                    borderBottom: "solid #FF786C 3px",
                    paddingBottom: "5px",
                    transition: "all 2s",
                  }}
                >
                  {menuItem.node.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
