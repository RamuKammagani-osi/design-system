import React, { Component } from 'react'
import { Card, CardBody, CardTitle, Infotip } from '@cwds/components'

export default class Example extends Component {
  // eslint-disable-next-line no-magic-numbers
  DELAY = 350
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
        this.DELAY
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
        this.DELAY
      )
    }
  }
  handleBlur = () => {
    clearTimeout(this._timeout)
    this.setState({ hasFocus: false })
  }
  render() {
    return (
      <Card className={this.props.className}>
        <CardBody>
          <CardTitle>
            Something Ambiguous
            <Infotip
              id={this.props.id}
              isOpen={this.isOpen}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            >
              <p className="mb-0">
                Here is some helpful text to help people that may need help!
              </p>
            </Infotip>
          </CardTitle>
        </CardBody>
      </Card>
    )
  }
}
