import React from "react"
import Header from "./header"
import { useState, useEffect } from "react"
import Footer from "./footer"
import "../styles/index.scss"

import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  const [showFooter, setShowFooter] = useState(true)

  useEffect(() => {
    setShowFooter(
      children.props.path === "/contacto" || children.props.path === "/gracias/"
    )
  }, [children.props.path])

  return (
    <div className={layoutStyles.container}>
      <Header />
      <div className={layoutStyles.content}>{children}</div>

      {!showFooter && <Footer />}
    </div>
  )
}

export default Layout
