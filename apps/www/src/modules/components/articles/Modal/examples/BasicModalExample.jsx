import React, { Component } from 'react'
import {
  Modal,
  ModalBody,
  ModalHeader,
  CardTitle,
  PrimitiveButton as Button,
} from '@cwds/components'

export default class BasicModalExample extends Component {
  state = {
    ModalOpen: false,
  }
  toggle = () => {
    this.setState(prevState => ({
      ModalOpen: !prevState.ModalOpen,
    }))
  }
  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          Click me to open modal
        </Button>
        <Modal isOpen={this.state.ModalOpen}>
          <ModalHeader toggle={this.toggle}>
            <CardTitle>Modal title</CardTitle>
          </ModalHeader>
          <ModalBody>
            Hi, I am Modal. Only Clicking `X` will dismiss me.
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
