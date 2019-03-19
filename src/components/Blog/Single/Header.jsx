import React from 'react'
import Link from 'gatsby-link'
import kebabCase from 'lodash.kebabcase'
import moment from 'moment'
import 'moment/locale/pt-br'
import { Container } from 'components/Layout'
import classes from './postSingle.module.styl'

let styles = {}

export const Header = ({ frontmatter }) => {
  const { image, title, date, description, category } = frontmatter

  if (image.publicURL) {
    styles = {
      backgroundImage: `url(${ image.publicURL })`
    }
  }

  const dateFormated = moment(date).format('LL')

  return (
    <header className={`singleHeader ${ classes.header }` } style={styles}>
      {title && (
        <Container className={classes.inner} isSmall>
          <h4 className={classes.category}>
            Categoria:{' '}
            <strong>
              <Link to={`/categoria/${ kebabCase(category[0]) }`}>
                {category[0]}
              </Link>
            </strong>
          </h4>
          <h1 className={classes.title}>{title}</h1>
          <small>{dateFormated}</small>
          {description && <p>{description}</p>}
        </Container>
      )}
    </header>
  )
}
