import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Infotip from './Infotip'

export default class UncontrolledInfotip extends Component {
  static propTypes = {
    /** Enter delay (milliseconds) */
    delay: PropTypes.number,
  }
  static defaultProps = {
    delay: 350,
  }
  state = {
    hasFocus: false,
    hasHover: false,
  }
  _timeout = null
  get isOpen() {
    return this.state.hasFocus || this.state.hasHover
  }
  handleMouseEnter = () => {
    if (!this.isOpen) {
      this._timeout = setTimeout(
        () => this.setState({ hasHover: true }),
        this.props.delay
      )
    }
  }
  handleMouseLeave = () => {
    clearTimeout(this._timeout)
    this.setState({ hasHover: false })
  }
  handleFocus = () => {
    if (!this.isOpen) {
      this._timeout = setTimeout(
        () => this.setState({ hasFocus: true }),
        this.props.delay
      )
    }
  }
  handleBlur = () => {
    clearTimeout(this._timeout)
    this.setState({ hasFocus: false })
  }
  render() {
    return (
      <Infotip
        isOpen={this.isOpen}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        {...this.props}
      />
    )
  }
}
