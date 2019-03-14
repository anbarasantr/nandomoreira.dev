import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import SEO from 'components/SEO'
import Layout from 'components/Layout'
import Container from 'components/Container'
import PageHeader from 'components/PageHeader'

const Tags = ({ data, pageContext }) => {
  if (!data.postsTagsThree) return null
  const { tag } = pageContext
  const { edges, totalCount } = data.postsTagsThree
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } marcados como #${tag}`

  return (
    <Layout>
      <SEO
        title={`Tag: #${tag}`}
        // description={post.frontmatter.description}
        // image={post.frontmatter.image.publicURL}
        // pathname={post.frontmatter.path}
      />
      <PageHeader title={tagHeader} smallTitle="Tag" />
      <Container>
        <ul>
          {edges.map(({ node }) => {
            const { path, title } = node.frontmatter
            return (
              <li key={path}>
                <Link to={path}>{title}</Link>
              </li>
            )
          })}
        </ul>
        {/* <Link to="/tags">All tags</Link> */}
      </Container>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    postsTagsThree: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            layout
            path
            title
            category
          }
        }
      }
    }
  }
`
