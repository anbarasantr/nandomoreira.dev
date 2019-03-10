import React from 'react'
import Link from 'gatsby-link'
import module from './pagination.module.styl'
import Icon from '../Icons'

export default ({ paginate }) => {
  const { basePath, isFirst, prevPage, numPages, isLast, nextPage } = paginate

  return (
    <div className={module.Pagination}>
      {!isFirst && (
        <Link
          to={prevPage}
          rel="prev"
          className={`${module.Pagination__link} ${
            module.Pagination__linkPrev
          }`}
        >
          <Icon id="icon-arrow-left" style={{ padding: '5px' }} />
        </Link>
      )}

      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`${i === 0 ? `${basePath}` : `${basePath}/${i + 1}`}`}
          className={`${module.Pagination__link} ${
            module.Pagination__linkNumber
          }`}
          activeClassName={module.Pagination__linkCurrent}
        >
          {i + 1}
        </Link>
      ))}

      {!isLast && (
        <Link
          to={nextPage}
          rel="next"
          className={`${module.Pagination__link} ${
            module.Pagination__linkNext
          }`}
        >
          <Icon id="icon-arrow-right" style={{ padding: '5px' }} />
        </Link>
      )}
    </div>
  )
}
