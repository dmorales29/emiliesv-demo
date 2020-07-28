import React from "react"
import layoutStyles from "./layout.module.css"
import Header from "../components/Header"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.container_layout}>
      <Header />
      {children}
    </div>
  )
}
