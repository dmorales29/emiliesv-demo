import React from "react"
import LayoutStyles from "./layout.module.css"
import Header from "../components/Header"

export default function Layout({ children }) {
  return (
    <div className={LayoutStyles.container_layout}>
      <Header />
      {children}
    </div>
  )
}
