import React from 'react'
import { graphql } from 'gatsby'
import { Main, Container } from 'components/Layout'

export default function Template ({ data }) {
  if (!data.markdownRemark) return null
  const post = data.markdownRemark
  return (
    <Main>
      <Container isSmall>
        <h1>{post.frontmatter.title}</h1>
        {post.html && (
          <div
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        )}
      </Container>
    </Main>
  )
}

export const snippetQuery = graphql`
  query SnippetByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        layout
        path
        title
        category
      }
    }
  }
`
