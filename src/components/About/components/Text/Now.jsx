import React from 'react'
import Link from 'gatsby-link'

export const Now = ({ classes }) => (
  <div className={classes.text}>
    <h2>O que estou fazendo agora?</h2>
    <p>
      {' '}
      Uma página tirada da idéia de <strong>Derek Sivers</strong> em{' '}
      <a
        href="https://nownownow.com/"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        <em>Nownownow.com</em>
      </a>{' '}
      , onde blogueiros e proprietários de sites do mundo compartilham o que
      eles estão fazendo.
    </p>
    <p>
      {' '}
      Então, aqui é meu <em>Now</em> :{' '}
      <Link to="/now">O que estou fazendo agora</Link>
    </p>
  </div>
)
