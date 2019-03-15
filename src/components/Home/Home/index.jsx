import React, { Fragment } from 'react'
import { SEO } from 'Components/Common'
import { Hero } from 'Components/Home'

export const Home = ({ title, navLinks, social }) => (
  <Fragment>
    <SEO title={title} />
    <Hero navLinks={navLinks} socialIcons={social} />
  </Fragment>
)
