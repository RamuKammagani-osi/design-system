import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Collapse } from '@cwds/reactstrap'

class RolodexPanel extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    animate: PropTypes.bool,
    headerId: PropTypes.string.isRequired,
    panelId: PropTypes.string.isRequired,
    children: PropTypes.node,
  }
  constructor(props) {
    super(props)
    this.setAnimationState = this.setAnimationState.bind(this)
  }
  setAnimationState(animationState) {
    if (!this.props.animate) return
    this.setState({ animationState })
  }
  render() {
    const { isOpen, animate, children } = this.props
    return (
      <Collapse
        role="region"
        id={this.props.panelId}
        aria-labelledby={this.props.headerId}
        isOpen={isOpen}
        enter={!!animate}
        exit={!!animate}
        onEntering={() => this.setAnimationState('entering')}
        onEntered={() => this.setAnimationState('entered')}
        onExiting={() => this.setAnimationState('exiting')}
        onExited={() => this.setAnimationState('exited')}
      >
        {children}
      </Collapse>
    )
  }
}

export default RolodexPanel
