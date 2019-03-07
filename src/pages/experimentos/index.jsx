import React from 'react'

import SEO from '../../components/SEO'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import PageHeader from '../../components/PageHeader'

const title = 'Experimentos'
const description = 'Experimentos'

const Experiments = () => (
  <Layout>
    <SEO
      title={title}
      description={description}
      pathname="/experimentos"
    />
    <Container>
      <PageHeader title={title}>
        <p>{description}</p>
      </PageHeader>
    </Container>
  </Layout>
)

export default Experiments
