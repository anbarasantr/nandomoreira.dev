import React from 'react'

import { Layout, SEO, Container, PageHeader } from 'Components/Common'

const title = 'FAQ'
const description = 'FAQ'

const FAQ = () => (
  <Layout>
    <SEO title={title} description={description} pathname="/faq" />
    <PageHeader title={title}>
      <p>{description}</p>
    </PageHeader>
    <Container>
      <p>{title}</p>
    </Container>
  </Layout>
)

export default FAQ
