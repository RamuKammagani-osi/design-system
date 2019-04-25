import React, { Component } from 'react'
import pick from 'lodash.pick'
import { Button, Card, CardBody, CardHeader, CardTitle } from '@cwds/components'
import { FormField, Input } from '@cwds/forms'
import { CodeBlock } from '@cwds/docs'

export default class FormFieldExample extends Component {
  setFocus = () => {
    this.myRef.focus()
  }
  state = {
    values: {
      foo: '',
    },
    errors: {},
    touched: {},
  }
  handleChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    })
  }
  handleBlur = e => {
    this.setState({
      touched: {
        ...this.state.touched,
        [e.target.name]: true,
      },
    })
  }
  toggleError = () => {
    const fieldName = 'foo'
    this.setState({
      errors: {
        ...this.state.errors,
        [fieldName]: !this.state.errors[fieldName]
          ? 'Oh no! An Error Message'
          : null,
      },
    })
  }
  toggleHelpText = () => {
    this.setState({
      helpText: this.state.helpText ? null : 'Some helpful text',
    })
  }
  toggleDebug = () => {
    this.setState({
      isVisibleState: !this.state.isVisibleState,
    })
  }
  getState = () => pick(this.state, ['values', 'errors', 'touched'])
  render() {
    return (
      <Card>
        <CardHeader>
          <div className="d-flex">
            <CardTitle className="flex-grow-1">My Form</CardTitle>
            <div>
              <Button size="sm" onClick={this.setFocus}>
                Focus
              </Button>{' '}
              <Button
                size="sm"
                onClick={this.toggleHelpText}
                active={!!this.state.helpText}
              >
                HelpText
              </Button>{' '}
              <Button
                size="sm"
                onClick={this.toggleError}
                active={!!this.state.errors.foo}
              >
                Error
              </Button>{' '}
              <Button
                size="sm"
                onClick={this.toggleDebug}
                active={this.state.isVisibleState}
              >
                State
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <FormField
            label="Foo"
            name="foo"
            Component={Input}
            value={this.state.values.foo}
            touched={this.state.touched.foo}
            error={this.state.errors.foo}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            ref={el => (this.myRef = el)}
            helpText={this.state.helpText}
            required
            placeholder="Placeholder..."
            autoComplete="off"
          />
          {this.state.isVisibleState && (
            <div>
              <hr />
              <CodeBlock language="json">
                {JSON.stringify(this.getState(), null, 2)}
              </CodeBlock>
            </div>
          )}
        </CardBody>
      </Card>
    )
  }
}
