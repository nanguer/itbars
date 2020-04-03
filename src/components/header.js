import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import { fadeTo, fadeIn } from "../components/carousel/animations"
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
        <TransitionLink
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to={`/${node.slug}`}
          exit={{
            length: 0.6,
            trigger: ({ node }) => fadeTo(node, 0, 0.5),
          }}
          entry={{
            delay: 0.6,
            trigger: ({ node }) => fadeIn(node, 0.5),
          }}
        >
          {node.titulo}
        </TransitionLink>
      </div>
    )
  })

  const handleClick = e => {
    setMenuIsOpen(!menuIsOpen)
  }
  return (
    <header className={headerStyles.header}>
      <TransitionLink
        className={headerStyles.title}
        activeClassName={headerStyles.activeNavItem}
        to="/"
        exit={{
          length: 0.6,
          trigger: ({ node }) => fadeTo(node, 0, 0.5),
        }}
        entry={{
          delay: 0.6,
          trigger: ({ node }) => fadeIn(node, 0.5),
        }}
      >
        <Logo />
      </TransitionLink>

      <nav className={headerStyles.nav}>
        <div className={headerStyles.navList}>{navNodes}</div>
      </nav>
      <div
        tabIndex={0}
        onKeyDown={() => handleClick}
        role="button"
        className={headerStyles.hambMenu}
        onClick={handleClick}
      >
        <Hamburguer open={menuIsOpen} />
        <div
          tabIndex={0}
          onKeyDown={() => handleClick}
          role="button"
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
