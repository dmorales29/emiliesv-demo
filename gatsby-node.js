const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Product.js`)
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

  const flats = await graphql(`
    query {
      allWcProducts(
        filter: { categories: { elemMatch: { name: { eq: "flats" } } } }
        sort: { order: [DESC, DESC], fields: [categories___name, date_created] }
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

  if (flats.errors) {
    throw flats.errors
  }

  flats.data.allWcProducts.edges.forEach(({ node }) => {
    createPage({
      path:
        node.categories.length > 1 && node.categories[1].name === "novedades"
          ? `/novedades/${node.wordpress_id}`
          : `${node.categories[0].name}/${node.wordpress_id}`,
      component: productTemplate,
    })
  })
}
