const rupture = require('rupture')
const {
  join
} = require('path')
const {
  author,
  bugs,
  description,
  homepage,
  keywords,
  name,
  repository,
  version,
} = require('./package.json')

const isProduction = process.env.NODE_ENV === 'production'
const siteUrl = isProduction ? homepage : 'http://localhost:8000'
const subTitle = `· Desenvolvedor front-end e WordPress em Curitiba/PR`
const title = `${author.name} ${subTitle}`

module.exports = {
  siteMetadata: {
    isProduction,
    name,
    version,
    title,
    defaultTitle: title,
    titleTemplate: `%s ${subTitle}`,
    siteUrl,
    description,
    defaultDescription: description,
    image: '/share.jpg',
    defaultImage: '/share.jpg',
    author,
    disqusShortname: author.disqus,
    twitterUsername: `@${author.twitter}`,
    facebookAppID: '',
    keywords,
    repo: {
      ...bugs,
      ...repository,
    },
    social: {
      github: `https://github.com/${author.github}`,
      twitter: `https://twitter.com/${author.twitter}`,
      codepen: `https://codepen.io/${author.codepen}`,
      npm: `https://www.npmjs.com//${author.npm}`,
      linkedin: `https://linkedin.com/in/${author.linkedin}`,
      dribbble: `https://dribbble.com/${author.dribbble}`,
      behance: `https://www.behance.net/${author.behance}`,
    },
    navLinks: [{
        name: 'Sobre mim',
        path: '/sobre',
      },
      {
        name: 'Serviços',
        path: '/servicos',
      },
      {
        name: 'Portfolio',
        path: '/portfolio',
      },
      {
        name: 'Blog',
        path: '/blog',
      },
      {
        name: 'Contato',
        path: '/contato',
      },
    ],
  },
  plugins: [{
      resolve: `gatsby-plugin-stylus`,
      options: {
        use: [rupture()],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: join(__dirname, `src`, `pages`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: join(__dirname, `content`),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/tags`, `/tag/*`, `/categoria`, `/categoria/*`, `/404`, `/404.html`],
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#40b883`,
        showSpinner: false,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${author.name}`,
        short_name: `${name}`,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#40b883',
        display: 'minimal-ui',
        icon: 'static/icon.png',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
            resolve: `gatsby-remark-normalize-paths`,
            options: {
              pathFields: [`image`],
            },
          },
          {
            resolve: 'gatsby-remark-component',
            options: {
              components: ['zoom-image', 'hidden', 'countup']
            }
          },
          {
            resolve: 'gatsby-remark-autolink-headers'
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: true,
              sizeByPixelDensity: true,
              showCaptions: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbersGlobal: true,
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{
            family: `Nunito`,
            variants: [`200`, `800`]
          },
          {
            family: `Lato`,
            variants: [`300`, `400`, `500`, `800`]
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: isProduction ? 'UA-125092358-1' : 'UA-000000000-1',
        head: true
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/icon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: true,
          windows: true
        }
      }
    },
  ],
}
