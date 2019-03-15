import React from 'react'
import Link from 'gatsby-link'
import classes from './pagination.module.styl'
import { Icon } from 'Components/Common'

export const Pagination = ({ paginate }) => {
  const { basePath, isFirst, prevPage, numPages, isLast, nextPage } = paginate

  return (
    <div className={classes.pagination}>
      {!isFirst && (
        <Link
          to={prevPage}
          rel="prev"
          className={`${classes.link} ${classes.linkPrev}`}
        >
          <Icon id="arrow-left" style={{ padding: '5px' }} />
        </Link>
      )}

      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`${i === 0 ? `${basePath}` : `${basePath}/${i + 1}`}`}
          className={`${classes.link} ${classes.linkNumber}`}
          activeClassName={classes.linkCurrent}
        >
          {i + 1}
        </Link>
      ))}

      {!isLast && (
        <Link
          to={nextPage}
          rel="next"
          className={`${classes.link} ${classes.linkNext}`}
        >
          <Icon id="arrow-right" style={{ padding: '5px' }} />
        </Link>
      )}
    </div>
  )
}
