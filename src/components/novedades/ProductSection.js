import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProductV1 from "../../utils/ProductV1"
import ProductSectionContainer from "../../containers/ProductSectionContainer"
import BadgeNew from "../../utils/BadgeNew"

function ProductSection() {
  const data = useStaticQuery(graphql`
    query {
      allWcProducts(
        filter: { categories: { elemMatch: { name: { eq: "novedades" } } } }
        sort: { fields: wordpress_id, order: DESC }
        limit: 6
      ) {
        edges {
          node {
            name
            price
            images {
              localFile {
                childImageSharp {
                  fluid(jpegQuality: 100, maxWidth: 350, maxHeight: 250) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            wordpress_id
            categories {
              name
            }
          }
        }
      }
      allWordpressPage(filter: { menu_order: { eq: 1 } }) {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  return (
    <ProductSectionContainer title={data.allWordpressPage.edges[0].node.title}>
      {data.allWcProducts.edges.map(element => (
        <>
          <ProductV1
            key={element.node.wordpress_id}
            productTitle={element.node.name}
            fluid={element.node.images[0].localFile.childImageSharp.fluid}
            price={element.node.price}
            isNew={
              element.node.categories[0].name === "novedades" ? (
                <BadgeNew />
              ) : (
                <span>asd</span>
              )
            }
          />
        </>
      ))}
    </ProductSectionContainer>
  )
}

export default ProductSection
