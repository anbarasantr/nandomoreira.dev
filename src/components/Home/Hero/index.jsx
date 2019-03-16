import React from 'react'
import Link from 'gatsby-link'
import { SocialIcons, DarkSwitcher } from 'Components/Common'
import { Nav } from 'Components/Layout'
import classes from './hero.module.styl'
import './hero.styl'

export const Hero = ({ navLinks, socialIcons }) => (
  <div className={'hero ' + classes.hero}>
    <div
      className={classes.inner}
      itemScope
      itemType="http://schema.org/Person"
    >
      <h1 className={classes.title}>
        <span>Olá, eu me chamo</span> <strong itemProp="name">Fernando Moreira</strong>.
        <meta itemProp="jobTitle" content="Desenvolvedor front-end" />
        <meta itemProp="worksFor" content="Onedev.studio" />
      </h1>
      <p
        className={classes.presentation}
        role="presentation"
        itemProp="description"
      >
        Sou um <strong itemProp="jobTitle">desenvolvedor front-end</strong>.{' '}
        <a
          href="https://onedev.studio/"
          target="_blank"
          rel="noopener noreferrer"
        >Ajudo ONGs e pequenas empresas</a> a criar projetos web personalizados de alta
        qualidade. No meu tempo livre eu <Link to="/blog">escrevo em meu blog</Link> e contribuo com projetos <Link to="/open-source">open source</Link>.
      </p>
      <Nav navLinks={navLinks} />
      <SocialIcons icons={socialIcons} />
      <DarkSwitcher />
    </div>
  </div>
)
