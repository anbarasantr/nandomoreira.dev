import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import HeroText from 'components/HeroText'
import SEO from 'components/SEO'
import SocialIcons from 'components/SocialIcons'
import Icon from 'components/Icons/Icon'

const title = 'Erro 404'
const description =
  'Infelizmente a página que você está tentando acessar não foi localizada.'

export default ({ data }) => (
  <Layout>
    <SEO title={title} description={description} pathname="/404.html" />
    <HeroText>
      <h1>Oops! Nada por aqui. {title}</h1>
      <p>{description}</p>
      <Link to="/" className="button button--primary">
        <Icon id="arrow-left" style={{ padding: '5px' }} />
        <span> Página inicial </span>
      </Link>
      <Link to="/contato" className="button button--secondary">
        <span> Entre em contato </span>
        <Icon id="arrow-right" style={{ padding: '5px' }} />
      </Link>
      <SocialIcons icons={data.site.siteMetadata.social} />
    </HeroText>
  </Layout>
)

export const error404Query = graphql`
  query Error404Query {
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
