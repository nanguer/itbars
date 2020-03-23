const path = require("path")

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
//   //console.log(node)
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve("./src/templates/pages.js")

  const res = await graphql(`
    query {
      allContentfulPageContent {
        edges {
          node {
            subtitulo
            imagen {
              title
              file {
                url
              }
            }
            titulo
            textoPrincipal {
              json
            }
            slug
            imagenDestacada {
              fluid {
                srcWebp
              }
            }
          }
        }
      }
    }
  `)

  res.data.allContentfulPageContent.edges.forEach(({ node }) => {
    const {
      slug,
      titulo,
      textoPrincipal,
      imagenDestacada,
      imagen,
      subtitulo,
    } = node

    createPage({
      component: pageTemplate,
      path: `/${slug}`,
      context: {
        title: titulo,
        body: textoPrincipal.json,
        imgSrc: imagenDestacada,
        imagen,
        subtitulo,
      },
    })
  })
}
