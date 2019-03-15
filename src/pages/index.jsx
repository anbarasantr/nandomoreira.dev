import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import SEO from 'components/SEO'
import Hero from 'components/Hero'
import 'components/Layout/base.styl'

const Home = ({ data }) => (
  <Fragment>
    <SEO title="Olá, eu me chamo Fernando Moreira" />
    <Hero
      navLinks={data.site.siteMetadata.navLinks}
      socialIcons={data.site.siteMetadata.social}
    />
  </Fragment>
)

export default Home

export const homeQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        navLinks {
          name
          path
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
