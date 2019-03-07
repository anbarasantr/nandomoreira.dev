import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/Layout'
import HeroText from '../components/HeroText'

import SEO from '../components/SEO'
import SocialIcons from '../components/SocialIcons'
import IconArrowRight from '../components/Icons/ArrowRight'
import IconArrowLeft from '../components/Icons/ArrowLeft'

const title = 'Erro 404'
const description = 'Infelizmente a página que você está tentando acessar não foi localizada.'

const PageNotFound = () => (
  <Layout>
    <SEO
      title={title}
      description={description}
      pathname="/404.html"
    />
    <HeroText>
      <h1>Oops! Nada por aqui. {title}</h1>
      <p>{description}</p>
      <Link to="/" className="button button--primary">
        <IconArrowLeft size="20" />
        <span> Página inicial </span>
      </Link>
      <Link to="/contato" className="button button--secondary">
        <span> Entre em contato </span>
        <IconArrowRight size="20" />
      </Link>
      <SocialIcons />
    </HeroText>
  </Layout>
)

export default PageNotFound
