import React from "react"
import { Link } from "gatsby"

import Head from "../components/head"
import notFoundStyles from "./404.module.scss"

const NotFound = () => {
  return (
    <div className={notFoundStyles.container}>
      <Head title="404" />
      <h1>La pagina no existe!</h1>
      <p>
        <Link to="/">Volver al inicio</Link>
      </p>
    </div>
  )
}

export default NotFound
