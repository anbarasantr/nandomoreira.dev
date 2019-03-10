import React from 'react'
// import Icon from '../Icons'
import module from './footer.module.styl'

const Footer = () => (
  <footer className={module.Footer}>
    {/* <button role="button" type="button">
      <Icon id="icon-moon" />
    </button> */}
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
      <a href="https://netlify.com/" target="_blank" rel="noopener noreferrer">
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

export default Footer
