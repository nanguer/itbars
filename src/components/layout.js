import React from "react"
import Header from "./header"
import Footer from "./footer"

import "../styles/index.scss"

import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
