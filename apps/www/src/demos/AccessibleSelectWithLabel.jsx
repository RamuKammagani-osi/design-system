import React, { Component } from 'react'
import {
  Page,
  Button,
  FormGroup,
  Select,
  Input,
  Label,
  Form,
} from '@cwds/components'
import { CodeBlock } from '@cwds/docs'

class AccessibleSelectWithLabel extends Component {
  AGE_GROUP_OPTIONS = [
    { id: '1', value: '0-2', label: '0 - 2' },
    { id: '2', value: '2-4', label: '2 - 4' },
    { id: '3', value: '4-8', label: '4 - 8' },
    { id: '4', value: '8-16', label: '8 - 16' },
    { id: '5', value: 'gt_16', label: '>16' },
  ]

  COLOR_OPTIONS = [
    { id: '1', value: 'red', label: 'Red' },
    { id: '2', value: 'yellow', label: 'Yellow' },
    { id: '3', value: 'blue', label: 'Blue' },
  ]

  state = {
    values: {
      name: '',
      ageGroup: '',
      color: '',
    },
    submittedValues: null,
  }

  handleNameChange = e =>
    this.setState({
      values: { ...this.state.values, name: e.target.value },
    })

  handleAgeGroupChange = option => {
    this.setState({ values: { ...this.state.values, ageGroup: option.value } })
  }

  getAgeGroupValue = () =>
    this.AGE_GROUP_OPTIONS.find(d => d.value === this.state.values.ageGroup)

  handleColorChange = option =>
    this.setState({ values: { ...this.state.values, color: option.value } })

  getColorValue = () =>
    this.COLOR_OPTIONS.find(d => d.value === this.state.values.color)

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      submittedValues: JSON.parse(JSON.stringify(this.state.values)),
    })
  }

  render() {
    return (
      <Page title="Accessible Select with Label" Breadcrumb="Aria stuff etc">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="my-form__name">Name</Label>
            <Input
              type="text"
              name="name"
              id="my-form__name"
              autoComplete="off"
              value={this.state.values.name}
              onChange={this.handleNameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="my-form__age-group">Age Group</Label>
            <Select
              options={this.AGE_GROUP_OPTIONS}
              onChange={this.handleAgeGroupChange}
              inputId="my-form__age-group"
              value={this.getAgeGroupValue()}
            />
          </FormGroup>
          <FormGroup>
            <Label id="my-form__color--label">Color</Label>
            <Select
              options={this.COLOR_OPTIONS}
              onChange={this.handleColorChange}
              aria-labelledby="my-form__color--label"
              value={this.getColorValue()}
            />
          </FormGroup>
          <div className="text-right">
            <Button primary type="submit">
              Submit
            </Button>
          </div>
        </Form>
        {this.state.submittedValues && (
          <CodeBlock language="json">
            {JSON.stringify(this.state.submittedValues, null, 2)}
          </CodeBlock>
        )}
      </Page>
    )
  }
}

export default AccessibleSelectWithLabel
