import React from "react"
import EmilieMap from "../../utils/EmilieMap"
import mainInfoStyles from "./mainInfo.module.css"
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"

const MainInfo = () => {
  return (
    <>
      <h1 className={mainInfoStyles.h1}>Nuestra tienda</h1>
      <div className={mainInfoStyles.Info}>
        <p>
          <strong className={mainInfoStyles.Strong}>Dirección</strong>
          <br />
          Plaza Mango - Antiguo Cuscatlán
          <br />
          <br />
          <strong className={mainInfoStyles.Strong}>Horario</strong>
          <br />
          Lunes a Sábado 10:00 AM - 6:00 PM
          <br />
          <br />
          <strong className={mainInfoStyles.Strong}>
            Envíos a todo El Salvador
          </strong>
          <br />
          <br />
          <div className={mainInfoStyles.InfoWrapper}>
            <a className={mainInfoStyles.a} href="/">
              <p>
                <FaWhatsapp size="20" />
                6029-0681
              </p>
            </a>
            <p>
              <FaPhoneAlt size="20" />
              2522-0534
            </p>
          </div>
        </p>
      </div>
      <EmilieMap />
    </>
  )
}

export default MainInfo
