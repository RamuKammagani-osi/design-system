import React, { Component } from 'react'
import {
  PrimalButton as Button,
  CollapsibleCard,
  UncontrolledCollapsibleCard,
  CardBody,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@cwds/components'

class Example extends Component {
  state = {
    isOpen: true,
  }
  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
          Toggle
        </Button>
        <CollapsibleCard isOpen={this.state.isOpen}>
          <CardHeader>
            <CardTitle>Title</CardTitle>
          </CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </CollapsibleCard>
      </div>
    )
  }
}

const UncontrolledExample = () => (
  <UncontrolledCollapsibleCard>
    <CardHeader>
      <CardTitle>Uncontrolled Collapsible Card</CardTitle>
    </CardHeader>
    <CardBody>
      <p className="mb-0">Look Ma! No state!</p>
    </CardBody>
  </UncontrolledCollapsibleCard>
)

export { Example, UncontrolledExample }
