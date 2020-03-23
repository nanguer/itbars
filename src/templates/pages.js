import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Parallax } from "react-parallax"
import Layout from "../components/layout"
import Head from "../components/head"
import Products from "../components/carousel/products"

import pagesStyles from "./pages.module.scss"

const Page = ({ pageContext }) => {
  const { body, title, imgSrc, imagen, subtitulo } = pageContext
  const url = imgSrc?.fluid.srcWebp
  const img = imagen?.file.url

  console.log(body)

  return (
    <Layout title={title}>
      <Head title={title} />
      <div className={pagesStyles.container}>
        <Parallax
          bgImage={url}
          bgImageAlt="Image"
          strength={200}
          bgImageStyle={{ zIndex: "-2" }}
        >
          <div className={pagesStyles.content}>
            <div className={pagesStyles.titleDiv}>
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
            {body ? documentToReactComponents(body) : null}
            {img && <img src={img} alt={title} />}
          </div>

          {title === "Productos" && <Products />}
        </div>
      </div>
    </Layout>
  )
}

export default Page
