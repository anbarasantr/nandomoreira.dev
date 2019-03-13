import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from 'components/SEO'
import Layout from 'components/Layout'
import Container from 'components/Container'
import PageHeader from 'components/PageHeader'
import Image from 'components/Image'

const TagPage = ({ data, pageContext }) => {
  const { category } = pageContext
  const tagHeader = `${category}`

  return (
    <Layout>
      <SEO
        title={`Categoria: ${tagHeader}`}
        // description={post.frontmatter.description}
        // image={post.frontmatter.image.publicURL}
        // pathname={post.frontmatter.path}
      />
      <PageHeader title={tagHeader} smallTitle="Categoria" />
      <Container>
        {data.allMarkdownRemark.edges.map(post => (
          <div className="card" key={post.node.id}>
            <Image
              node={post.node.frontmatter.image}
              alt={post.node.frontmatter.title}
            />
            <Link to={post.node.frontmatter.path}>
              <h2>{post.node.frontmatter.title}</h2>
            </Link>
            <p>{post.node.excerpt}</p>
            <small>Published on {post.node.frontmatter.date} </small>
          </div>
        ))}
      </Container>
    </Layout>
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
