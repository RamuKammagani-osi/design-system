import React, { Fragment } from 'react'
import {
  Page,
  PrimalButton as Button,
  Breadcrumb,
  BreadcrumbItem,
  PageTitle,
} from '@cwds/components'

const PageStructure = () => (
  <Page
    layout="dashboard"
    // title="Page Structure"
    PageTitle={<PageTitle>Page Structure</PageTitle>}
    Brand={<div>Acme Widgets</div>}
    UserMenu={<div>Custom User Menu</div>}
    Breadcrumb={
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Parent</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/">Child</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>GrandChild</BreadcrumbItem>
      </Breadcrumb>
    }
    PageActions={
      <Fragment>
        <Button color="info" size="sm">
          Hello
        </Button>{' '}
        <Button color="info" size="sm">
          Goodbye
        </Button>
      </Fragment>
    }
  >
    Hello World
  </Page>
)

export default PageStructure
