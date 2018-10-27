import React from 'react'
import { Link } from 'react-router-dom'
// import metaInfo from '../../macros/meta-info.macro'
import {
  Page,
  Button,
  Badge,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Row,
  Col,
} from '@cwds/components'
import { importMDX } from 'mdx.macro'
const SomeMdx = importMDX.sync('./some.mdx')

// const info = metaInfo('../components/index.js')
// console.log(info)

export default () => (
  <Page
    layout="dashboard"
    title="Design System"
    breadcrumb={props => <em>Welcome to your dashboard!</em>}
    main={props => (
      <Row>
        <Col xs={{ order: 2 }} lg={{ size: 9, order: 1 }}>
          <SomeMdx />
          <Row>
            <Col sm={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Component Library</CardTitle>
                </CardHeader>
                <CardBody>
                  Component documentation and visual showcase for developers and
                  designers with usage guidelines and reference implementation
                  examples
                </CardBody>
                <CardFooter>
                  <Button color="primary" tag={Link} to="/components">
                    Go!
                  </Button>
                </CardFooter>
              </Card>
            </Col>

            <Col sm={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Core Style</CardTitle>
                </CardHeader>
                <CardBody>
                  Foundational UX principles and overarching design decisions
                  including color system, typography, grid system, tone,
                  iconography, and accessibility
                </CardBody>
                <CardFooter>
                  <Button color="primary" tag={Link} to="/core-style">
                    Go!
                  </Button>
                </CardFooter>
              </Card>
            </Col>

            <Col sm={6}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    UX Guidelines / Patterns
                    <small>
                      <Badge color="warning" className="ml-1">
                        TODO
                      </Badge>
                    </small>
                  </CardTitle>
                </CardHeader>
                <CardBody>@TODO</CardBody>
                <CardFooter>
                  <Button color="primary" tag={Link} to="/">
                    Go!
                  </Button>
                </CardFooter>
              </Card>
            </Col>

            <Col sm={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Labs</CardTitle>
                </CardHeader>
                <CardBody>
                  Not everything in here is ready for general use, but it should
                  be showcased for the purpose of design critique and
                  solicitation of general feedback
                </CardBody>
                <CardFooter>
                  <Button color="primary" tag={Link} to="/labs">
                    Go!
                  </Button>
                </CardFooter>
              </Card>
            </Col>

            <Col sm={6}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    About
                    <small>
                      <Badge color="warning" className="ml-1">
                        TODO
                      </Badge>
                    </small>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  Defines key terms and identifies the business value of the
                  Design System, a manual for designers, developers, and
                  stakeholders to get the most out of this site
                </CardBody>
                <CardFooter>
                  <Button color="primary" tag={Link} to="/">
                    Go!
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col
          xs={{ order: 1 }}
          lg={{ size: 3, order: 1 }}
          className="d-none d-sm-block"
        >
          <Row>
            <Col sm={6} md={4} lg={12}>
              <Card>
                <CardBody>Placeholder Widget</CardBody>
              </Card>
            </Col>
            <Col sm={6} md={4} lg={12}>
              <Card>
                <CardBody>Placeholder Widget</CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    )}
  />
)
