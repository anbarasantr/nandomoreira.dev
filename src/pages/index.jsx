import React from 'react'
import { graphql } from 'gatsby'
import { Home } from 'Components/Home'

const Index = ({ data }) => (
  <Home
    title="Olá, eu me chamo Fernando Moreira"
    navLinks={data.site.siteMetadata.navLinks}
    social={data.site.siteMetadata.social}
  />
)

export default Index

export const indexQuery = graphql`
  query IndexQuery {
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
