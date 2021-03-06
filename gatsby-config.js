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
  pluginGraphql,
  pluginCanonicalUrls,
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
        resolve: 'gatsby-remark-autolink-headers',
        options: {
          offsetY: `100`,
          icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill='#2A506F' fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
          maintainCase: true,
        },
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
  },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: pluginCanonicalUrls,
  },
  ]
}
