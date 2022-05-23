module.exports = {
  siteMetadata: {
    title: `RS Grupa`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Lukasz Ch`
  },
  plugins: [
    `gatsby-plugin-no-index`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // Arbitrary name for the remote schema Query type
        // typeName: "WPGRAPHQL",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        // fieldName: "wpgraphql",
        // Url to query from
        url: 'https://backend.lukaszchowanski.pl/graphql'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          placeholder: 'blurred',
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`
        }
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-styled-components`,
    'babel-plugin-styled-components'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
