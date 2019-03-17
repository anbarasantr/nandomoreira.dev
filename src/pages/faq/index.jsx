import React from 'react'

import { SEO, PageHeader } from 'components/Common'
import { Main, Container } from 'components/Layout'

const title = 'FAQ'
const description = 'FAQ'

const FAQ = () => (
  <Main>
    <SEO title={title} description={description} pathname="/faq" />
    <PageHeader title={title}>
      <p>{description}</p>
    </PageHeader>
    <Container>
      <p>{title}</p>
    </Container>
  </Main>
)

export default FAQ
