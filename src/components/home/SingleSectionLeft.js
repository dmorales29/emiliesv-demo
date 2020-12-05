import React from "react"
import SingleModule from "../../containers/SingleModule"

function SingleSectionLeft({ data, loader }) {
  return (
    loader && (
      <section>
        <SingleModule
          selectSide="left"
          titleData={data[0].slogan_sandalias}
          to="sandalias"
          btnCTA="Encuentra el ideal"
          srcSquareImage={`http://localhost:1337${data[0].imagen_sandalias.url}`}
          altSquareImage={data[0].alt_imagen_sandalias}
          titleSquare="sandalias"
          arrowDecorationSrc={`http://localhost:1337${data[0].decoration_01.url}`}
          arrowDecorationAlt={data[0].alt_decoration_01}
          polkaDecorationSrc={`http://localhost:1337${data[0].decoration_03.url}`}
          polkaDecorationAlt={data[0].alt_decoration_03}
        />
      </section>
    )
  )
}

export default SingleSectionLeft
