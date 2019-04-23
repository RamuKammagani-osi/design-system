import React from 'react'
import Select from 'react-select'
import { Row, Col, Label } from '@cwds/components'
import { Input } from '@cwds/reactstrap'
import { StatesData } from './StatesData'

const DriversLicenseDemo = () => {
  return (
    <div>
      <Label>Driver&apos;s License</Label>
      <Row>
        <Col xs="2">
          <Select options={StatesData} placeholder="" />
        </Col>
        <Col>
          <Input />
        </Col>
      </Row>
    </div>
  )
}

export default DriversLicenseDemo
