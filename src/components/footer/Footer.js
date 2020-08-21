import React from "react"
import footerStyles from "./footer.module.css"
import NavBar from "../header/NavBar"
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
            <NavBar navClassName={footerStyles.navFooter} />
          </InfoBlock>
          <InfoBlock className={footerStyles.infoBlock} title="Contáctanos">
            <div className={footerStyles.iconsContainer}>
              <a
                href="https://www.facebook.com/emilieelsalvador"
                target="_blank"
              >
                <FaFacebookF size="20px" />
              </a>
              <a href="https://www.instagram.com/emilie.sv/" target="_blank">
                <FaInstagram size="20px" />
              </a>
              <a href="" target="_blank">
                <FaWhatsapp size="20px" />
              </a>
              <a href="" target="_blank">
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
                <label htmlFor="formMail">Email</label>
                <br />
                <input
                  type="text"
                  id="formMail"
                  name="formMail"
                  placeholder="Ingresa tu correo..."
                />
                <br />
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
              <a href="">Política de privacidad</a>
            </p>
            <p>
              <a href="">Términos de uso</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
