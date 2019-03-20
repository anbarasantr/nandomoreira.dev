import React from 'react'
import { graphql } from 'gatsby'

import { SEO, PageHeader, SocialIcons } from 'components/Common'
import { Main, Container } from 'components/Layout'
import ContactForm from 'components/Contact'
import classes from './contact.module.styl'

const title = 'Contato'
const description =
  'Você tem um projeto em mente ou está simplesmente interessado em bater um papo, entre em contato!'

const Contact = ({ data }) => (
  <Main>
    <SEO title={title} description={description} pathname="/contato" />
    <PageHeader
      smallTitle="Contato"
      title="E aí, vamos conversar?"
      style={{ textAlign: 'center' }}
    >
      <p>{description}</p>
    </PageHeader>
    <Container>
      <div className={classes.contact}>
        <div className={classes.left}>
          <p className="card">
            <span>Envie um email para: </span>
            <a className="Contact__email" href="mailto:hi@nandomoreira.dev">
              hi@nandomoreira.dev
            </a>
          </p>
          <span
            style={{
              textAlign: 'center',
              display: 'block',
              marginBottom: '15px'
            }}
          >
            ... ou chame em alguma de minhas redes sociais que é sucesso!
          </span>
          <SocialIcons
            icons={data.site.siteMetadata.social}
            style={{ textAlign: 'center' }}
          />
        </div>
        <div className={classes.right}>
          <ContactForm services={data.site.siteMetadata.services} />
        </div>
      </div>
    </Container>
  </Main>
)

export default Contact

export const contactQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        services {
          title
          description
        }
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
