import React from "react"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import globalStyles from "../components/global.module.css"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={globalStyles.containerLayout}>{children}</div>
      <Footer />
    </>
  )
}
