import React from "react"
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
              <div>
                <p>
                  Recibe y entérate de nuestras nuevas promociones y de nuestros
                  lanzamientos.
                </p>
                <br />
              </div>
              <form
                onSubmit={() => {
                  alert("Ejemplo de suscripción")
                }}
              >
                <label htmlFor="formMail">
                  Email
                  <input
                    type="text"
                    id="formMail"
                    name="formMail"
                    placeholder="Ingresa tu correo..."
                  />
                </label>
                <input type="submit" value="Suscribirse" />
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
