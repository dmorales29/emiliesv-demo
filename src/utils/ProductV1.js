import React from "react"
import { Link } from "gatsby"
import { FaRegHeart, FaHeart, FaShoppingCart } from "react-icons/fa"

import productV1Styles from "./productV1.module.css"
import { formatter } from "../helpers/index"

const ProductV1 = ({ isNew, imgSrc, productTitle, price, href, imgAlt }) => {
  function handleClick(e) {
    const favorite = e.currentTarget.querySelector("button .favorite")
    const notFavorite = e.currentTarget.querySelector("button .notFavorite")

    if (favorite.style.display === "none") {
      favorite.style.display = "block"
      notFavorite.style.display = "none"
    } else {
      notFavorite.style.display = "block"
      favorite.style.display = "none"
    }
  }

  return (
    <div className={productV1Styles.container}>
      <Link to={href}>
        {isNew}
        <img className={productV1Styles.image} src={imgSrc} alt={imgAlt} />
      </Link>
      <div className={productV1Styles.productActions}>
        <div>
          <Link to={href} className={productV1Styles.productTitle}>
            <span>{productTitle}</span>
          </Link>
          <span className={productV1Styles.productPrice}>
            {formatter.format(price)}
          </span>
        </div>
        <div className={productV1Styles.productButtons}>
          <button
            className={`${productV1Styles.favorite} buttonFavorite`}
            onClick={e => handleClick(e)}
          >
            <span className={`${productV1Styles.empty} favorite`}>
              <FaRegHeart size="30px" />
            </span>
            <span className={`${productV1Styles.full} notFavorite`}>
              <FaHeart size="30px" />
            </span>
          </button>
          <button>
            <span className={productV1Styles.shopCart}>
              <FaShoppingCart size="30px" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductV1
