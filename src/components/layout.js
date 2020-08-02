import React from "react"
import layoutStyles from "./layout.module.css"
import Header from "./header/Header"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.container_layout}>
      <Header />
      <div className={layoutStyles.container_inner_layout}>{children}</div>
    </div>
  )
}
