import React from "react"
import SingleModule from "../../containers/SingleModule"

function SingleSectionRight({ data, loader }) {
  return (
    loader && (
      <section>
        <SingleModule
          selectSide="right"
          titleData={data[0].slogan_flats}
          to="flats"
          btnCTA="Descubre"
          srcSquareImage={`http://localhost:1337${data[0].imagen_flats.url}`}
          altSquareImage={data[0].alt_imagen_flats}
          titleSquare="flats"
          arrowDecorationSrc={`http://localhost:1337${data[0].decoration_01.url}`}
          arrowDecorationAlt={data[0].alt_decoration_01}
          polkaDecorationSrc={`http://localhost:1337${data[0].decoration_03.url}`}
          polkaDecorationAlt={data[0].alt_decoration_03}
        />
      </section>
    )
  )
}

export default SingleSectionRight
