import React, { Component } from 'react'
import Alert from './Alert'

class AlertUncontrolled extends Component {
  state = { isOpen: true }
  toggle = () => this.setState({ isOpen: !this.state.isOpen })
  render() {
    return (
      <Alert isOpen={this.state.isOpen} toggle={this.toggle} {...this.props} />
    )
  }
}

export default AlertUncontrolled
