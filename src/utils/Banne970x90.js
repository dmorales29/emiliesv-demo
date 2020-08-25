import React from "react"
import { FaRegStar, FaLeaf } from "react-icons/fa"
import banner970x90Styles from "./banner970x90.module.css"

function Banner970x90() {
  return (
    <section className={banner970x90Styles.section}>
      <div className={banner970x90Styles.bannerContainer}>
        <div className={banner970x90Styles.calidad}>
          <FaRegStar size="30px" />
          <div className={banner970x90Styles.calidadContent}>
            <strong>Calidad</strong>
            <p>Hecho 100% a mano y con el mejor material</p>
          </div>
        </div>
        <div className={banner970x90Styles.comfort}>
          <FaLeaf size="30px" />
          <div className={banner970x90Styles.calidadContent}>
            <strong>Comfort</strong>
            <p>Enamórate del comfort de tus zapatos</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner970x90
