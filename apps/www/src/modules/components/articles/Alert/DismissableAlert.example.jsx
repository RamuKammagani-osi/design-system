import React, { Component } from 'react'
import { Row, Col, Card, CardBody, Alert } from '@cwds/components'
import { DemoCard, CodeBlock } from '@cwds/docs'

class DismissableAlertExample extends Component {
  rdoGrpName = 'DismissableAlertExampleGroup'
  state = {
    isOpen: true,
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    return (
      <DemoCard>
        <div>
          <Alert toggle={this.toggle} isOpen={this.state.isOpen}>
            <p>I am dismissable!</p>
            <p>
              This <code>Alert</code> has sufficiently long content to
              demonstrate the overflow and wrapping behavior of the component.
            </p>
            <p className="mb-0">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </Alert>
          <Card className="mb-0">
            <CardBody>
              <Row>
                <Col md="6">
                  <fieldset>
                    <legend>
                      <small>isOpen</small>
                    </legend>
                    {[
                      { label: 'True', value: true },
                      { label: 'False', value: false },
                    ].map(({ label, value }) => (
                      <label key={label} className="mr-3">
                        <input
                          type="radio"
                          name={this.rdoGrpName}
                          value={value}
                          checked={value === this.state.isOpen}
                          onChange={this.toggle}
                          className="mr-1"
                        />
                        {label}
                      </label>
                    ))}
                  </fieldset>
                </Col>
                <Col md="6">
                  <CodeBlock language="json" className="my-0">
                    {JSON.stringify(this.state, null, 2)}
                  </CodeBlock>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </DemoCard>
    )
  }
}

export default DismissableAlertExample
