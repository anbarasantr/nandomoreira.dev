import React from 'react'
import { SEO } from 'Components/Common'
import { Hero } from 'Components/Home'
import { BaseLayout } from 'Components/Layout'

export const Home = ({ title, navLinks, social }) => (
  <BaseLayout>
    <SEO title={title} />
    <Hero navLinks={navLinks} socialIcons={social} />
  </BaseLayout>
)
