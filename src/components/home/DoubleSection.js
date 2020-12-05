import React from "react"
import SquareImage from "../../containers/SquareImage"
import MainCTABtn from "../buttons/MainCTABtn"
import doubleSectionStyles from "./doubleSection.module.css"

function DoubleSection({ data, loader }) {
  return (
    loader && (
      <section className={doubleSectionStyles.mainSection}>
        <h1>{data[0].slogan_plataformas_y_flatforms}</h1>
        <div className={doubleSectionStyles.imagesContainer}>
          <div className={doubleSectionStyles.imageLeft}>
            <div>
              <SquareImage
                srcSquareImage={`http://localhost:1337${data[0].imagen_plataformas.url}`}
                titleSquare="plataformas"
                altSquareImage={data[0].alt_imagen_plataformas}
              />
              <MainCTABtn to="plataformas" btnCTA="Descubre" />
            </div>
          </div>
          <div className={doubleSectionStyles.imageRight}>
            <div>
              <SquareImage
                srcSquareImage={`http://localhost:1337${data[0].imagen_flatforms.url}`}
                titleSquare="flatforms"
                altSquareImage={data[0].alt_imagen_flatforms}
              />
              <MainCTABtn to="flatforms" btnCTA="Descubre" />
            </div>
          </div>
        </div>
        <img
          className={doubleSectionStyles.polkaDecoration}
          src={`http://localhost:1337${data[0].decoration_03.url}`}
          alt={data[0].alt_decoration_03}
        />
      </section>
    )
  )
}

export default DoubleSection
