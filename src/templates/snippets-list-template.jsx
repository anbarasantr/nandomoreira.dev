import React from 'react'
import { graphql } from 'gatsby'
import { List } from 'components/Blog'

export default function Template ({ data, pageContext }) {
  if (!data.postsThree) return null
  return <List data={data} pageContext={pageContext} />
}

export const snippetsListQuery = graphql`
  query SnippetsListQuery($skip: Int!, $limit: Int!) {
    postsThree: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { layout: { eq: "snippets" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
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
