import React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@cwds/components'

class ModalExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      backdrop: true,
    }

    this.toggle = this.toggle.bind(this)
    this.changeBackdrop = this.changeBackdrop.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    })
  }

  changeBackdrop(e) {
    let value = e.target.value
    if (value !== 'static') {
      value = JSON.parse(value)
    }
    this.setState({ backdrop: value })
  }

  render() {
    return (
      <div>
        <Button outline onClick={this.toggle}>
          Search
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          fade={false}
          size="lg"
          backdrop="static"
        >
          <ModalHeader toggle={this.toggle}>Search for Components</ModalHeader>
          <ModalBody>
            <p>Yea... wouldn&apos;t that be nice?</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ModalExample
