import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"

import graciasStyles from "./gracias.module.scss"

const Gracias = () => {
  return (
    <>
      <Head title="Gracias" />
      <div className={graciasStyles.container}>
        <h1>Su mensaje ha sido enviado!</h1>
        <h4 style={{ fontWeight: "400" }}>
          Gracias por contactar con ITBars. Responderemos a su mensaje lo antes
          posible
        </h4>
        <p>
          <Link to="/">Volver al inicio</Link>
        </p>
      </div>
    </>
  )
}

export default Gracias
