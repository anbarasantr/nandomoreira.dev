import React from 'react'
import Link from 'gatsby-link'
import Nav from '../Nav'
import SocialIcons from '../SocialIcons'
import module from './hero.module.styl'
import './hero.styl'

const Hero = ({ navLinks, socialIcons }) => (
  <main className={'hero ' + module.hero}>
    <div className={module.inner} itemScope itemType="http://schema.org/Person">
      <h1 className={module.title}>
        <span>Olá, eu me chamo</span>
        <Link to="/sobre" rel="author" itemProp="url">
          <strong itemProp="name">Fernando Moreira</strong>.
        </Link>
        <meta itemProp="jobTitle" content="Desenvolvedor front-end" />
        <meta itemProp="worksFor" content="Onedev.studio" />
      </h1>
      <p
        className={module.presentation}
        role="presentation"
        itemProp="description"
      >
        Sou um <strong itemProp="jobTitle">desenvolvedor front-end</strong>.{' '}
        <a
          href="http://agencia.nossacausa.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ajudo ONGs
        </a>{' '}
        e pequenas empresas a criar projetos web personalizados de alta
        qualidade. No meu tempo livre eu{' '}
        <Link to="/blog">escrevo em meu blog</Link> e contribuo com projetos{' '}
        <a
          href="https://github.com/nandomoreirame"
          target="_blank"
          rel="noopener noreferrer"
        >
          open source
        </a>
        .
      </p>
      <Nav navLinks={navLinks} />
      <SocialIcons icons={socialIcons} />
    </div>
  </main>
)

export default Hero
