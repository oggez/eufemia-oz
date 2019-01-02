/**
 * Gatsby Config
 *
 */

module.exports = {
  pathPrefix: '/eufemia',
  siteMetadata: {
    title: 'DNB Design System - Eufemia',
    description:
      'The DNB Style Guide is the go to place for all who has to design, develop or create visuals with the DNB design.',
    // homepage: 'https://www.dnb.no',
    // siteUrl: 'https://www.dnb.no',
    repoUrl: 'https://github.com/dnbexperience/eufemia/tree/master/'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'DNB Design System - Eufemia',
        short_name: 'Eufemia',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#007272',
        display: 'minimal-ui',
        icon: '../dnb-ui-lib/assets/images/dnb-icon.png' // This path is relative to the root of the site.
        // icons: [
        //   {
        //     src: '/assets/....png',
        //     sizes: '192x192',
        //     type: 'image/png',
        //   },
        // ],
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp', // is used by gatsby-remark-images
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        // More info of using plugins: https://github.com/mdx-js/mdx/blob/d4154b8c4a546d0b675826826f85014cc04098c2/docs/plugins.md
        mdPlugins: [],
        hastPlugins: [],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
              showCaptions: true,
              sizeByPixelDensity: true
              // linkImagesToOriginal: true
              // wrapperStyle: {}
            }
          }
        ]
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('postcss-calc'),
          require('postcss-custom-properties'),
          require('postcss-preset-env')({ stage: 0 }),
          require('autoprefixer')({
            browsers: ['last 1 versions', 'explorer >= 11']
          })
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline'
  ]
}
