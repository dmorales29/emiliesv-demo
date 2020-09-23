const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Product.js`)
  const novedades = await graphql(`
    query {
      allWcProducts(
        filter: { categories: { elemMatch: { name: { eq: "novedades" } } } }
        limit: 6
      ) {
        edges {
          node {
            wordpress_id
            categories {
              name
            }
          }
        }
      }
    }
  `)

  if (novedades.errors) {
    throw novedades.errors
  }

  novedades.data.allWcProducts.edges.forEach(({ node }) => {
    createPage({
      path: `${node.categories[0].name}/${node.wordpress_id}`,
      component: productTemplate,
    })
  })

  const sandalias = await graphql(`
    query {
      allWcProducts(
        filter: { categories: { elemMatch: { name: { eq: "sandalias" } } } }
      ) {
        edges {
          node {
            wordpress_id
            categories {
              name
            }
          }
        }
      }
    }
  `)

  if (sandalias.errors) {
    throw sandalias.errors
  }

  sandalias.data.allWcProducts.edges.forEach(({ node }) => {
    createPage({
      path: `${node.categories[0].name}/${node.wordpress_id}`,
      component: productTemplate,
    })
  })
}
