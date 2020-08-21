import React from "react"
import globalStyles from "./global.module.css"
import Header from "./header/Header"
import Footer from "./footer/Footer"

export default function Layout({ children }) {
  return (
    <>
      <div className={globalStyles.containerLayout}>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  )
}
