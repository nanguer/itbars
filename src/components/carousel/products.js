import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { master, firstPart, secondPart } from "./animations"

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

  //   useEffect(() => {
  //     master
  //       .add(
  //         firstPart(
  //           refArray[0].childNodes[0],
  //           refArray[0].childNodes[1],
  //           refArray[1].childNodes[0],
  //           refArray[1].childNodes[1]
  //         )
  //       )
  //       .add(
  //         secondPart(
  //           refArray[2].childNodes[0],
  //           refArray[2].childNodes[1],
  //           refArray[3].childNodes[0],
  //           refArray[3].childNodes[1]
  //         )
  //       )
  //     master.play()
  //   }, [refArray])

  let div1 = useRef(null)
  let div2 = useRef(null)
  let div3 = useRef(null)
  let div4 = useRef(null)

  const refArray = [div1, div2, div3, div4]

  const carousel = data.allContentfulProductCarousel.edges[0].node.imagenes.map(
    ({ file, title }, i) => {
      return (
        <div
          key={i}
          ref={el => (refArray[i] = el)}
          className={productStyles.content}
        >
          <h2 className={productStyles.title}>{title}</h2>
          <img src={file.url} alt={title} />
        </div>
      )
    }
  )
  return <div className={productStyles.container}>{carousel}</div>
}

export default Products
