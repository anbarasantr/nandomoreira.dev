import React from 'react'

import SEO from '../../components/SEO'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import PageHeader from '../../components/PageHeader'

const title = 'FAQ'
const description = 'FAQ'

const FAQ = () => (
  <Layout>
    <SEO
      title={title}
      description={description}
      pathname="/faq"
    />
    <Container>
      <PageHeader title={title}>
        <p>{description}</p>
      </PageHeader>
    </Container>
  </Layout>
)

export default FAQ
