import React from 'react'
import SEO from '../SEO'
import Layout from '../Layout'
import Container from '../Container'
import AuthorBox from '../AuthorBox'
import Comments from '../Comments'
import PostProgress from '../PostProgress'
import PostSingleHeader from '../PostSingle/Header'
import PostSingleContent from '../PostSingle/Content'
import PostTags from '../PostTags'
import PostNavigate from '../PostSingle/PostNavigate'
import module from './postSingle.module.styl'

const PostSinple = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const avatar = data.file
  const {
    isProduction,
    author,
    disqusShortname,
    social,
  } = data.site.siteMetadata
  const { next, prev } = pageContext
  const disqusConfig = {
    identifier: `${post.frontmatter.path}/`.replace(`/blog`, ``),
    title: post.frontmatter.title,
  }

  return (
    <Layout
      className={module.PostSinple}
      itemProp="blogPost"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image.publicURL}
        pathname={post.frontmatter.path}
        article={true}
      />
      <PostProgress />
      <PostSingleHeader frontmatter={post.frontmatter} />
      <Container className="blog-container">
        <meta itemProp="mainEntityOfPage" content={post.frontmatter.path} />
        <PostSingleContent html={post.html}>
          <PostNavigate prev={prev} next={next} />
          <PostTags
            tags={post.frontmatter.tags}
            style={{
              marginTop: '1.875rem',
              paddingTop: '1.875rem',
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            }}
          />
        </PostSingleContent>
        <AuthorBox
          author={Object.assign({}, author, { avatar })}
          socialIcons={social}
        />
        {isProduction && (
          <Comments shortname={disqusShortname} config={disqusConfig} />
        )}
      </Container>
    </Layout>
  )
}

export default PostSinple
