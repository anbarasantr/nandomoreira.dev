import React from 'react'

import SEO from '../SEO'
import Layout from '../Layout'
import Container from '../Container'
import PageHeader from '../PageHeader'
import Post from '../Post'
import Pagination from '../Pagination'
import module from './bloglist.module.styl'

const basePath = `/blog`

const BlogList = ({ data, pageContext }) => {
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

  return (
    <Layout>
      <SEO title={SEOtitle} description={description} pathname={currentPath} />
      <PageHeader smallTitle={title} title={description} />
      <Container className={module.BlogList}>
        <section className={module.BlogList__section}>
          {postsData.map((post, i) => (
            <Post post={post.node.frontmatter} key={i} />
          ))}

          <Pagination paginate={paginate} />
        </section>
      </Container>
    </Layout>
  )
}

export default BlogList
