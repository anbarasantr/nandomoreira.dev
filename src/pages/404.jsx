import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Error404 } from 'Components/Error404'

class PageNotFound extends Component {
  render () {
    return <Error404 data={this.props.data} />
  }
}

export default PageNotFound

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
