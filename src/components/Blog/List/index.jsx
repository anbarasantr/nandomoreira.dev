import React from 'react'

import { SEO, PageHeader, Pagination } from 'Components/Common'
import { Main, Container } from 'Components/Layout'
import { Post } from 'Components/Blog'
import classes from './bloglist.module.styl'

export const List = ({ data, pageContext }) => {
  const postsData = data.postsThree.edges
  const basePath = `/blog`
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? basePath
      : `${ basePath }/${ (currentPage - 1).toString() }`
  const nextPage = `${ basePath }/${ (currentPage + 1).toString() }`
  const currentPath = isFirst
    ? basePath
    : `${ basePath }/${ currentPage.toString() }`

  const paginate = {
    basePath,
    currentPage,
    numPages,
    isFirst,
    isLast,
    prevPage,
    nextPage
  }

  const title = 'Blog'
  const SEOtitle = isFirst
    ? `${ title } de Fernando Moreira`
    : `${ title } de Fernando Moreira -
        Página ${ (currentPage - 1).toString() }`

  const description =
    `Artigos sobre Tecnologia, Programação, Design,
      Produtividade, Vida e muito mais`

  return (
    <Main>
      <SEO title={SEOtitle} description={description} pathname={currentPath} />
      <PageHeader smallTitle={title} title={description} />
      <Container className={classes.BlogList}>
        <section className={classes.BlogList__section}>
          {postsData.map(({ node }, i) => (
            <Post post={node.frontmatter} key={i} />
          ))}

          <Pagination paginate={paginate} />
        </section>
      </Container>
    </Main>
  )
}
