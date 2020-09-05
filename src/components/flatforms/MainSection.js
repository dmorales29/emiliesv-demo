import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SingleModuleV2 from "../../containers/SingleModuleV2"
import MainSectionPageContainer from "../../containers/MainSectionPageContainer"

function MainSection() {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPage(filter: { slug: { eq: "home" } }) {
        edges {
          node {
            acf {
              imagen_flatforms {
                localFile {
                  childImageSharp {
                    fluid(jpegQuality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              slogan_plataformas_flatfmors
            }
          }
        }
      }
      title: allWordpressPage(filter: { menu_order: { eq: 5 } }) {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  return (
    <MainSectionPageContainer>
      <SingleModuleV2
        selectSide="right"
        titleData={
          data.allWordpressPage.edges[0].node.acf.slogan_plataformas_flatfmors
        }
        SquareImageData={
          data.allWordpressPage.edges[0].node.acf.imagen_flatforms.localFile
            .childImageSharp.fluid
        }
        titleSquare={data.title.edges[0].node.title}
      />
    </MainSectionPageContainer>
  )
}

export default MainSection
