const basePath = '/Busa-s-Enthusiasts'

module.exports = {
  pathPrefix: basePath,
  siteMetadata: {
    title: `Digital Publishing with Minimal Computing Project`,
    description: `A template`,
    author: `Course teachers`
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-theme-ceteicean`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/content/tei`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/content/pages`,
        name: `html`,
      },
    },
  ],
}