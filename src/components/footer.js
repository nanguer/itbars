import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { fadeTo, fadeIn } from "./carousel/animations"
import TransitionLink from "gatsby-plugin-transition-link"

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

  useEffect(() => {
    fadeTo(footer, 1, 1.5)
  }, [])

  let footer = useRef(null)

  return (
    <footer ref={el => (footer = el)} className={footerStyles.footer}>
      <div className={footerStyles.texto}>
        <h4 className={footerStyles.h4}>{data.titulo.texto}</h4>
        <h5 className={footerStyles.h5}>{data.texto.texto}</h5>
      </div>
      <TransitionLink
        to="/contacto"
        exit={{
          length: 0.6,
          trigger: ({ node }) => fadeTo(node, 0, 0.5),
        }}
        entry={{
          delay: 0.6,
          trigger: ({ node }) => fadeIn(node, 0.5),
        }}
      >
        <button className={footerStyles.button}>Contacto</button>
      </TransitionLink>
    </footer>
  )
}

export default Footer
