import React, { Component } from 'react'
import UserMenu from './UserMenu'

class UncontrolledUserMenu extends Component {
  state = { isOpen: false }
  toggle = () => this.setState({ isOpen: !this.state.isOpen })
  render() {
    return (
      <UserMenu
        isOpen={this.state.isOpen}
        toggle={this.toggle}
        {...this.props}
      />
    )
  }
}

export default UncontrolledUserMenu
