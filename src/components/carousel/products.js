import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import productStyles from "./products.module.scss"

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProductCarousel {
        edges {
          node {
            imagenes {
              title
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const carousel = data.allContentfulProductCarousel.edges[0].node.imagenes.map(
    ({ file, title }, i) => {
      return (
        <div key={i} className={productStyles.content}>
          <h2 className={productStyles.title}>{title}</h2>
          <img src={file.url} alt={title} />
        </div>
      )
    }
  )
  return <div className={productStyles.container}>{carousel}</div>
}

export default Products
