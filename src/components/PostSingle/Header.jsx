import React from 'react'
import Container from '../Container'
import module from './postSingle.module.styl'

let styles = {}

const PostSingleHeader = ({ frontmatter }) => {
  const { image, title, date, description } = frontmatter

  if (image.publicURL) {
    styles = {
      backgroundImage: `url(${image.publicURL})`,
    }
  }

  return (
    <header className={module.Header} style={styles}>
      {title && (
        <Container className={module.Header__Inner}>
          <h1 className={module.Header__Title}>{title}</h1>
          {date && <small>{date}</small>}
          {description && <p>{description}</p>}
        </Container>
      )}
    </header>
  )
}

export default PostSingleHeader
