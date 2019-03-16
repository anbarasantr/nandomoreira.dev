import React from 'react'
import { graphql } from 'gatsby'
import { List } from 'Components/Blog'

export default ({ data, pageContext }) =>
  <List data={data} pageContext={pageContext} />

export const blogQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    postsThree: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { layout: { eq: "post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            layout
            path
            date(formatString: "MMM/YYYY", locale: "pt-BR")
            title
            description
            category
            tags
          }
        }
      }
    }
  }
`
