import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { SEO, Layout, Container, PageHeader, Icon } from 'Components/Common'
import { Skills } from 'Components/About/Skills'
import { GithubList } from 'Components/Github'

const title = 'Open-source'
const description =
  'Esses são os projetos open-source que tenho trabalhado nos últimos meses'

const OpenSource = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            skills
            social {
              github
            }
          }
        }
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
      site: {
        siteMetadata: { skills, social },
      },
    }) => (
      <Layout>
        <SEO title={title} description={description} pathname="/open-source" />
        <PageHeader smallTitle={title} title={description} />
        <Container>
          <GithubList repositories={edges} />
          <a
            className="button buttonPrimary buttonFlex"
            href={`${social.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: '30px 0' }}
          >
            <Icon id="github" />
            <span>Ver mais projetos</span>
          </a>
          <Skills skills={skills} />
        </Container>
      </Layout>
    )}
  />
)

export default OpenSource
