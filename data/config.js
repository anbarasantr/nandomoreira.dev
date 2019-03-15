const {
  author,
  bugs,
  description,
  homepage,
  keywords,
  name,
  repository,
  version
} = require('../package.json')

const services = require('./services')
const skills = require('./skills')

const isProduction = process.env.NODE_ENV === 'production'
const siteUrl = isProduction ? homepage : 'http://localhost:8000'

require('dotenv').config({
  path: `.env.${ process.env.NODE_ENV }`
})

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || 'foo-bar'

const defaultImage = '/share.jpg'
const subTitle = `· Desenvolvedor front-end e WordPress em Curitiba/PR`
const title = `${ author.name } ${ subTitle }`

const repo = {
  ...bugs,
  ...repository
}

const social = {
  paypal: `https://www.paypal.me/${ author.paypal }/5`,
  github: `https://github.com/${ author.github }`,
  twitter: `https://twitter.com/${ author.twitter }`,
  codepen: `https://codepen.io/${ author.codepen }`,
  npm: `https://www.npmjs.com/${ author.npm }`,
  linkedin: `https://linkedin.com/in/${ author.linkedin }`,
  instagram: `https://instagram.com/${ author.instagram }`,
  dribbble: `https://dribbble.com/${ author.dribbble }`,
  behance: `https://www.behance.net/${ author.behance }`
}

const navLinks = [{
  name: 'Sobre mim',
  path: '/sobre'
},
// {
//   name: 'O que eu faço',
//   path: '/servicos',
// },
{
  name: 'Portfolio',
  path: '/portfolio'
},
{
  name: 'Open-source',
  path: '/open-source'
},
{
  name: 'Blog',
  path: '/blog'
},
{
  name: 'Contato',
  path: '/contato'
}
]

const siteMetadata = {
  isProduction,
  name,
  version,
  title,
  defaultTitle: title,
  titleTemplate: `%s ${ subTitle }`,
  siteUrl,
  description,
  defaultDescription: description,
  image: defaultImage,
  defaultImage,
  author,
  disqusShortname: author.disqus,
  twitterUsername: `@${ author.twitter }`,
  facebookAppID: '',
  keywords,
  repo,
  social,
  navLinks,
  services,
  skills
}

const pluginFonts = {
  fonts: [{
    family: `Nunito`,
    variants: [`200`, `400`, `800`]
  },
  {
    family: `Open Sans`,
    variants: [`300`, `400`, `500`, `800`]
  }
  ]
}

const pluginAnalytics = {
  trackingId: isProduction ? 'UA-125092358-1' : 'UA-000000000-1',
  head: true
}

const favicon = {
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

const remarkImages = {
  maxWidth: 1200,
  linkImagesToOriginal: false,
  sizeByPixelDensity: true,
  showCaptions: true
}

const remarkPrismjs = {
  classPrefix: 'language-',
  inlineCodeMarker: null,
  aliases: {},
  showLineNumbers: false,
  noInlineHighlight: true
}

const pluginSitemap = {
  output: `/sitemap.xml`,
  exclude: [
    `/tags`,
    `/tag/*`,
    `/categoria`,
    `/categoria/*`,
    `/404`,
    `/404.html`
  ]
}

const pluginManifest = {
  name: `${ author.name }`,
  short_name: `${ name }`,
  start_url: '/',
  background_color: '#ffffff',
  theme_color: '#25ced1',
  display: 'minimal-ui',
  icon: 'static/icon.png'
}

const pluginGraphql = {
  typeName: 'GitHub',
  fieldName: 'github',
  url: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${ GITHUB_TOKEN }`
  },
  fetchOptions: {}
}

module.exports = {
  siteMetadata,
  pluginFonts,
  pluginAnalytics,
  favicon,
  remarkImages,
  remarkPrismjs,
  pluginSitemap,
  pluginManifest,
  pluginGraphql
}
