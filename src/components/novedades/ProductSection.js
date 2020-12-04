import React, { useState, useEffect } from "react"

import ProductV1 from "../../utils/ProductV1"
import ProductSectionContainer from "../../containers/ProductSectionContainer"
import BadgeNew from "../../utils/BadgeNew"

function ProductSection() {
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

      setAllData(filterNovedades)
    }

    fetchData()
  }, [])

  return (
    <>
      <ProductSectionContainer title="Novedades">
        {allData.length > 0 ? (
          allData.map(
            element =>
              element.categories.length > 1 && (
                <ProductV1
                  key={element.sku}
                  href={element.sku}
                  productTitle={element.name}
                  imgSrc={`http://localhost:1337${element.images[0].formats.small.url}`}
                  imgAlt={element.alt}
                  price={element.price}
                  isNew={element.categories.length > 1 && <BadgeNew />}
                />
              )
          )
        ) : (
          <div className="lds-ellipsis dark">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </ProductSectionContainer>
    </>
  )
}

export default ProductSection
