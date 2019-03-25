import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import pick from 'lodash.pick'
import {
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Page,
  Row,
} from '@cwds/components'

class ToggleRadios extends Component {
  static defaultProps = {
    options: [
      { value: 'foo', label: 'Foo' },
      { value: 'bar', label: 'Bar' },
      { value: 'quo', label: 'Quo' },
    ],
    color: 'secondary',
    size: undefined,
    outline: undefined,
    onChange: () => {},
  }

  handleClick = e => {
    this.props.onChange(e.target.value)
  }

  render() {
    const buttonProps = pick(this.props, ['color', 'size', 'outline'])
    return (
      <ButtonGroup>
        {this.props.options.map(option => {
          return (
            <Button
              key={option.value}
              {...buttonProps}
              value={option.value}
              onClick={this.handleClick}
              active={option.value === this.props.value}
            >
              {option.label}
            </Button>
          )
        })}
      </ButtonGroup>
    )
  }
}

export class ToggleDemos extends Component {
  combinations = [
    ['default', {}],
    ['outline', { outline: true }],
    ['color="primary"', { color: 'primary' }],
    ['color="primary" outline', { color: 'primary', outline: true }],
    ['color="primary" size="sm"', { color: 'primary', size: 'sm' }],
    ['color="primary" size="lg"', { color: 'primary', size: 'lg' }],
  ]
  state = {
    radioValue: undefined,
    value2: undefined,
  }
  handleRadioChange = radioValue => {
    this.setState({ radioValue })
  }
  render() {
    return (
      <Page
        title="Toggles"
        Breadcrumb={
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>Demos</BreadcrumbItem>
            <BreadcrumbItem active>Toggles</BreadcrumbItem>
          </Breadcrumb>
        }
      >
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Toggles</CardTitle>
            </CardHeader>
            <CardBody>
              <Row className="mb-2">
                <Col sm={2}>Props</Col>
                <Col>Toggle</Col>
                <Col>Button</Col>
              </Row>
              {this.combinations.map(([name, props], index) => {
                return (
                  <Row key={index} className="mb-2">
                    <Col sm={2}>{name}</Col>
                    <Col>
                      <ToggleRadios
                        value={this.state.radioValue}
                        onChange={this.handleRadioChange}
                        {...props}
                      />
                    </Col>
                    <Col>
                      <Button {...props}>Button</Button>{' '}
                      <Button {...props} active>
                        Active
                      </Button>{' '}
                      <Button {...props} disabled>
                        Disabled
                      </Button>
                    </Col>
                  </Row>
                )
              })}
            </CardBody>
          </Card>
        </div>
        <Alert color="warning">
          <strong>Note</strong>: Keyboard navigability <em>should</em> depend on
          whether or not the control behaves as a <code>radio group</code>.
          Example: There should be a keyboard context and the arrow keys SHOULD
          work for radio groups... Here, we take a little shortcut. OK for
          non-forms, but useage as a form field control is NOT recommended.
        </Alert>
      </Page>
    )
  }
}

export default ToggleDemos
