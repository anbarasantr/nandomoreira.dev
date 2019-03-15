import React from 'react'
import Link from 'gatsby-link'
import classes from './post.module.styl'
import { Icon, ListTags } from 'Components/Common'

export const Post = ({ post }) => {
  const tags = post.tags || []
  return (
    <article
      className={classes.item}
      itemProp="blogPost"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <meta itemProp="mainEntityOfPage" content={post.path} />
      <Link className={classes.inner} to={post.path}>
        <header className={classes.header}>
          <small>
            <span className={classes.category}>
              Categoria: <strong>{post.category[0]}</strong>
            </span>
            {post.date && (
              <time
                className={classes.date}
                dateTime={post.date}
                itemProp="datePublished"
              >
                {post.date}
                <meta itemProp="dateModified" content={post.date} />
              </time>
            )}
          </small>
          <h1 itemProp="name headline">{post.title}</h1>
        </header>
        <div className={classes.content} itemProp="description">
          <p>{post.description}</p>
        </div>
        {post.layout !== 'snippets' && (
          <div className={classes.footer}>
            <ListTags tags={tags} showLinks={false} />
            <Icon
              id="arrow-right"
              fill="#25ced1"
              className={classes.iconRight}
            />
          </div>
        )}
      </Link>
    </article>
  )
}
