import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import navBarStyles from "./navBar.module.css"

function Navbar(props) {
  const data = useStaticQuery(
    graphql`
      query {
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
    `
  )

  const myMenu = (
    <nav className={props.navClassName}>
      <ul>
        {data.allWordpressPage.edges.map(menuItem => (
          <li key={menuItem.node.slug} className={navBarStyles.li_item}>
            <Link
              className={navBarStyles.a_link}
              to={
                menuItem.node.slug === "home" ? "/" : `/${menuItem.node.slug}`
              }
              activeStyle={{
                color: "var(--medium-gray-2)",
                paddingBottom: "2px",
              }}
            >
              {menuItem.node.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
  return myMenu
}

export default Navbar
