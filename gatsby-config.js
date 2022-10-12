const basePath = '/Busa-s-Enthusiasts'

module.exports = {
  pathPrefix: basePath,
  siteMetadata: {
    title: `Digital Publishing with Minimal Computing Project`,
    description: `DPWMCP`,
    author: `Busa's Enthusiasts`
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
