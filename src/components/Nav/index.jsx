import React from 'react'
import Link from 'gatsby-link'
import Icon from '../Icons'
import module from './nav.module.styl'

class Nav extends React.Component {
  constructor() {
    super()

    this.state = {
      isOpen: false,
    }

    this.handleNavToggle = this.handleNavToggle.bind(this)
  }

  handleNavToggle(e) {
    this.setState({
      isOpen: e.target.checked,
    })
  }

  componentDidMount() {
    this.setState({ isOpen: false })
  }

  componentWillUnmount() {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <nav
        className={`nav ${module.nav} ${
          this.state.isOpen ? module.isOpen : ''
        }`}
        aria-label="Navigation"
        itemType="https://schema.org/SiteNavigationElement"
        itemScope
      >
        <input type="checkbox" id="toggleNav" onChange={this.handleNavToggle} />
        <label htmlFor="toggleNav" type="button" className={module.button}>
          <Icon id="icon-menu" fill="#50c290" className={module.iconMenu} />
          <Icon id="icon-close" fill="#50c290" className={module.iconClose} />
        </label>

        <ul className={`nav__list ${module.list}`}>
          {this.props.navLinks.map(item => {
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
  }
}

export default Nav
