import React from "react"
import ProductV1 from "../../utils/ProductV1"
import { useStaticQuery, graphql } from "gatsby"
import ProductSectionContainer from "../../containers/ProductSectionContainer"

function ProductSection() {
  const data = useStaticQuery(graphql`
    query {
      allWcProducts(
        filter: { categories: { elemMatch: { name: { eq: "sandalias" } } } }
        sort: { fields: wordpress_id, order: DESC }
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
          }
        }
      }
      allWordpressPage(filter: { menu_order: { eq: 2 } }) {
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
        <ProductV1
          key={element.node.wordpress_id}
          productTitle={element.node.name}
          fluid={element.node.images[0].localFile.childImageSharp.fluid}
          price={element.node.price}
        />
      ))}
    </ProductSectionContainer>
  )
}

export default ProductSection
