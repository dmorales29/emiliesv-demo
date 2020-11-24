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
            name
            price
            images {
              localFile {
                childImageSharp {
                  fluid(jpegQuality: 100, maxWidth: 1080, maxHeight: 1080) {
                    aspectRatio
                    base64
                    originalImg
                    originalName
                    presentationHeight
                    presentationWidth
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    tracedSVG
                    srcWebp
                  }
                }
              }
            }
            wordpress_id
            categories {
              name
            }
            attributes {
              name
              options
            }
            sku
            short_description
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
      context: node,
    })
  })

  const flats = await graphql(`
    query {
      allWcProducts(
        filter: { categories: { elemMatch: { name: { eq: "flats" } } } }
      ) {
        edges {
          node {
            name
            price
            images {
              localFile {
                childImageSharp {
                  fluid(jpegQuality: 100, maxWidth: 1080, maxHeight: 1080) {
                    aspectRatio
                    base64
                    originalImg
                    originalName
                    presentationHeight
                    presentationWidth
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    tracedSVG
                    srcWebp
                  }
                }
              }
            }
            wordpress_id
            categories {
              name
            }
            attributes {
              name
              options
            }
            sku
            short_description
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
      context: node,
    })
  })

  const plataformas = await graphql(`
    query {
      allWcProducts(
        filter: { categories: { elemMatch: { name: { eq: "plataformas" } } } }
      ) {
        edges {
          node {
            name
            price
            images {
              localFile {
                childImageSharp {
                  fluid(jpegQuality: 100, maxWidth: 1080, maxHeight: 1080) {
                    aspectRatio
                    base64
                    originalImg
                    originalName
                    presentationHeight
                    presentationWidth
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    tracedSVG
                    srcWebp
                  }
                }
              }
            }
            wordpress_id
            categories {
              name
            }
            attributes {
              name
              options
            }
            sku
            short_description
          }
        }
      }
    }
  `)

  if (plataformas.errors) {
    throw plataformas.errors
  }

  plataformas.data.allWcProducts.edges.forEach(({ node }) => {
    createPage({
      path:
        node.categories[0].name === "novedades"
          ? `/novedades/${node.wordpress_id}`
          : `${node.categories[0].name}/${node.wordpress_id}`,
      component: productTemplate,
      context: node,
    })
  })

  const flatforms = await graphql(`
    query {
      allWcProducts(
        filter: { categories: { elemMatch: { name: { eq: "flatforms" } } } }
      ) {
        edges {
          node {
            name
            price
            images {
              localFile {
                childImageSharp {
                  fluid(jpegQuality: 100, maxWidth: 1080, maxHeight: 1080) {
                    aspectRatio
                    base64
                    originalImg
                    originalName
                    presentationHeight
                    presentationWidth
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    tracedSVG
                    srcWebp
                  }
                }
              }
            }
            wordpress_id
            categories {
              name
            }
            attributes {
              name
              options
            }
            sku
            short_description
          }
        }
      }
    }
  `)

  if (flatforms.errors) {
    throw flatforms.errors
  }

  flatforms.data.allWcProducts.edges.forEach(({ node }) => {
    createPage({
      path:
        node.categories.length > 1 && node.categories[1].name === "novedades"
          ? `/novedades/${node.wordpress_id}`
          : `${node.categories[0].name}/${node.wordpress_id}`,
      component: productTemplate,
      context: node,
    })
  })
}
