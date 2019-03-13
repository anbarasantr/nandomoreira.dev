import React from 'react'
import { graphql } from 'gatsby'
import PostSingle from 'components/PostSingle'

export default function Template({ data, pageContext }) {
  if (!data.markdownRemark) return null
  return <PostSingle data={data} pageContext={pageContext} />
}

export const postQuery = graphql`
  query PostByPath($path: String!) {
    site {
      siteMetadata {
        siteUrl
        isProduction
        disqusShortname
        author {
          name
          bio
        }
        social {
          github
          instagram
          twitter
          codepen
          linkedin
          dribbble
          behance
          npm
        }
      }
    }
    file(relativePath: { eq: "sobre/avatar.png" }) {
      childImageSharp {
        fixed(width: 220, height: 220, quality: 75) {
          src
          srcSet
          base64
          width
          height
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        path
        title
        date(formatString: "LL", locale: "pt-BR")
        description
        category
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 1075, quality: 60) {
              src
            }
          }
          publicURL
        }
      }
    }
  }
`
