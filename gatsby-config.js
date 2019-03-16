const rupture = require('rupture')
const path = require('path')
const config = require('./data/config')

const {
  siteMetadata,
  favicon,
  pluginFonts,
  remarkImages,
  remarkPrismjs,
  pluginSitemap,
  pluginAnalytics,
  pluginManifest,
  pluginGraphql
} = config

module.exports = {
  siteMetadata,
  plugins: [{
    resolve: `gatsby-plugin-stylus`,
    options: {
      use: [rupture()]
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: path.join(__dirname, `src`, `pages`)
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `content`,
      path: path.join(__dirname, `content`)
    }
  },
  {
    resolve: `gatsby-plugin-sitemap`,
    options: pluginSitemap
  },
  `gatsby-plugin-offline`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: pluginManifest
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: 'gatsby-source-graphql',
    options: pluginGraphql
  },
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        Components: path.resolve(__dirname, 'src/components'),
        Templates: path.resolve(__dirname, 'src/templates'),
        Context: path.resolve(__dirname, 'src/context'),
        Static: path.resolve(__dirname, 'static'),
        Data: path.resolve(__dirname, 'data')
      }
    }
  },
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [{
        resolve: `gatsby-remark-normalize-paths`,
        options: {
          pathFields: [`image`]
        }
      },
      {
        resolve: 'gatsby-remark-autolink-headers'
      },
      {
        resolve: `gatsby-remark-reading-time`,
      },
      {
        resolve: 'gatsby-remark-copy-linked-files'
      },
      {
        resolve: `gatsby-remark-images`,
        options: remarkImages
      },
      {
        resolve: `gatsby-remark-prismjs`,
        options: remarkPrismjs
      },
      {
        resolve: `@raae/gatsby-remark-oembed`
      },
      {
        resolve: `gatsby-remark-responsive-iframe`,
        options: {
          wrapperStyle: `margin-bottom: 1.0725rem`
        }
      },
      {
        resolve: `gatsby-remark-external-links`,
        options: {
          target: `_blank`
        }
      }
      ]
    }
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: pluginFonts
  },
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: pluginAnalytics
  },
  {
    resolve: 'gatsby-plugin-favicon',
    options: favicon
  }
  ]
}
