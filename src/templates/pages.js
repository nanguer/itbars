import React, { useRef, useEffect } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Parallax } from "react-parallax"
import { animate } from "../components/carousel/animations"
import Head from "../components/head"
import Products from "../components/carousel/products"
import FormikContacto from "../components/contacto"

import pagesStyles from "./pages.module.scss"

const Page = ({ pageContext }) => {
  let parallax = useRef(null)
  useEffect(() => {
    animate(parallax)
  }, [parallax])

  const { body, title, imgSrc, imagen, subtitulo } = pageContext
  const url = imgSrc?.fluid.srcWebp
  const img = imagen?.file.url

  return (
    <>
      <Head title={title} />
      <div className={pagesStyles.container}>
        <Parallax
          bgImage={url}
          bgImageAlt="Image"
          strength={200}
          bgImageStyle={{ zIndex: "-2" }}
        >
          <div className={pagesStyles.content}>
            <div ref={el => (parallax = el)} className={pagesStyles.titleDiv}>
              <h1 className={pagesStyles.h1}>{title}</h1>
            </div>
          </div>
          <div className={pagesStyles.filter}> </div>
        </Parallax>
        <div className={pagesStyles.body}>
          {subtitulo && (
            <div className={pagesStyles.bodyHeader}>
              <span className={pagesStyles.span}></span> <h4>{subtitulo}</h4>
            </div>
          )}
          <div className={pagesStyles.bodyContent}>
            {body && title !== "Contacto"
              ? documentToReactComponents(body)
              : null}
            {img && <img src={img} alt={title} />}
          </div>
          {title === "Contacto" && (
            <div className={pagesStyles.contactoContainer}>
              <div className={pagesStyles.contacto}>
                {documentToReactComponents(body)}
              </div>
              <FormikContacto />
            </div>
          )}
          {title === "Productos" && <Products />}
        </div>
      </div>
    </>
  )
}

export default Page
