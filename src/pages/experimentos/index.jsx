import React from 'react'
import { Layout, Container, SEO, PageHeader } from 'Components/Common'

const title = 'Experimentos'
const description = 'Experimentos'

const Experiments = () => (
  <Layout>
    <SEO title={title} description={description} pathname="/experimentos" />
    <PageHeader title={title}>
      <p>{description}</p>
    </PageHeader>
    <Container>
      <p>experimentos</p>
    </Container>
  </Layout>
)

export default Experiments
