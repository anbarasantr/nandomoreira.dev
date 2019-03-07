import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Container from '../../components/Container'
import PageHeader from '../../components/PageHeader'
import SocialIcons from '../../components/SocialIcons'
import HeroText from '../../components/HeroText'
// import ContactForm from '../../components/Form'

const title = 'Contato'
const description = 'Se você tem um projeto em mente ou está simplesmente interessado em bater um papo, entre em contato e vamos agitar as coisas'

const Contact = () => (
  <Layout>
    <SEO
      title={title}
      description={description}
      pathname="/contato"
    />
    <HeroText>
      <Container>
        <PageHeader title="E aí, vamos conversar?">
          <p>{description}, envie um email para...</p>
          <h2><a className="Contact__email" href="mailto:hi@nandomoreira.dev">hi[arroba]nandomoreira.dev</a></h2>
          {/* <p>... ou preencha o formulário abaixo!</p> */}
          <p>... ou chame em alguma de minhas redes sociais que é sucesso!</p>
        </PageHeader>
        {/* <ContactForm /> */}
        <SocialIcons />
      </Container>
    </HeroText>
  </Layout>
)

export default Contact

export const contactQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
