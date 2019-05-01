import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Label,
  FormGroup,
  CardDeck,
  CardFooter,
  Button,
} from '@cwds/components'
import { FormField, Select, InputMask, RadioGroup } from '@cwds/forms'

import { CLIENTMASK, SSNMASK } from './Masks'

const options = [
  { value: 'Months', label: 'Months' },
  { value: 'Years', label: 'Years' },
]

const SnapshotSearchCard = () => {
  return (
    <CardDeck>
      <Card>
        <CardHeader>
          <CardTitle>
            Snapshot Search
            <div className="float-right">
              <a href="/">How to use Snapshot</a>
            </div>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col className="p-2" md="3">
              <FormField label="Last Name" name="foo" />
            </Col>
            <Col className="p-2" md="3">
              <FormField label="First Name" name="foo" />
            </Col>
            <Col className="p-2" md="3">
              <FormField label="Middle Name" name="foo" />
            </Col>
            <Col className="p-2" md="3">
              <FormField label="Suffix" name="foo" />
            </Col>
          </Row>
          <Row>
            <Col className="p-2" md="3">
              <FormGroup>
                <Label>Age</Label>
                <Select placeholder="Approximate Age" />
              </FormGroup>
            </Col>
            <Col className="p-2" md="3">
              <FormGroup>
                <Label>Sex at Birth</Label>
                <Select placeholder="" />
              </FormGroup>
            </Col>
            <Col className="p-2" md="3">
              <FormGroup>
                <Label>Client ID Number </Label>
                <InputMask
                  mask={CLIENTMASK}
                  placeholder="xxxx-xxxx-xxxxx-xxxxxx"
                />
              </FormGroup>
            </Col>
            <Col className="p-2" md="3">
              <FormGroup>
                <Label>Social Security Number </Label>
                <InputMask mask={SSNMASK} placeholder="xxx-xx-xxxx" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="p-2" md="3">
              {' '}
              <FormField
                label="Unit"
                Component={RadioGroup}
                options={options}
              />
            </Col>
            <Col className="p-2" md="3">
              <FormGroup>
                <Label>Number</Label>
                <Select placeholder="" />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <Button>Clear</Button>{' '}
          <Button type="submit" color="primary">
            Search
          </Button>
        </CardFooter>
      </Card>
    </CardDeck>
  )
}

export default SnapshotSearchCard
