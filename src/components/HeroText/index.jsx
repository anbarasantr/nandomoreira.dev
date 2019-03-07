import React, { Component } from 'react'

import './herotext.styl'
import module from './herotext.module.styl'

class HeroText extends Component {
  render() {
    return (
      <div className={`HeroText ${module.HeroText}`}>
        <div className={module.HeroText__inner}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default HeroText
