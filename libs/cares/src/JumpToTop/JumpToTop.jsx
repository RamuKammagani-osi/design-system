import React, { Component } from 'react'
import cn from 'classnames'
import { Icon } from '@cwds/icons'
import Styles from './JumpToTop.module.scss'

class JumpToTop extends Component {
  static propTypes = {}
  static defaultProps = {}
  scrollToTop = () => {
    window.scrollTo(0, 0)
    this.el.blur()
  }
  render() {
    return (
      <button
        ref={el => (this.el = el)}
        className={cn(Styles.JumpToTop, 'p-2')}
        onClick={this.scrollToTop}
      >
        <span className="sr-only">Scroll to top</span>
        <Icon icon="arrow-up" className={cn(Styles.Icon)} />
      </button>
    )
  }
}

export default JumpToTop
