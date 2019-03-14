import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from 'components/SEO'
import Layout from 'components/Layout'
import Container from 'components/Container'
import PageHeader from 'components/PageHeader'
import Post from 'components/Post'

const CategoryPage = ({ data, pageContext }) => {
  const { category } = pageContext
  const categoryHeader = `${category}`

  return (
    <Layout>
      <SEO
        title={`Categoria: ${categoryHeader}`}
        // description={post.frontmatter.description}
        // image={post.frontmatter.image.publicURL}
        // pathname={post.frontmatter.path}
      />
      <PageHeader title={categoryHeader} smallTitle="Categoria" />
      <Container>
        {data.allMarkdownRemark.edges.map((post, i) => (
          <Post post={post.node.frontmatter} key={i} />
        ))}
      </Container>
    </Layout>
  )
}

CategoryPage.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
}

export default CategoryPage

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
            category
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
