import React from 'react'
import Icon from '../Icons/Icon'
import module from './scrolltotop.module.styl'

class ScrollToTop extends React.Component {
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
    } else {
      this.setState({ showButton: false })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent)
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
      this.props.delayInMs
    )
    this.setState({ intervalId: intervalId })
  }

  render() {
    return (
      <button
        title="Ir para o topo"
        aria-label="Ir para o topo"
        className={module.scrollToTop}
        style={{
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
          id="chevron-square-up-f"
          className={module.scrollToTop__arrow}
          size="40px"
          fill="#25ced1"
          style={{ padding: '0' }}
        />
      </button>
    )
  }
}

export default ScrollToTop
