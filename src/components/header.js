import React, { useState } from "react"
import { graphql, useStaticQuery, Link, navigate } from "gatsby"
import Logo from "./logo"
import { Hamburguer } from "./hamburguer"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "logoItbars" }) {
        title
        file {
          url
        }
      }
      site {
        siteMetadata {
          title
        }
      }
      allContentfulPageContent {
        edges {
          node {
            titulo
            slug
          }
        }
      }
    }
  `)

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const img = (
    <img
      className={headerStyles.img}
      src={data.contentfulAsset.file.url}
      alt={data.contentfulAsset.title}
    ></img>
  )

  const navNodes = data.allContentfulPageContent.edges.map(({ node }) => {
    return (
      <div key={node.slug}>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to={`/${node.slug}`}
        >
          {node.titulo}
        </Link>
      </div>
    )
  })

  const handleClick = e => {
    setMenuIsOpen(!menuIsOpen)
  }
  return (
    <header className={headerStyles.header}>
      <Link
        className={headerStyles.title}
        activeClassName={headerStyles.activeNavItem}
        to="/"
      >
        <Logo />
      </Link>

      <nav className={headerStyles.nav}>
        <div className={headerStyles.navList}>{navNodes}</div>
      </nav>
      <div className={headerStyles.hambMenu} onClick={handleClick}>
        <Hamburguer open={menuIsOpen} />
        <div
          className={
            menuIsOpen ? headerStyles.hambMenuItems : headerStyles.hambMenuClick
          }
          onClick={handleClick}
        >
          {navNodes}
        </div>
      </div>
    </header>
  )
}

export default Header
