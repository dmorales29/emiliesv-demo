import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io"

import sliderStyles from "./slider.module.css"
import BadgeNew from "../../utils/BadgeNew"

function Slider() {
  const [x, setX] = useState(0)

  //Revisar lógica de slider y el global state para los media query
  //Cuando se hace resize y desaparece un slide sale disable la flecha

  const goLeft = () => {
    if (window.innerWidth < 768) {
      setX(x + 100)
    } else {
      setX(x + 120)
    }

    if (x >= 0) {
      setX(0)
    }
  }

  const goRight = () => {
    if (window.innerWidth < 768) {
      setX(x - 100)
    } else {
      setX(x - 120)
    }

    if (x <= -360 && window.innerWidth > 1023) {
      setX(0)
    } else if (x <= -480 && window.innerWidth <= 1023) {
      setX(0)
    }
  }

  const [allData, setAllData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchSandalias = await fetch("http://localhost:1337/sandaliases/")
      const sandaliasData = await fetchSandalias.json()

      const fetchFlats = await fetch("http://localhost:1337/flats/")
      const flatsData = await fetchFlats.json()

      const fetchPlataformas = await fetch("http://localhost:1337/plataformas/")
      const plataformasData = await fetchPlataformas.json()

      const fetchFlatforms = await fetch("http://localhost:1337/flatforms/")
      const flatformsData = await fetchFlatforms.json()

      const myDataResult = sandaliasData.concat(
        flatsData,
        plataformasData,
        flatformsData
      )

      const filterNovedades = myDataResult.filter(
        element => element.categories.length > 1 && element
      )

      // Order new entries
      filterNovedades.sort((a, b) => (a.created_at < b.created_at ? 1 : -1))

      // Slice first 6 elements
      const latestNews = filterNovedades.slice(0, 6)

      setAllData(latestNews)
    }

    fetchData()
  }, [])

  return (
    <div className={sliderStyles.slider_container}>
      <h2>Nuevos estilos</h2>
      <div className={sliderStyles.novedades_container}>
        {allData.map(element => (
          <Link
            style={{ transform: `translateX(${x}%)` }}
            to={`/novedades/${element.sku}`}
            key={element.sku}
            className={sliderStyles.wrapper_images}
          >
            <BadgeNew />
            <div className={sliderStyles.wrapper_image}>
              <img
                src={`http://localhost:1337${element.images[0].formats.large.url}`}
                alt={element.alt}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={sliderStyles.slider_controller}>
        <button
          className={
            sliderStyles.icon + (x >= 0 ? " " + sliderStyles.opacity : "")
          }
          onClick={() => goLeft()}
        >
          <IoIosArrowDropleftCircle
            viewBox="50 50 410 410"
            size="30px"
            color="var(--medium-gray-2)"
          />
        </button>
        <button
          className={
            sliderStyles.icon +
            (x <= -360 && window.innerWidth > 1023
              ? " " + sliderStyles.opacity
              : x <= -480 && window.innerWidth <= 1023
              ? " " + sliderStyles.opacity
              : "")
          }
          onClick={() => goRight()}
        >
          <IoIosArrowDroprightCircle
            viewBox="50 50 410 410"
            size="30px"
            color="var(--medium-gray-2)"
          />
        </button>
      </div>
    </div>
  )
}

export default Slider
