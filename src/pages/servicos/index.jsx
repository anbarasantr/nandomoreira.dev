import React from 'react'
import { graphql } from 'gatsby'

import {
  SEO,
  Layout,
  Container,
  PageHeader,
  SocialIcons,
} from 'Components/Common'

const title = 'Serviços'
const description =
  'Para entrar em contato comigo basta me seguir em qualquer uma das minhas redes sociais e chamar por DM'

export default ({ data }) => (
  <Layout>
    <SEO
      title={`${title}: O que eu posso fazer por você?`}
      description={description}
      pathname="/servicos"
    />
    <PageHeader smallTitle={title} title="O que eu posso fazer por você?" />
    <Container>
      {/* {data.site.siteMetadata.services.map((service, i) => (
        <div key={i}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))} */}
      <SocialIcons />
    </Container>
  </Layout>
)

export const servicesQuery = graphql`
  query ServicesQuery {
    site {
      siteMetadata {
        services {
          title
          description
        }
      }
    }
  }
`
