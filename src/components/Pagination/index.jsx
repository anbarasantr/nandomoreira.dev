import React from 'react'
import Link from 'gatsby-link'
import module from './pagination.module.styl'
import Icon from '../Icons/Icon'

export default ({ paginate }) => {
  const { basePath, isFirst, prevPage, numPages, isLast, nextPage } = paginate

  return (
    <div className={module.pagination}>
      {!isFirst && (
        <Link
          to={prevPage}
          rel="prev"
          className={`${module.link} ${module.linkPrev}`}
        >
          <Icon id="arrow-left" style={{ padding: '5px' }} />
        </Link>
      )}

      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`${i === 0 ? `${basePath}` : `${basePath}/${i + 1}`}`}
          className={`${module.link} ${module.linkNumber}`}
          activeClassName={module.linkCurrent}
        >
          {i + 1}
        </Link>
      ))}

      {!isLast && (
        <Link
          to={nextPage}
          rel="next"
          className={`${module.link} ${module.linkNext}`}
        >
          <Icon id="arrow-right" style={{ padding: '5px' }} />
        </Link>
      )}
    </div>
  )
}
