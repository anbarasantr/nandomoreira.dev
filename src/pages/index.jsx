import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Icons from '../components/Icons'
import '../components/Layout/base.styl'

const Home = ({ data }) => (
  <Fragment>
    <Icons />
    <SEO title="Olá, eu me chamo Fernando Moreira" />
    <Hero socialIcons={data.site.siteMetadata.social} />
  </Fragment>
)

export default Home

export const homeQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        social {
          github
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
