import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Main, Container } from 'Components/Layout'
import { SEO, PageHeader, Icon } from 'Components/Common'
import { Skills } from 'Components/About/Skills'
import { AuthorBox } from 'Components/Blog'
import { GithubList } from 'Components/Github'

const title = 'Open-source'
const description =
  'Aqui estão alguns projetos open-source trabalhei recentemente'

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
            author {
              name
              bio
            }
          }
        }
        github {
          repositoryOwner(login: "nandomoreirame") {
            repositories(
              first: 12
              orderBy: { field: UPDATED_AT, direction: DESC }
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
          repositories: { edges }
        }
      },
      site: {
        siteMetadata: { author, skills, social },
      }
    }) => (
      <Main>
        <SEO title={title} description={description} pathname="/open-source" />
        <PageHeader smallTitle={title} title={description} />
        <Container>
          <GithubList repositories={edges} />
          <a
            className="button button--primary button--flex button--outline"
            href={`${ social.github }?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: '30px auto', maxWidth: '260px' }}
          >
            <Icon id="github" style={{ padding: '4px' }} />
            <span>Ver mais projetos</span>
          </a>
        </Container>
        <Skills skills={skills} />
        <Container isSmall>
          <AuthorBox
            author={author}
            donateLink={social.paypal}
          />
        </Container>
      </Main>
    )}
  />
)

export default OpenSource
