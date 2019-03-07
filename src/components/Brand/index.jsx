import React, { Component } from 'react'
import Link from 'gatsby-link'
// import PropTypes from 'prop-types'

import module from './brand.module.styl'

class Brand extends Component {
  render() {
    return (
      <h1 className={module.Brand}>
        <Link className={module.Brand__link} to="/">
          <span>nando</span>moreira
        </Link>
      </h1>
    )
  }
}

Brand.defaultProps = {
  type: 'short'
}

export default Brand
