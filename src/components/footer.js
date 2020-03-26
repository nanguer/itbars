import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

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

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.texto}>
        <h4 className={footerStyles.h4}>{data.titulo.texto}</h4>
        <h5 className={footerStyles.h5}>{data.texto.texto}</h5>
      </div>
      <Link to="/contacto">
        <button className={footerStyles.button}>Contacto</button>
      </Link>
    </footer>
  )
}

export default Footer
