import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Container from 'components/Container'
import SocialIcons from 'components/SocialIcons'
import PageHeader from 'components/PageHeader'
import ContactForm from 'components/Form'
import module from './contact.module.styl'

const title = 'Contato'
const description =
  'Você tem um projeto em mente ou está simplesmente interessado em bater um papo, entre em contato!'

const Contact = ({ data }) => (
  <Layout>
    <SEO title={title} description={description} pathname="/contato" />
    <PageHeader smallTitle="E aí, vamos conversar?" title={description} />
    <Container>
      <div className={module.contact}>
        <div className={module.left}>
          <p>
            <span>Envie um email para: </span>
            <a className="Contact__email" href="mailto:hi@nandomoreira.dev">
              hi@nandomoreira.dev
            </a>
          </p>
          <span
            style={{
              textAlign: 'center',
              display: 'block',
              marginBottom: '15px',
            }}
          >
            ... ou chame em alguma de minhas redes sociais que é sucesso!
          </span>
          <SocialIcons
            icons={data.site.siteMetadata.social}
            style={{ textAlign: 'center' }}
          />
        </div>
        <div className={module.right}>
          <ContactForm />
        </div>
      </div>
    </Container>
  </Layout>
)

export default Contact

export const contactQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        social {
          paypal
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
