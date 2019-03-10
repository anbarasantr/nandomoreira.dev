import React from 'react'
import Icon from '../Icons'
import styles from './styles'

class ScrollToTop extends React.Component {
  _isMounted = false

  constructor() {
    super()

    this.state = {
      showButton: false,
      intervalId: 0,
    }
  }

  listenScrollEvent = e => {
    if (window.scrollY > 100) {
      this.setState({ showButton: true })
      this._isMounted = true
    } else {
      this.setState({ showButton: false })
      this._isMounted = false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
    this._isMounted = true
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }

    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs,
    )
    this.setState({ intervalId: intervalId })
  }

  render() {
    return (
      <span>
        <button
          title="Back to top"
          aria-label="Back to top"
          style={{
            ...styles.scrollToTop,
            ...{ opacity: this.state.showButton ? 1 : 0 },
            ...{ visibility: this.state.showButton ? 'visible' : 'hidden' },
            ...{
              transform: `translate3d(0, ${
                this.state.showButton ? '0' : '60px'
              }, 0)`,
            },
          }}
          onClick={() => {
            this.scrollToTop()
          }}
        >
          <Icon
            id="icon-chevron-square-up-f"
            fill="#435b71"
            stype={{ padding: '0' }}
          />
        </button>
      </span>
    )
  }
}

export default ScrollToTop
