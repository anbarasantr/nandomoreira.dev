import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import SEO from 'components/SEO'
import Layout from 'components/Layout'
import Container from 'components/Container'
import PageHeader from 'components/PageHeader'
import Skills from 'components/Skills'
import Github from 'components/Github'

const title = 'Open-source'
const description = 'Últimos projetos open-source que eu trabalhei recentemente'

const OpenSource = () => (
  <StaticQuery
    query={graphql`
      {
        github {
          repositoryOwner(login: "nandomoreirame") {
            repositories(
              first: 12
              orderBy: { field: CREATED_AT, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  homepageUrl
                  description
                  primaryLanguage {
                    color
                    name
                  }
                  stargazers {
                    totalCount
                  }
                  forkCount
                  createdAt
                  pushedAt
                  updatedAt
                }
              }
            }
          }
        }
      }
    `}
    render={({
      github: {
        repositoryOwner: {
          repositories: { edges },
        },
      },
    }) => (
      <Layout>
        <SEO title={title} description={description} pathname="/open-source" />
        <PageHeader smallTitle={title} title={description} />
        <Container>
          <Github repositories={edges} />
          <Skills />
        </Container>
      </Layout>
    )}
  />
)

export default OpenSource
