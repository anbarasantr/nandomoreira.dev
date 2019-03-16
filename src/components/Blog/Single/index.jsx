import React from 'react'

import { SEO, SocialShare, ListTags, ScrollProgress } from 'Components/Common'
import { Header, Content, Comments, AuthorBox } from 'Components/Blog'
import { Main, Container } from 'Components/Layout'

import classes from './postSingle.module.styl'
import './postSingle.styl'

export const Single = ({ data }) => {
  const post = data.markdownRemark
  const avatar = data.file
  const {
    siteUrl,
    isProduction,
    author,
    disqusShortname,
    social
  } = data.site.siteMetadata
  const disqusConfig = {
    identifier: `${ post.frontmatter.path }/`.replace(`/blog`, ``),
    title: post.frontmatter.title
  }

  return (
    <Main
      className={classes.single}
      itemProp="blogPost"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image.publicURL}
        pathname={post.frontmatter.path}
        article={post.frontmatter}
      />
      <ScrollProgress />
      <Header frontmatter={post.frontmatter} />
      <Container className={classes.small}>
        {/* <meta itemProp="mainEntityOfPage" content="/blog" /> */}
        <Content html={post.html}>
          <ListTags
            tags={post.frontmatter.tags}
            style={{
              marginTop: '1.875rem',
              paddingTop: '1.875rem',
              borderTop: '1px solid rgba(0, 0, 0, 0.1)'
            }}
          />
        </Content>

        <AuthorBox
          author={Object.assign({}, author, { avatar })}
          donateLink={social.paypal}
        />

        <SocialShare
          link={`${ siteUrl }${ post.frontmatter.path }`}
          message={post.frontmatter.title}
        />

        {isProduction && (
          <Comments shortname={disqusShortname} config={disqusConfig} />
        )}
      </Container>
    </Main>
  )
}
