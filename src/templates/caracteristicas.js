import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import caractStyles from "./caracteristicas.module.scss"

const Caracteristica = ({ data }) => {
  const { titulo, image } = data
  return (
    <div className={caractStyles.container}>
      <h4 className={caractStyles.titulo}>{titulo}</h4>
      <div className={caractStyles.content}>
        {documentToReactComponents(data.infoCaracteristica.json)}
        <img className={caractStyles.img} src={image.file.url} />
      </div>
    </div>
  )
}

export default Caracteristica
