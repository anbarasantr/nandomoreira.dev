import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import Hero from '../components/Hero'

import '../components/Layout/base.styl'

export default () => (
  <Fragment>
    <SEO title="Olá, eu me chamo Fernando Moreira" />
    <Hero />
  </Fragment>
)

export const indexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
