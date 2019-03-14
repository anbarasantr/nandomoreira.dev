import React from 'react'
import Link from 'gatsby-link'
import kebabCase from 'lodash/kebabCase'
import moment from 'moment'
import 'moment/locale/pt-br'

import SEO from '../SEO'
import Image from '../Image'
import Layout from '../Layout'
import Container from '../Container'
import PostProgress from '../PostProgress'
import Comments from '../Comments'
import Icon from '../Icons'
import PostTags from '../PostTags'
import SocialShare from '../SocialShare'
import module from './projectSingle.module.styl'
import './projectSingle.styl'

const ProjectSingle = ({ data }) => {
  const post = data.markdownRemark

  const { siteUrl, disqusShortname, isProduction } = data.site.siteMetadata

  const disqusConfig = {
    identifier: `${post.frontmatter.path}/`,
    title: post.frontmatter.title,
  }

  const dateFormated = moment(post.frontmatter.date).format('MMM/YYYY')

  return (
    <Layout className={`projectSingle ${module.projectSingle}`}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image.publicURL}
        pathname={post.frontmatter.path}
        article={post.frontmatter}
      />
      <PostProgress />
      <Container>
        <div className={module.container}>
          <header className={module.header}>
            <h1>{post.frontmatter.title}</h1>
          </header>

          <h4 className={module.sectionTitle}>Data</h4>
          <p className={module.sectionText}>{dateFormated}</p>

          <h4 className={module.sectionTitle}>Categoria</h4>
          <p className={module.sectionText}>
            {post.frontmatter.category.map((category, index) => {
              return (
                <Link key={index} to={`/categoria/${kebabCase(category)}`}>
                  {category}
                </Link>
              )
            })}
          </p>

          <h4 className={module.sectionTitle}>Descrição</h4>
          <p className={module.sectionText}>{post.frontmatter.description}</p>

          <h4 className={module.sectionTitle}>Links do projeto</h4>
          <p className={module.sectionText}>
            {post.frontmatter.url === '#' &&
              post.frontmatter.category[0] !== 'Download' && (
                <span>
                  <Icon
                    id="icon-close"
                    fill="#898989"
                    style={{
                      padding: '5px',
                      display: 'inline-block',
                      verticalAlign: 'middle',
                    }}
                  />
                  <small
                    style={{
                      display: 'inline-block',
                      color: '#898989',
                      verticalAlign: 'middle',
                    }}
                  >
                    Projeto offline, parado ou descontinuado pelo cliente
                  </small>
                </span>
              )}
            {post.frontmatter.url && post.frontmatter.url !== '#' && (
              <span style={{ display: 'block' }}>
                Site:{' '}
                <a
                  href={`${post.frontmatter.url}?ref=${siteUrl}${
                    post.frontmatter.path
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.frontmatter.url}
                </a>
              </span>
            )}
            {post.frontmatter.repo && post.frontmatter.repo !== '#' && (
              <span style={{ display: 'block' }}>
                {post.frontmatter.category[0] !== 'Download' && `Repositódio: `}
                {post.frontmatter.category[0] === 'Download' &&
                  `Link para download: `}
                <a
                  href={`${post.frontmatter.repo}?ref=${siteUrl}${
                    post.frontmatter.path
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.frontmatter.repo}
                </a>
              </span>
            )}
          </p>
        </div>

        <Image
          node={data.markdownRemark.frontmatter.image}
          alt={data.markdownRemark.frontmatter.title}
        />

        <div className={module.container}>
          {post.html && (
            <div
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          )}

          <PostTags
            tags={post.frontmatter.tags}
            style={{
              marginTop: '1.875rem',
              paddingTop: '1.875rem',
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>

        <SocialShare
          link={`${siteUrl}${post.frontmatter.path}`}
          message={post.frontmatter.title}
        />

        {isProduction && (
          <Comments shortname={disqusShortname} config={disqusConfig} />
        )}
      </Container>
    </Layout>
  )
}

export default ProjectSingle
