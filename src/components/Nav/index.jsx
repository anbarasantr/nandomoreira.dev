import React from 'react'
import Link from 'gatsby-link'
import module from './nav.module.styl'

const Nav = ({ navLinks }) => (
  <nav
    className={`Nav ${module.nav}`}
    aria-label="Navigation"
    itemType="https://schema.org/SiteNavigationElement"
    itemScope
  >
    <ul className={`nav__list ${module.list}`}>
      {navLinks.map(item => {
        return (
          <li className={`nav__item ${module.item}`} key={item.path}>
            <Link
              className={`nav__link ${module.link}`}
              activeClassName={`nav__link--active ${module.linkActive}`}
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
