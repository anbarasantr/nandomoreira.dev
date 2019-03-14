import React from 'react'
import module from './alert.module.styl'

const Alert = ({ message, type = 'default' }) => {
  let alertClass = `${module.alert}`

  switch (type) {
    case 'success':
      alertClass += ` ${module.success}`
      break

    case 'danger':
    case 'error':
      alertClass += ` ${module.danger}`
      break

    case 'info':
      alertClass += ` ${module.info}`
      break

    case 'warning':
      alertClass += ` ${module.warning}`
      break

    default:
      alertClass += ` ${module.default}`
      break
  }

  return (
    <div className={alertClass}>
      <p>{message}</p>
    </div>
  )
}

export default Alert
