import React from 'react'
import { graphql } from 'gatsby'

import { SEO, PageHeader } from 'components/Common'
import { Main, Container } from 'components/Layout'

const title = 'O que estou fazendo agora?'

export default () => (
  <Main>
    <SEO
      title={title}
      description="Uma página tirada da idéia de Derek Sivers em Nownownow.com, onde blogueiros e proprietários de sites do mundo compartilham o que eles estão fazendo."
      pathname="/now"
    />
    <PageHeader smallTitle={`Now`} title={title} />
    <Container>
      <p>
        Now é uma página tirada da idéia de <strong>Derek Sivers</strong> em{' '}
        <a
          href="https://nownownow.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <em>Nownownow.com</em>
        </a>
        , onde blogueiros e proprietários de sites do mundo compartilham o que
        eles estão fazendo.
      </p>
    </Container>
  </Main>
)

export const nowQuery = graphql`
  query nowQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
