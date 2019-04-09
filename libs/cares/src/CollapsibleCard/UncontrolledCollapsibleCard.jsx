import React, { Component } from 'react'
import CollapsibleCard from './CollapsibleCard'

class UncontrolledCollapsibleCard extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: !props.initialClosed }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle(e) {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    return (
      <CollapsibleCard
        isOpen={this.state.isOpen}
        onToggle={this.handleToggle}
        {...this.props}
      />
    )
  }
}

export default UncontrolledCollapsibleCard
