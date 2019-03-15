import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import SEO from 'components/SEO'
import Layout from 'components/Layout'
import Container from 'components/Container'
import PageHeader from 'components/PageHeader'
import Skills from 'components/Skills'

const title = 'Projetos open-source'
const description = 'Projetos open-source'

const OpenSourceProjects = () => (
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
        <PageHeader title={title}>
          <p>{description}</p>
        </PageHeader>
        <Container>
          {edges.map(({ node }, i) => (
            <a
              key={i}
              href={node.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card card--hover"
              style={{ padding: '25px', margin: '60px 0' }}
            >
              <div>
                <h4>{node.name}</h4>
                <p>description: {node.description}</p>
                <p>homepageUrl: {node.homepageUrl}</p>
                <p>createdAt: {node.createdAt}</p>
                <p>pushedAt: {node.pushedAt}</p>
                <p>updatedAt: {node.updatedAt}</p>
                <p>forks: {node.forkCount}</p>
              </div>
            </a>
          ))}
          <Skills />
        </Container>
      </Layout>
    )}
  />
)

export default OpenSourceProjects
