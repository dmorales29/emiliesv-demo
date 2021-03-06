import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProductV1 from "../../utils/ProductV1"
import ProductSectionContainer from "../../containers/ProductSectionContainer"
import BadgeNew from "../../utils/BadgeNew"

function ProductSection() {
  const data = useStaticQuery(graphql`
    query {
      allWcProducts(
        filter: { categories: { elemMatch: { name: { eq: "flats" } } } }
        sort: { order: [DESC, DESC], fields: [categories___name, date_created] }
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
      allWordpressPage(filter: { menu_order: { eq: 3 } }) {
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
      {data.allWcProducts.edges.map(element => {
        return (
          <ProductV1
            key={element.node.wordpress_id}
            href={
              element.node.categories.length > 1 &&
              element.node.categories[1].name === "novedades"
                ? `/novedades/${element.node.wordpress_id}`
                : `${element.node.wordpress_id}`
            }
            productTitle={element.node.name}
            fluid={element.node.images[0].localFile.childImageSharp.fluid}
            price={element.node.price}
            isNew={
              element.node.categories.length > 1 &&
              element.node.categories[1].name === "novedades" && <BadgeNew />
            }
          />
        )
      })}
    </ProductSectionContainer>
  )
}

export default ProductSection
