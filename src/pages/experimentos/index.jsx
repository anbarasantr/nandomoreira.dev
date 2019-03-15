import React from 'react'
import { Main, Container } from 'Components/Layout'
import { SEO, PageHeader } from 'Components/Common'

const title = 'Experimentos'
const description = 'Experimentos'

const Experiments = () => (
  <Main>
    <SEO title={title} description={description} pathname="/experimentos" />
    <PageHeader title={title}>
      <p>{description}</p>
    </PageHeader>
    <Container>
      <p>experimentos</p>
    </Container>
  </Main>
)

export default Experiments
