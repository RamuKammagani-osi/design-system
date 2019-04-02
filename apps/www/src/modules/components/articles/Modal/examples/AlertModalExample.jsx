import React, { Component } from 'react'
import {
  Alert,
  CardTitle,
  Modal,
  ModalBody,
  ModalHeader,
  PrimalButton as Button,
} from '@cwds/components'

export default class AlertModalExample extends Component {
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
            <CardTitle>Horay! It worked!</CardTitle>
          </ModalHeader>
          <ModalBody>
            <Alert color="success">
              Success! The operation completed successfully
            </Alert>
            Hi, I am an Alert modal!
          </ModalBody>
          <div className="p-3 text-right">
            <Button className="m-1" onClick={this.toggle}>
              Close
            </Button>
            <Button className="m-1" color="primary" onClick={this.toggle}>
              Ok
            </Button>
          </div>
        </Modal>
      </div>
    )
  }
}
