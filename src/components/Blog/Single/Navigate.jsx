import React from 'react'
import Link from 'gatsby-link'

export const Navigate = ({ next, prev }) => {
  if (!(prev && next)) return null
  return (
    <nav className="PostNavigate">
      <ul className="PostNavigate__inner">
        <li className="PostNavigate__prev">
          {prev && <Link to={prev.frontmatter.path}>← Anterior</Link>}
        </li>
        <li className="PostNavigate__next">
          {next && <Link to={next.frontmatter.path}>Próximo → </Link>}
        </li>
      </ul>
    </nav>
  )
}
