import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FaChevronDown } from "react-icons/fa"

import { MainImage } from "./MainImage"
import productDetailsStyles from "./productDetails.module.css"
import BadgeNew from "../../../utils/BadgeNew"
import { formatter } from "../../../helpers/index"
import MainCTA from "../../buttons/MainCTABtn"
import InvertedMainCTABtn from "../../buttons/InvertedMainCTABtn"
import { FaShoppingCart, FaHeart } from "react-icons/fa"

export default function ProductDetails({
  name,
  price,
  images,
  categories,
  attributes,
  sku,
  short_description,
}) {
  const [imageSelected, setImageSelected] = useState(0)
  const [size, setSize] = useState({
    sizeSelected: attributes[1].options[0],
    sizeId: "talla0",
    sizeIsOpen: false,
  })
  const [color, setColor] = useState({
    colorSelected: attributes[0].options[0],
    colorId: "color0",
    colorIsOpen: false,
  })
  const [counter, setCounter] = useState(0)

  const imageHandleOnClick = e => {
    setImageSelected(e.currentTarget.id)

    if (imageSelected !== e.currentTarget.id) {
      document
        .getElementById(imageSelected)
        .classList.remove(productDetailsStyles.active)

      e.currentTarget.classList.add(productDetailsStyles.active)
    }
  }

  const sizeDropDownOnclick = (label, dropdownOptions, e) => {
    function checkClickedElement(e) {
      e.stopImmediatePropagation()
      if (!e.target.classList.contains(dropdownOptions) || size.sizeIsOpen) {
        //Clicked outside, close dropdown, removed the listener
        setSize({ ...size, sizeIsOpen: false })
        document.removeEventListener("click", checkClickedElement)
      } else {
        //Clicked inside, removed the listener
        document.removeEventListener("click", checkClickedElement)
      }
    }

    if ((e.target.id = label) && !size.sizeIsOpen) {
      //Clicked id span, added the listener, open dropdown
      setSize({ ...size, sizeIsOpen: true })
      document
        .getElementById(size.sizeId)
        .classList.add(productDetailsStyles.optionSelected)
      document.addEventListener("click", checkClickedElement)
    }
  }

  const sizeOnClick = e => {
    document
      .getElementById(size.sizeId)
      .classList.remove(productDetailsStyles.optionSelected)
    setSize({
      sizeSelected: e.target.innerHTML,
      sizeId: e.target.id,
      sizeIsOpen: false,
    })
  }

  const colorHandleDropDown = (label, dropdownOptions, e) => {
    function checkClickedElement(e) {
      e.stopImmediatePropagation()
      if (!e.target.classList.contains(dropdownOptions) || color.colorIsOpen) {
        //Clicked outside, close dropdown, removed the listener
        setColor({ ...color, colorIsOpen: false })
        document.removeEventListener("click", checkClickedElement)
      } else {
        //Clicked inside, removed the listener
        document.removeEventListener("click", checkClickedElement)
      }
    }

    if ((e.target.id = label) && !color.colorIsOpen) {
      //Clicked id span, added the listener, open dropdown
      setColor({ ...color, colorIsOpen: true })
      document
        .getElementById(color.colorId)
        .classList.add(productDetailsStyles.optionSelected)
      document.addEventListener("click", checkClickedElement)
    }
  }

  const colorHandleOnClick = e => {
    document
      .getElementById(color.colorId)
      .classList.remove(productDetailsStyles.optionSelected)
    setColor({
      colorSelected: e.target.innerHTML,
      colorId: e.target.id,
      colorIsOpen: false,
    })
  }

  const addQTY = e => {
    setCounter(counter + 1)
  }

  const reduceQTY = e => {
    if (counter === 0) {
      setCounter(0)
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <div className={productDetailsStyles.breadcrumbs}>
        <span>
          <Link to={`/`}>Home</Link>
        </span>
        {` > `}
        <span>
          <Link
            to={`/${categories.length > 1 ? "novedades" : categories[0].name}`}
          >
            {categories.length > 1 ? "novedades" : categories[0].name}
          </Link>
        </span>
        {` > `}
        <span className={productDetailsStyles.breadcrumbsActive}>{name}</span>
      </div>

      <div className={productDetailsStyles.productContainer}>
        {images.length > 1 ? (
          <div className={productDetailsStyles.multiImageContainer}>
            <div className={productDetailsStyles.miniCarousel}>
              {images.map((element, index) => {
                return (
                  <div
                    className={`${productDetailsStyles.individualImage} ${
                      index === 0 ? productDetailsStyles.active : ""
                    }`}
                    onClick={imageHandleOnClick}
                    key={index}
                    id={index}
                    aria-hidden="true"
                  >
                    <MainImage
                      fluid={element.localFile.childImageSharp.fluid}
                    />
                  </div>
                )
              })}
            </div>
            <div className={productDetailsStyles.mainImage}>
              {categories.length > 1 && <BadgeNew />}
              <Img
                fluid={images[imageSelected].localFile.childImageSharp.fluid}
              />
            </div>
          </div>
        ) : (
          <>
            <div className={productDetailsStyles.uniImageContainer}>
              {categories.length > 1 && <BadgeNew />}
              <MainImage fluid={images[0].localFile.childImageSharp.fluid} />
            </div>
          </>
        )}

        <div className={productDetailsStyles.productInfo}>
          <h1 className={productDetailsStyles.productName}>{name}</h1>
          <span className={productDetailsStyles.productPrice}>
            {formatter.format(price)}
          </span>
          <div
            className={productDetailsStyles.productDescription}
            dangerouslySetInnerHTML={{ __html: short_description }}
          ></div>
          <div className={productDetailsStyles.productOptions}>
            <div className={productDetailsStyles.productSize}>
              <span
                id="selectedSizeOptionLabel"
                className={productDetailsStyles.productSizeLabel}
              >
                {attributes[1].name}
              </span>
              <div className={productDetailsStyles.productSizeDropdown}>
                <span
                  onClick={e =>
                    sizeDropDownOnclick(
                      "selectedSizeOptionLabel",
                      "dropdownSizeOption",
                      e
                    )
                  }
                  aria-hidden="true"
                >
                  {size.sizeSelected}
                </span>
                <FaChevronDown className={productDetailsStyles.arrowDown} />
                <ul
                  className={`${size.sizeIsOpen ? "show " : "hide "}${
                    productDetailsStyles.productSizeOptions
                  }`}
                  id="productSizeOptions"
                >
                  {attributes[1].options.map((option, index) => (
                    <li
                      key={index}
                      className="dropdownSizeOption"
                      id={`talla${index}`}
                      onClick={sizeOnClick}
                      aria-hidden="true"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={productDetailsStyles.productColor}>
              <span
                id="selectedColorOptionLabel"
                className={productDetailsStyles.productColorLabel}
              >
                {attributes[0].name}
              </span>
              <div className={productDetailsStyles.productColorDropdown}>
                <span
                  onClick={e =>
                    colorHandleDropDown(
                      "selectedColorOptionLabel",
                      "dropdownColorOption",
                      e
                    )
                  }
                  aria-hidden="true"
                >
                  {color.colorSelected}
                </span>
                <FaChevronDown className={productDetailsStyles.arrowDown} />
                <ul
                  className={`${color.colorIsOpen ? "show " : "hide "}${
                    productDetailsStyles.productColorOptions
                  }`}
                  id="productColorOptions"
                >
                  {attributes[0].options.map((option, index) => (
                    <li
                      key={index}
                      className="dropdownColorOption"
                      id={`color${index}`}
                      onClick={colorHandleOnClick}
                      aria-hidden="true"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={productDetailsStyles.QTYOptions + " noselect"}>
            <div className={productDetailsStyles.counterContainer}>
              <span onClick={reduceQTY} className={productDetailsStyles.add}>
                -
              </span>
              <span className={productDetailsStyles.counter}>{counter}</span>
              <span onClick={addQTY} className={productDetailsStyles.reduce}>
                +
              </span>
            </div>
            <div className={productDetailsStyles.addToCart}>
              <MainCTA
                icon={
                  <FaShoppingCart
                    size="13"
                    className={productDetailsStyles.iconCTA}
                  />
                }
                btnCTA={"Añadir al carrito"}
                to="/"
              />
            </div>
          </div>
          <div className={productDetailsStyles.addToFavorite}>
            <InvertedMainCTABtn
              icon={
                <FaHeart size="13" className={productDetailsStyles.iconCTA} />
              }
              to="/"
              btnCTA="Añadir a favoritos"
            />
          </div>
          <div className={productDetailsStyles.sku}>
            <span>SKU: {sku}</span>
          </div>
        </div>
      </div>
    </>
  )
}
