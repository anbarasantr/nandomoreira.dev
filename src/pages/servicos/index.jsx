import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Container from '../../components/Container'
import PageHeader from '../../components/PageHeader'
import SocialIcons from '../../components/SocialIcons'

const title = 'Serviços'
const description =
  'Para entrar em contato comigo basta me seguir em qualquer uma das minhas redes sociais e chamar por DM'

export default () => (
  <Layout>
    <SEO
      title={`${title}: O que eu posso fazer por você?`}
      description={description}
      pathname="/servicos"
    />
    <Container>
      <PageHeader title={title}>
        <p>{description}</p>
      </PageHeader>
      <SocialIcons />
    </Container>
  </Layout>
)

export const servicesQuery = graphql`
  query ServicesQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
