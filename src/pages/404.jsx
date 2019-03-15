import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Error404 } from 'Components/Error404'
import ThemeContext from 'Context/ThemeContext'

class PageNotFound extends Component {
  static contextType = ThemeContext

  componentDidMount () {
    const { setNotFound } = this.context

    setNotFound()
  }

  componentWillUnmount () {
    const { setFound } = this.context

    setFound()
  }

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
