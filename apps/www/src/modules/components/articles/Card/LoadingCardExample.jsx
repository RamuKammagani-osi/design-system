import React, { Component } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Placeholder,
  PrimitiveButton as Button,
} from '@cwds/components'

class Example extends Component {
  state = {
    isLoading: true,
  }
  toggleIsLoading = () => this.setState({ isLoading: !this.state.isLoading })
  render() {
    return (
      <div>
        <div className="text-right mb-2">
          <Button color="accent" size="sm" onClick={this.toggleIsLoading}>
            Toggle
          </Button>
        </div>
        <Card>
          <CardHeader>
            {this.state.isLoading ? (
              <Placeholder className="mb-0" />
            ) : (
              <CardTitle>Fred Jones</CardTitle>
            )}
          </CardHeader>
          <CardBody>
            {this.state.isLoading ? (
              <Placeholder grid cols={2} rows={3} md={6} />
            ) : (
              <ul>
                <li>Scooby-Doo</li>
                <li>Shaggy</li>
                <li>Daphne</li>
                <li>Velma</li>
              </ul>
            )}
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Example
