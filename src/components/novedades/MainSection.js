import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SingleModuleV2 from "../../containers/SingleModuleV2"
import MainSectionPageContainer from "../../containers/MainSectionPageContainer"

function MainSection() {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPage(filter: { menu_order: { eq: 1 } }) {
        edges {
          node {
            title
            acf {
              imagen_principal {
                localFile {
                  childImageSharp {
                    fluid(jpegQuality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              slogan_principal
            }
          }
        }
      }
    }
  `)

  return (
    <MainSectionPageContainer>
      <SingleModuleV2
        selectSide="right"
        titleData={data.allWordpressPage.edges[0].node.acf.slogan_principal}
        SquareImageData={
          data.allWordpressPage.edges[0].node.acf.imagen_principal.localFile
            .childImageSharp.fluid
        }
        titleSquare={data.allWordpressPage.edges[0].node.title}
      />
    </MainSectionPageContainer>
  )
}

export default MainSection
