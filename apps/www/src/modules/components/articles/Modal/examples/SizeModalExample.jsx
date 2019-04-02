import React, { Component } from 'react'
import {
  CardTitle,
  Modal,
  ModalBody,
  ModalHeader,
  PrimitiveButton as Button,
} from '@cwds/components'

export default class SizeModalExample extends Component {
  state = {
    ModalOpen: false,
  }
  toggle = () => {
    this.setState(prevState => ({
      ModalOpen: !prevState.ModalOpen,
    }))
  }
  render() {
    const { size, label } = this.props
    return (
      <div className="pb-2">
        <Button color="primary" onClick={this.toggle}>
          Open {label}
        </Button>
        <Modal size={size} isOpen={this.state.ModalOpen}>
          <ModalHeader toggle={this.toggle}>
            <CardTitle>{label} Modal</CardTitle>
          </ModalHeader>
          <ModalBody>
            Hi! I am a <em>{label}</em>
            <code className="px-1">
              [size={size ? `"${size}"` : 'asdf'}]
            </code>{' '}
            Modal!
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export const SizeModalExamples = () => {
  const sizes = [
    ['sm', 'Small'],
    [undefined, 'Default'],
    ['lg', 'Large'],
    ['xl', 'Extra Large'],
  ]
  return (
    <div>
      {sizes.map(([size, label], i) => (
        <SizeModalExample key={i} size={size} label={label} />
      ))}
    </div>
  )
}
