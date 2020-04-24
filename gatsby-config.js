module.exports = {
  siteMetadata: {
    title: `Christopher Burke's Portfolio`,
    description: `This site showcases the projects worked on by me, Christopher Burke during my time at General Assembly`,
    author: `cjburke04@gmail.com`,
    image: `${__dirname}/src/images/portfolio-preview-better.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
      // Configure color of the scroll indicator
      color: '#663391',
      // Height of the scroll indicator
      height: '3px',
      // Configure paths where the scroll indicator will appear
      paths: ['/', '/projects/**'],
      // Configure the z-index of the indicator element
      zIndex: `9999`,
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        stylesConfig: {
          disableAutoprefixing: true,
          disableMinification: true
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-sharp`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
