import React from 'react'
import cn from 'classnames'
import {
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button,
} from '@cwds/components'

const PROP_COMBINATIONS = [
  ['Default', {}],
  ['Primary', { primary: true }],
  ['[size="small"]', { size: 'sm' }],
  ['primary + [size="small"]', { size: 'sm', primary: true }],
  ['[size="lg"]', { size: 'lg' }],
  ['primary + [size="lg"]', { size: 'lg', primary: true }],
]

export default () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
        </CardHeader>
        <CardBody>
          {PROP_COMBINATIONS.map(([name, props], index) => {
            return (
              <Row key={index} className="mb-2">
                <Col>
                  <Button {...props}>Button</Button>{' '}
                  <Button {...props} active>
                    Active
                  </Button>{' '}
                  <Button {...props} disabled>
                    Disabled
                  </Button>{' '}
                  <Button {...props} className={cn(props.className, 'focus')}>
                    Focus
                  </Button>
                </Col>
              </Row>
            )
          })}
        </CardBody>
      </Card>
    </div>
  )
}