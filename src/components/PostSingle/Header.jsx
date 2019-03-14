import React from 'react'
import Link from 'gatsby-link'
import kebabCase from 'lodash/kebabCase'
import moment from 'moment'
import 'moment/locale/pt-br'
import Container from '../Container'
import module from './postSingle.module.styl'

let styles = {}

const PostSingleHeader = ({ frontmatter }) => {
  const { image, title, date, description, category } = frontmatter

  if (image.publicURL) {
    styles = {
      backgroundImage: `url(${image.publicURL})`,
    }
  }

  const dateFormated = moment(date).format('LL')

  return (
    <header className={module.header} style={styles}>
      {title && (
        <Container className={module.inner}>
          <h4 className={module.category}>
            Categoria:{' '}
            <strong>
              <Link to={`/categoria/${kebabCase(category[0])}`}>
                {category[0]}
              </Link>
            </strong>
          </h4>
          <h1 className={module.title}>{title}</h1>
          <small>{dateFormated}</small>
          {description && <p>{description}</p>}
        </Container>
      )}
    </header>
  )
}

export default PostSingleHeader
