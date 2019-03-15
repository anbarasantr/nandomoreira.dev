import React from 'react'

export const Me = ({ age, classes }) => (
  <div className={classes.text}>
    <h2>Eu sou o Fernando, prazer em conhece-lo</h2>
    <p>
      Meu nome completo é <strong>Fernando Moreira Costa</strong>, tenho{' '}
      <span>{age}</span> anos, nasci e cresci em uma cidadezinha do interior de{' '}
      <strong>Rondônia</strong> chamada <strong>Ariquemes</strong> , sai de lá
      com 18 anos para me aventurar em <strong>Curitiba/PR</strong> onde moro
      atualmente.
    </p>
    <p>
      <span role="img" aria-label="emoji de um notebook">
        💻
      </span>{' '}
      Sou programador não por formação mas por vocação,{' '}
      <span role="img" aria-label="emoji de um abacate">
        🥑
      </span>{' '}
      vegetariano,
      <span role="img" aria-label="emoji de um violino">
        🎻
      </span>{' '}
      violinista,
      <span role="img" aria-label="emoji de uma carinha pensando">
        🤔
      </span>{' '}
      piadista{' '}
      <span role="img" aria-label="emoji de um coração">
        ❤️
      </span>
      e fã de beterraba.
    </p>
  </div>
)
