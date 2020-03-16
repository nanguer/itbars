import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Caracteristica from "../templates/caracteristicas"

import indexStyles from "./index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulAsset(title: { eq: "barritasDestacada" }) {
          title
          file {
            url
            fileName
          }
        }
        subtitulo: contentfulTitulos(
          contentful_id: { eq: "1N5KG40crjEPseBZTJ6f2m" }
        ) {
          texto
        }
        subtituloBajo: contentfulTitulos(
          contentful_id: { eq: "1LhllN6OwiplkPFnwOLjiC" }
        ) {
          texto
        }
        allContentfulCaracteristicas {
          edges {
            node {
              titulo
              infoCaracteristica {
                json
              }
              image {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `
  )
  const { texto } = data.subtituloBajo
  const { file, title } = data.contentfulAsset

  const heroStyle = {
    paddingLeft: "2rem",
    backgroundImage: `url(${file.url})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "center",
    backgroundPositionX: "top",
  }

  const nodes = data.allContentfulCaracteristicas.edges.map((edge, i) => {
    return <Caracteristica key={i} data={edge.node} />
  })

  const nodesUp = nodes.filter((node, i) => i < 2)
  const nodesDown = nodes.filter((node, i) => i >= 2)

  return (
    <Layout>
      <Head title="Inicio" />
      <div className={indexStyles.landingFull}>
        <div style={heroStyle} className={indexStyles.heroSection}>
          <div className={indexStyles.mainTitle}>
            <h1>ITBARS</h1>
            <h4>{data.subtitulo.texto}</h4>
            <div className={indexStyles.buttonGroup}>
              <button className={indexStyles.buttonMas}>Mas Info</button>
              <button className={indexStyles.buttonContacto}>Contacto</button>
            </div>
          </div>
        </div>
        <div className={indexStyles.downSection}>
          <h2 className={indexStyles.subtituloBajo}>{texto}</h2>
        </div>
        <div className={indexStyles.containerCaract}>
          <div className={indexStyles.nodesUp}>{nodesUp}</div>

          <div className={indexStyles.bg}>
            <div className={indexStyles.nodesDown}>{nodesDown}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
