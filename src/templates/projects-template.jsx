import React from 'react'
import { graphql } from 'gatsby'

import SEO from 'components/SEO'
import Layout from 'components/Layout'
import Container from 'components/Container'
import PageHeader from 'components/PageHeader'
import ProjectList from 'components/ProjectList'
import Pagination from 'components/Pagination'

const basePath = `/portfolio`

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

  const projects = data.portfolioThree.edges

  const paginate = {
    basePath,
    currentPage,
    numPages,
    isFirst,
    isLast,
    prevPage,
    nextPage,
  }

  const title = 'Portfolio'
  const SEOtitle = isFirst
    ? `${title} de Fernando Moreira`
    : `${title} de Fernando Moreira - Página ${(currentPage - 1).toString()}`
  const description =
    'Gosto de criar ferramentas e aplicativos web de alta performance, também gosto de tornar o mundo para outras pessoas um pouco mais fácil, na maioria das vezes usando WordPress e/ou JavaScript.'

  return (
    <Layout>
      <SEO title={SEOtitle} description={description} pathname={currentPath} />
      <PageHeader
        smallTitle={title}
        title="Abaixo estão listados alguns dos meus melhores trabalhos"
      />
      <Container>
        <ProjectList projects={projects} />
        <Pagination paginate={paginate} />
      </Container>
    </Layout>
  )
}

export const projectsQuery = graphql`
  query ProjectsPageQuery($skip: Int!, $limit: Int!) {
    portfolioThree: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { layout: { eq: "project" } } }
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
            title
            date(formatString: "MMM/YYYY", locale: "pt-BR")
            category
            description
            tags
            image {
              publicURL
              childImageSharp {
                sizes(maxWidth: 800, quality: 75) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
