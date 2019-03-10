import React from 'react'

import './herotext.styl'
import module from './herotext.module.styl'

const HeroText = ({ children }) => (
  <div className={`HeroText ${module.HeroText}`}>
    <div className={module.HeroText__inner}>{children}</div>
  </div>
)

export default HeroText
