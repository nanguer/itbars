import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      titulo: contentfulTitulos(
        contentful_id: { eq: "4JedswTLzNITQaayqbzhZr" }
      ) {
        texto
      }
      texto: contentfulTitulos(
        contentful_id: { eq: "2YXhTt5m6nxgF0IgtJeajI" }
      ) {
        texto
      }
    }
  `)
  console.log(data)
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.text}>
        <h4 className={footerStyles.h4}>{data.titulo.texto}</h4>
        <h5 className={footerStyles.h5}>{data.texto.texto}</h5>
      </div>
      <button className={footerStyles.button}>Contacto</button>
    </footer>
  )
}

export default Footer
