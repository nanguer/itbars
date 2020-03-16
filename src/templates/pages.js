import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Parallax } from "react-parallax"
import Layout from "../components/layout"
import Head from "../components/head"

const Page = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url

        return (
          <Parallax
            bgImage={url}
            bgImageAlt="Image"
            strength={700}
            bgImageStyle={{ bottom: "-85%" }}
          >
            <div style={{ height: "406px" }} />
          </Parallax>
        )
      },
    },
  }

  const { body, title } = props.pageContext
  return (
    <Layout>
      <Head title={title} />

      {body ? documentToReactComponents(body, options) : null}
    </Layout>
  )
}

export default Page
