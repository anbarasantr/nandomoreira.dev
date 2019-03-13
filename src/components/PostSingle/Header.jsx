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
    <header className={module.Header} style={styles}>
      {title && (
        <Container className={module.__Inner}>
          <h4 className={module.__category}>
            Categoria:{' '}
            <strong>
              <Link to={`/categoria/${kebabCase(category[0])}`}>
                {category[0]}
              </Link>
            </strong>
          </h4>
          <h1 className={module.__Title}>{title}</h1>
          <small>{dateFormated}</small>
          {description && <p>{description}</p>}
        </Container>
      )}
    </header>
  )
}

export default PostSingleHeader
