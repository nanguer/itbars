import React, { useRef, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import Head from "../components/head"
import {
  animateScroll,
  animateTitle,
  fadeTo,
  fadeIn,
} from "../components/carousel/animations"
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

  const [isLoading, setIsLoading] = useState(false)

  let title = useRef(null)

  useEffect(() => {
    animateTitle([title])
  }, [isLoading])

  const handleParallaxLoad = () => {
    setIsLoading(true)
  }

  const { texto } = data.subtituloBajo
  const { file } = data.contentfulAsset

  const nodes = data.allContentfulCaracteristicas.edges.map((edge, i) => {
    return <Caracteristica key={i} data={edge.node} />
  })

  const nodesUp = nodes.filter((node, i) => i < 2)
  const nodesDown = nodes.filter((node, i) => i >= 2)

  const handleScroll = (anchor) => {
    animateScroll(anchor)
  }

  return (
    <>
      <Head title="Inicio" />
      <div className={indexStyles.landingFull}>
        <Parallax
          onLoad={handleParallaxLoad}
          bgImage={file.url}
          bgImageAlt="heroImage"
          strength={400}
          style={{ boxShadow: "0px 4px 4px rgba(0, 0, 100,0.2)" }}
          bgImageStyle={{ zIndex: "-2", minWidth: "1280px" }}
        >
          <div className={indexStyles.heroSection}>
            <div ref={(el) => (title = el)} className={indexStyles.mainTitle}>
              <h1>ITBARS</h1>
              <h4>{data.subtitulo.texto}</h4>
              <div className={indexStyles.buttonGroup}>
                <button
                  className={indexStyles.buttonMas}
                  onClick={() => handleScroll("#downSection")}
                >
                  Mas Info
                </button>

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
                  <button className={indexStyles.buttonContacto}>
                    Contacto
                  </button>
                </TransitionLink>
              </div>
            </div>
          </div>
        </Parallax>
        <div id="downSection"></div>
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
    </>
  )
}
export default IndexPage
