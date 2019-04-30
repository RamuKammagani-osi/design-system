import React from 'react'
import { Link } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  Page,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
} from '@cwds/components'
import DriversLicenseDemo from './DriversLicenseDemo'

export default () => (
  <Page
    title="Driver's License"
    Breadcrumb={
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Dashboard</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/">Demos</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Driver&apos;s License</BreadcrumbItem>
      </Breadcrumb>
    }
    main={() => (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Driver&apos;s License</CardTitle>
          </CardHeader>
          <CardBody>
            <DriversLicenseDemo />
          </CardBody>
        </Card>
      </div>
    )}
  />
)
