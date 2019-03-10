import React, { Component } from 'react'
import Link from 'gatsby-link'
import module from './nav.module.styl'

class Nav extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false,
      links: [
        {
          name: 'Sobre mim',
          path: '/sobre',
        },
        {
          name: 'Serviços',
          path: '/servicos',
        },
        {
          name: 'Portfolio',
          path: '/portfolio',
        },
        {
          name: 'Blog',
          path: '/blog',
        },
        {
          name: 'Contato',
          path: '/contato',
        },
      ],
    }

    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  componentDidMount() {
    window.closeNav = () => {
      this.closeNav()
    }
  }

  openNav() {
    this.setState({
      isOpen: true,
    })
  }

  closeNav() {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    return (
      <nav
        className={
          'Nav ' +
          module.Nav +
          (this.props.isTop ? ' Nav--top' : '') +
          (this.state.isOpen ? ' Nav--open' : '')
        }
        aria-label="Navigation"
        itemType="https://schema.org/SiteNavigationElement"
        itemScope
      >
        {this.props.isTop && (
          <Link className={module.Nav__logo} to="/">
            <span>nando</span>moreira
          </Link>
        )}

        <ul className={module.Nav__list}>
          {this.state.links.map(item => {
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

        <div className={module.Nav__close} onClick={this.closeNav}>
          <svg viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </div>

        <button className={module.Nav__toggle} onClick={this.openNav}>
          Menu
        </button>
      </nav>
    )
  }
}

Nav.defaultProps = {
  type: 'short',
}

export default Nav
