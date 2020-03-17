import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Parallax } from "react-parallax"
import Layout from "../components/layout"
import Head from "../components/head"

import pagesStyles from "./pages.module.scss"

const Page = ({ pageContext }) => {
  const { body, title, imgSrc } = pageContext
  const url = imgSrc?.fluid.srcWebp

  return (
    <Layout>
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
              <div>
                <h1 className={pagesStyles.h1}>{title}</h1>
              </div>
            </div>
          </div>
          <div className={pagesStyles.filter}> </div>
        </Parallax>
        <div className={pagesStyles.body}>
          {body ? documentToReactComponents(body) : null}
        </div>
      </div>
    </Layout>
  )
}

export default Page
