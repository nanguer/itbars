import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Head from "../components/head"
import { animateScroll } from "../components/carousel/animations"
import Caracteristica from "../templates/caracteristicas"
import { Parallax } from "react-parallax"

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
  const { file } = data.contentfulAsset

  const nodes = data.allContentfulCaracteristicas.edges.map((edge, i) => {
    return <Caracteristica key={i} data={edge.node} />
  })

  const nodesUp = nodes.filter((node, i) => i < 2)
  const nodesDown = nodes.filter((node, i) => i >= 2)

  const handleScroll = anchor => {
    animateScroll(anchor)
  }

  return (
    <>
      <Head title="Inicio" />
      <div className={indexStyles.landingFull}>
        <Parallax
          bgImage={file.url}
          bgImageAlt="heroImage"
          strength={400}
          style={{ boxShadow: "0px 4px 4px rgba(0, 0, 100,0.2)" }}
          bgImageStyle={{ zIndex: "-2", minWidth: "1280px" }}
        >
          <div className={indexStyles.heroSection}>
            <div className={indexStyles.mainTitle}>
              <h1>ITBARS</h1>
              <h4>{data.subtitulo.texto}</h4>
              <div className={indexStyles.buttonGroup}>
                <button
                  className={indexStyles.buttonMas}
                  onClick={() => handleScroll("#downSection")}
                >
                  Mas Info
                </button>

                <Link to="/contacto">
                  <button className={indexStyles.buttonContacto}>
                    Contacto
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Parallax>

        <div className={indexStyles.downSection} id="downSection">
          <h2 className={indexStyles.subtituloBajo}>{texto}</h2>
        </div>
        <div className={indexStyles.containerCaract}>
          <div className={indexStyles.nodesUp}>{nodesUp}</div>

          <div className={indexStyles.bg}>
            <div className={indexStyles.nodesDown}>{nodesDown}</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default IndexPage
