import React from "react"
import ProductV1 from "../../utils/ProductV1"
import { useStaticQuery, graphql } from "gatsby"
import productSectionStyles from "./productSection.module.css"

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
            categories {
              name
            }
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
    }
  `)
  return (
    <section className={productSectionStyles.mainContainer}>
      <h1 className={productSectionStyles.h1}>
        {`/// ${data.allWcProducts.edges[0].node.categories[0].name}`}
      </h1>
      <div className={productSectionStyles.productsContainer}>
        {data.allWcProducts.edges.map(element => (
          <ProductV1
            key={element.node.wordpress_id}
            productTitle={element.node.name}
            fluid={element.node.images[0].localFile.childImageSharp.fluid}
            price={element.node.price}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductSection
