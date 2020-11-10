import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import footerStyles from "./footer.module.css"
import Navbar from "../header/Navbar"
import InfoBlock from "./InfoBlock"
import Logo from "../../utils/Logo"
import {
  FaFacebookF,
  FaWhatsapp,
  FaRegEnvelope,
  FaInstagram,
} from "react-icons/fa"

function Footer() {
  const [email, setEmail] = useState({
    FNAME: "",
    email: "",
    message:
      "Recibe y entérate de nuestras ofertas, promociones, nuevos diseños y eventos.",
    status: "esperando",
    isDisabled: false,
  })

  const changeEmailHandler = e => {
    if (email.status !== "esperando") {
      setEmail({
        ...email,
        email: e.target.value,
        message:
          "Recibe y entérate de nuestras ofertas, promociones, nuevos diseños y eventos.",
        status: "esperando",
      })
    } else {
      setEmail({ ...email, email: e.target.value })
    }
  }

  const changeNameHandler = e => {
    if (email.status !== "esperando") {
      setEmail({
        ...email,
        FNAME: e.target.value,
        message:
          "Recibe y entérate de nuestras ofertas, promociones, nuevos diseños y eventos.",
        status: "esperando",
      })
    } else {
      setEmail({ ...email, FNAME: e.target.value })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    setEmail({
      ...email,
      status: "loading",
    })

    addToMailchimp(email.email, {
      FNAME: email.FNAME,
    })
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        if (data.result === "error" && data.msg.length === 35) {
          setEmail({
            ...email,
            message: "El correo ingresado es inválido.",
            status: "danger",
          })
        } else if (
          data.result === "error" &&
          data.msg.length - email.email.length === 48
        ) {
          setEmail({
            ...email,
            message: "El correo tiene demasiados intentos de suscripción.",
            status: "danger",
          })
        } else if (data.result === "error" && data.msg.length === 96) {
          setEmail({
            ...email,
            message:
              "Has hecho demasiados intentos de suscripción para este correo. Inténtalo nuevamente en unos 5 minutos.",
            status: "warning",
          })
        } else if (data.result === "error" && data.msg.length === 107) {
          setEmail({
            ...email,
            message:
              "Asegúrate de que tu nombre únicamente utilice caracteres alfanuméricos, comas, guiones, comillas simples y puntos.",
            status: "warning",
          })
        } else if (data.result === "error" && data.msg.length > 200) {
          setEmail({
            ...email,
            FNAME: "",
            email: "",
            message: `Gracias <strong>${email.FNAME}</strong> pero tu correo <strong>${email.email}</strong> ya está suscrito con nosotros.`,
            status: "warning",
          })
        } else if (data.result === "success") {
          setEmail({
            ...email,
            FNAME: "",
            email: "",
            message: data.msg,
            status: "success",
          })
        }
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
  }

  return (
    <footer>
      <div>
        <div className={footerStyles.firstSection}>
          <div className={footerStyles.logoImage}>
            <Logo selectLogo="logoBw" className={footerStyles.logoClass} />
          </div>
          <InfoBlock className={footerStyles.infoBlock} title="Mapa del sitio">
            <Navbar navClassName={footerStyles.navFooter} />
          </InfoBlock>
          <InfoBlock className={footerStyles.infoBlock} title="Contáctanos">
            <div className={footerStyles.iconsContainer}>
              <a
                href="https://www.facebook.com/emilieelsalvador"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size="20px" />
              </a>
              <a
                href="https://www.instagram.com/emilie.sv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size="20px" />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size="20px" />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaRegEnvelope size="20px" />
              </a>
            </div>
            <div className={footerStyles.contactInfo}>
              <p>
                <span>Dirección</span>
                <br />
                Plaza Mango - Antiguo Cuscatlán
                <br />
                <br />
                <span>Horario</span>
                <br />
                Lunes a Sábado 10:00 AM - 6:00 PM
                <br />
                <br />
                <span>Oficina</span>
                <br />
                2522-0534
                <br />
                <br />
                <span>Envíos a todo El Salvador</span>
              </p>
            </div>
          </InfoBlock>
          <InfoBlock className={footerStyles.infoBlock} title="Suscríbete ">
            <div className={footerStyles.subscription}>
              <div className={footerStyles.emailMessage}>
                <p
                  className={
                    email.status === "esperando"
                      ? ""
                      : email.status === "warning"
                      ? "warning"
                      : email.status === "danger"
                      ? "danger"
                      : email.status === "success"
                      ? "success"
                      : ""
                  }
                  dangerouslySetInnerHTML={{ __html: email.message }}
                ></p>
              </div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="formName">
                  <input
                    className={footerStyles.inputName}
                    type="text"
                    value={email.FNAME}
                    onChange={changeNameHandler}
                    name="formName"
                    placeholder="¿Cuál es tu nombre?"
                    required
                  />
                </label>
                <label htmlFor="formMail">
                  <input
                    type="email"
                    value={email.email}
                    onChange={changeEmailHandler}
                    name="formMail"
                    placeholder="Ingresa tu correo..."
                    required
                  />
                </label>
                {email.status === "loading" ? (
                  <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <input
                    className={
                      email.isDisabled ? footerStyles.disabledSubmit : null
                    }
                    type="submit"
                    value="Suscribirse"
                    disabled={email.isDisabled}
                  />
                )}
              </form>
            </div>
          </InfoBlock>
        </div>
        <hr />
        <div className={footerStyles.secondSection}>
          <div>
            <p>
              Copyright {new Date().getFullYear()} Emilie
              {String.fromCharCode(174)} Todos los derechos reservados
            </p>
          </div>
          <div className={footerStyles.termsOfUse}>
            <p>
              <a href="/">Política de privacidad</a>
            </p>
            <p>
              <a href="/">Términos de uso</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
