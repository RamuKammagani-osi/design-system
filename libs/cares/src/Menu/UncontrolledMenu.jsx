import React, { Component } from 'react'
import Menu from './Menu'

class UncontrolledMenu extends Component {
  state = { isOpen: false }
  toggle = () => this.setState({ isOpen: !this.state.isOpen })
  render() {
    return (
      <Menu isOpen={this.state.isOpen} toggle={this.toggle} {...this.props} />
    )
  }
}

export default UncontrolledMenu
