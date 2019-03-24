import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Main, Container } from 'components/Layout'
import { SEO, PageHeader, Icon } from 'components/Common'
import { Skills } from 'components/About/Skills'
import { AuthorBox } from 'components/Blog'
import { GithubList } from 'components/Github'

const title = 'Lab'
const description =
  'Aqui estão alguns projetos open-source trabalhei recentemente'

const LabPage = () => (
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
              orderBy: { field: PUSHED_AT, direction: DESC }
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
        <SEO title={title} description={description} pathname="/lab" />
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

export default LabPage
