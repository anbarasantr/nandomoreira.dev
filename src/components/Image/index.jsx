import React from 'react'
import GatsbyImage from 'gatsby-image'

export default ({ node, ...props }) => {
  if (!node) return null

  if (node.childImageSharp && node.childImageSharp.fluid) {
    return <GatsbyImage fluid={node.childImageSharp.fluid} {...props} />
  }

  if (node.childImageSharp && node.childImageSharp.fixed) {
    return <GatsbyImage fixed={node.childImageSharp.fixed} {...props} />
  }

  if (node.childImageSharp && node.childImageSharp.sizes) {
    return <GatsbyImage sizes={node.childImageSharp.sizes} {...props} />
  }

  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={node.publicURL} {...props} />
}
