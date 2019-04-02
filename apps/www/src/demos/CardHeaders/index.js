import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  PrimitiveButton as Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Page,
  Row,
  UncontrolledCollapsibleCard as CollapsibleCard,
} from '@cwds/components'

const sampleHeaderSnippet = (
  <Fragment>
    <CardTitle>Smtih, Sarah</CardTitle>
    <div>## years old</div>
    <div>DOB mm/dd/yyyy</div>
  </Fragment>
)

const sampleHeaderContent = (
  <Row>
    <Col sm={6}>
      <div className="mb-3 mb-sm-0">
        <CardTitle>Smtih, Sarah</CardTitle>
        <div>## years old</div>
        <div>DOB mm/dd/yyyy</div>
      </div>
    </Col>
    <Col sm={6}>
      <div className="float-sm-right">
        <CardTitle>San Joaquin County</CardTitle>
        <div>Cas/Referral Number</div>
        <div>6324-344-6524-34636353</div>
      </div>
    </Col>
  </Row>
)

class Demo extends Component {
  title = 'Card Headers'

  state = {
    layout: 'subroutes',
  }

  handleToggleClick = layout => _ => this.setState({ layout })

  render() {
    const isSubRoute = this.state.layout === 'subroutes'
    return (
      <Page
        title={this.title}
        layout={this.state.layout}
        Breadcrumb={
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Dashboard</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>Demos</BreadcrumbItem>
            <BreadcrumbItem active>{this.title}</BreadcrumbItem>
          </Breadcrumb>
        }
        sidenav={null}
        PageActions={
          <ButtonGroup>
            <Button
              active={isSubRoute}
              aria-label="Side Nav"
              aria-pressed={isSubRoute}
              color="primary"
              onClick={this.handleToggleClick('subroutes')}
              size="sm"
            >
              Side Nav
            </Button>
            <Button
              active={!isSubRoute}
              aria-label="Full Width"
              aria-pressed={!isSubRoute}
              color="primary"
              size="sm"
              onClick={this.handleToggleClick('dashboard')}
            >
              Full Width
            </Button>
          </ButtonGroup>
        }
      >
        <Card>
          <CardHeader>{sampleHeaderContent}</CardHeader>
          <CardBody>NOT collapsible</CardBody>
        </Card>
        <CollapsibleCard>
          <CardHeader>{sampleHeaderContent}</CardHeader>
          <CardBody>I am collapsible</CardBody>
        </CollapsibleCard>
        <Card>
          <CardHeader>{sampleHeaderSnippet}</CardHeader>
          <CardBody>NOT collapsible</CardBody>
        </Card>
        <CollapsibleCard>
          <CardHeader>{sampleHeaderSnippet}</CardHeader>
          <CardBody>I am collapsible</CardBody>
        </CollapsibleCard>
      </Page>
    )
  }
}

export default Demo
