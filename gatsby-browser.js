import React from 'react' // eslint-disable-line
import Zooming from 'zooming'

require('prismjs/themes/prism-tomorrow.css')
require('prismjs/plugins/line-numbers/prism-line-numbers.css')

export const onInitialClientRender = () => {
  console.log("ReactDOM.render has executed")

  const zooming = new Zooming({
    bgColor: 'rgb(255, 255, 255)',
    preloadImage: true,
    zIndex: 10000
  })

  zooming.listen('.gatsby-resp-image-link img')
}
