import React from "react"
import LayoutStyles from "./Layout.module.css"
import Header from "../components/Header"

export default function Layout({ children }) {
  return (
    <div className={LayoutStyles.container_layout}>
      <Header />
      {children}
    </div>
  )
}
