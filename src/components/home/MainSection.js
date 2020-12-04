import React from "react"

import mainSectionStyles from "./mainSection.module.css"
import Slider from "./Slider"
import MainCTAComponent from "./MainCTAComponent"

function MainSection({ data, loader }) {
  return loader ? (
    <section className={mainSectionStyles.main_container}>
      <MainCTAComponent titleData={data[0].slogan_principal} />
      <div className={mainSectionStyles.main_container_image}>
        <img
          className={mainSectionStyles.main_image}
          src={`http://localhost:1337${data[0].imagen_principal.url}`}
          alt={data[0].alt_imagen_principal}
        />
      </div>
      <img
        className={mainSectionStyles.background_image}
        src={`http://localhost:1337${data[0].decoration_02.url}`}
        alt={data[0].alt_decoration_01}
      />
      <Slider />
    </section>
  ) : (
    <div className="lds-ellipsis dark">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default MainSection
