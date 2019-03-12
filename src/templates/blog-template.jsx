import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageHeader from '../components/PageHeader'
import Post from '../components/Post'
import Pagination from '../components/Pagination'

const basePath = `/blog`

export default ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? basePath
      : `${basePath}/${(currentPage - 1).toString()}`
  const nextPage = `${basePath}/${(currentPage + 1).toString()}`
  const currentPath = isFirst
    ? basePath
    : `${basePath}/${currentPage.toString()}`

  const postsData = data.postsThree.edges

  const paginate = {
    basePath,
    currentPage,
    numPages,
    isFirst,
    isLast,
    prevPage,
    nextPage,
  }

  const title = 'Blog'
  const SEOtitle = isFirst
    ? `${title} de Fernando Moreira`
    : `${title} de Fernando Moreira - Página ${(currentPage - 1).toString()}`
  const description =
    'Artigos sobre Tecnologia, Programação, Design, Produtividade, Vida e muito mais'

  const styles = {
    posts: {
      marginRight: '-15px',
      marginLeft: '-15px',
    },
  }

  return (
    <Layout>
      <SEO title={SEOtitle} description={description} pathname={currentPath} />
      <PageHeader smallTitle={title} title={description} />
      <Container className="blog-container">
        <section style={styles.posts}>
          {postsData.map((post, i) => (
            <Post post={post.node.frontmatter} key={i} />
          ))}

          <Pagination paginate={paginate} />
        </section>
      </Container>
    </Layout>
  )
}

export const blogQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
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
