import React from 'react'
import { Link } from 'react-router-dom'
import { Alert, Breadcrumb, BreadcrumbItem, Page } from '@cwds/components'

const BreadcrumbNotFound = (
  <Breadcrumb>
    {[
      { title: 'Home', path: '/' },
      { title: 'Components', path: '/components' },
    ].map(d => (
      <BreadcrumbItem key={d.path}>
        <Link to={d.path}>{d.title}</Link>
      </BreadcrumbItem>
    ))}
  </Breadcrumb>
)

const NotFound = () => (
  <Page
    title="Components"
    layout="dashboard"
    Breadcrumb={BreadcrumbNotFound}
    main={<Alert color="danger">Component not found!</Alert>}
  />
)

export default NotFound
