import React from "react"
import productSectionContainerStyles from "./productSectionContainer.module.css"

function ProductSectionContainer({ children, title }) {
  return (
    <section className={productSectionContainerStyles.mainContainer}>
      <h1 className={productSectionContainerStyles.h1}>{`/// ${title}`}</h1>
      <div className={productSectionContainerStyles.productsContainer}>
        {children}
      </div>
    </section>
  )
}

export default ProductSectionContainer
