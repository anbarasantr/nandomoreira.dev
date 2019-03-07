import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import module from './footer.module.styl'

class Footer extends Component {
  render() {
    return (
      <footer className={module.Footer}>
        <span>
          Desenvolvido em{' '}
          <address itemScope itemType="https://schema.org/PostalAddress">
            Curitiba-PR, Brasil
          </address>{' '}
          com o{' '}
          <span role="img" aria-label="coração" title="coração">
            ❤
          </span>{' '}
          por <strong>Fernando Moreira</strong>, usando{' '}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>{' '}
          e hospedado no{' '}
          <a
            href="https://netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          . Veja o{' '}
          <a
            href="https://github.com/nandomoreirame/nandomoreira.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            código-fonte
          </a>
          .
        </span>
      </footer>
    )
  }
}

Footer.defaultProps = {
  type: 'short',
}

export default Footer
