import React from 'react'
import Link from 'gatsby-link'
import module from './nav.module.styl'

const Nav = ({ navLinks }) => (
  <nav
    className={`Nav ${module.Nav}`}
    aria-label="Navigation"
    itemType="https://schema.org/SiteNavigationElement"
    itemScope
  >
    <ul className={module.Nav__list}>
      {navLinks.map(item => {
        return (
          <li className={'Nav__item ' + module.Nav__item} key={item.path}>
            <Link
              className={module.Nav__link}
              activeClassName={module.Nav__linkActive}
              to={item.path}
              itemProp="url"
            >
              {item.name}
            </Link>
          </li>
        )
      })}
    </ul>
  </nav>
)

export default Nav
