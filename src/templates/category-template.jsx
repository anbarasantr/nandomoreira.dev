import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Image from '../components/Image'

const TagPage = ({ data, pageContext }) => {
  const { category } = pageContext
  const tagHeader = `${category}`

  return (
    <div className="Container Padding-S">
      <section className="Top-S">
        <h1 className="Tax-Title">{tagHeader} </h1>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <div className="Grid50">
              <Image
                node={post.node.frontmatter.image}
                alt={post.node.frontmatter.title}
              />
              <div>
                <Link to={post.node.frontmatter.path}>
                  <h2>
                    <span className="highlight">
                      {post.node.frontmatter.title}
                    </span>
                  </h2>
                </Link>
                <p>{post.node.excerpt}</p>
                <small>Published on {post.node.frontmatter.date} </small>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

TagPage.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
}

export default TagPage

export const pageQuery = graphql`
  query PostByCategory($category: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "MMM/YYYY", locale: "pt-BR")
            tags
            path
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 60) {
                  src
                  srcSet
                  base64
                  aspectRatio
                  sizes
                }
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
