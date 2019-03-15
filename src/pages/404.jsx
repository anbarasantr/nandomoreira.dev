import React from 'react'
import { graphql } from 'gatsby'
import { Error404 } from 'Components/Error404'

export default ({ data }) => <Error404 data={data} />

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
