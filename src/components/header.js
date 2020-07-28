import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

const Header = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressPage(
          sort: { fields: [menu_order], order: ASC }
          filter: { menu_order: { ne: 0 } }
        ) {
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
        <div></div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {data.allWordpressPage.edges.map(menuItem => (
              <li key={menuItem.node.slug}>
                <Link to={`/${menuItem.node.slug}`}>{menuItem.node.title}</Link>
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
