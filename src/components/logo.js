import React from "react"
import logoStyles from "./logo.module.scss"

const Logo = () => (
  <svg
    className={logoStyles.logo}
    width="516"
    height="514"
    viewBox="0 0 300 301"
    version="1.1"
    id="svg8"
  >
    <defs id="defs2" />
    <g id="layer1" transform="translate(318,-28.2)">
      <path
        className={logoStyles.darkblue}
        d="m -317,30.2 h 96 V 125 h -96 z"
      />
      <path
        className={logoStyles.blue}
        d="m 135,222 h 192 v 95 H 135 Z"
        transform="rotate(90)"
      />
      <path
        className={logoStyles.blue}
        d="M 135,73.6 H 327 V 169 H 135 Z"
        transform="rotate(90)"
      />
      <path className={logoStyles.blue} d="M -214,30.1 H -19 V 125 h -195 z" />
    </g>
  </svg>
)
export default Logo
