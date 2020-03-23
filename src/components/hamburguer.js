import React from "react"
import hamburguerStyles from "./hamburguer.module.scss"

export const Hamburguer = ({ open }) => {
  return (
    <svg
      className={hamburguerStyles.svg}
      version="1.1"
      viewBox="0 0 12.3 8.39"
      height="31.6"
      width="46.6"
    >
      <path
        className={open ? hamburguerStyles.pathUp : null}
        d={`m ${open ? "2" : "1"}.09,0.89 c 3.34,0 6.67,0 ${
          open ? "8" : "10"
        }.01,0`}
      />
      <path
        className={open ? hamburguerStyles.pathMid : null}
        d="m 2.8,4.09 h 8.3"
      />
      <path
        className={open ? hamburguerStyles.pathDown : null}
        d="M 5.12,7.29 H 11.1"
      />
    </svg>
  )
}

export default Hamburguer
