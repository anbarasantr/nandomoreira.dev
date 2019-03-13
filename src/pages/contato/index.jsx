import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Container from 'components/Container'
import SocialIcons from 'components/SocialIcons'
import PageHeader from 'components/PageHeader'
// import ContactForm from 'components/Form'

const title = 'Contato'
const description =
  'Se você tem um projeto em mente ou está simplesmente interessado em bater um papo, entre em contato comigo'

const Contact = ({ data }) => (
  <Layout>
    <SEO title={title} description={description} pathname="/contato" />
    <PageHeader smallTitle="E aí, vamos conversar?" title={description} />
    <Container>
      <p>
        <span>Envie um email para: </span>
        <a className="Contact__email" href="mailto:hi@nandomoreira.dev">
          hi@nandomoreira.dev
        </a>{' '}
        ... ou chame em alguma de minhas redes sociais que é sucesso!
      </p>
      {/* <ContactForm /> */}
      <SocialIcons icons={data.site.siteMetadata.social} />
    </Container>
  </Layout>
)

export default Contact

export const contactQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        social {
          github
          instagram
          twitter
          codepen
          linkedin
          dribbble
          behance
          npm
        }
      }
    }
  }
`
