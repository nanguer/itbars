import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Logo from "./logo"
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

  const img = (
    <img
      className={headerStyles.img}
      src={data.contentfulAsset.file.url}
      alt={data.contentfulAsset.title}
    ></img>
  )

  const navNodes = data.allContentfulPageContent.edges.map(({ node }) => (
    <div key={node.slug}>
      <Link
        className={headerStyles.navItem}
        activeClassName={headerStyles.activeNavItem}
        to={`/${node.slug}`}
      >
        {node.titulo}
      </Link>
    </div>
  ))

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
    </header>
  )
}

export default Header
