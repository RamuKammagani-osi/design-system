import React from 'react'
import slugify from 'slugify'
import { Link } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  PrimitiveButton as Button,
  Page,
  JumpNav,
} from '@cwds/components'
import slackLogo from './Slack_Mark_White_Web.png'
import githubLogo from './GitHub-Mark-Light-64px.png'
import Style from './StatusButton.module.css'
import getRepoStatus from '../../macros/repo-status.macro'
const status = getRepoStatus()

const toSlug = str =>
  slugify(str, {
    replacement: '-',
    lower: true,
  })

const routes = ['Report an Issue', 'Build Info', 'Packages'].map(title => ({
  title,
  path: `#${toSlug(title)}`,
}))

export default () => (
  <Page
    title="Status"
    layout="jumpnav"
    sidenav={() => {
      return <JumpNav tag={Link} routes={routes} />
    }}
    Breadcrumb={() => (
      <Breadcrumb>
        {[
          { title: 'Home', path: '/' },
          { title: 'Status', path: '/status' },
        ].map(d => (
          <BreadcrumbItem key={d.path}>
            <Link to={d.path}>{d.title}</Link>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    )}
    main={() => (
      <Row>
        <Col>
          <h2 id="report-an-issue">
            <a href="#report-an-issue">Report an Issue</a>
          </h2>
          <Card>
            <CardBody>
              <Button
                color="primary"
                href="slack://channel?team=T0FSW5RLH&id=C34SC4BMF"
                className={Style.StatusButton}
              >
                <img
                  src={slackLogo}
                  className={Style.BlockLogo}
                  alt="slack logo"
                />
                #design-ops
              </Button>{' '}
              <Button
                color="primary"
                href={status.main.bugs.url}
                className={Style.StatusButton}
                target="_blank"
              >
                <img
                  src={githubLogo}
                  className={Style.BlockLogo}
                  alt="github logo"
                />
                Issues
              </Button>
            </CardBody>
          </Card>

          <h2 id="build-info">
            <a href="#build-info">Build Info</a>
          </h2>
          <Card>
            <CardBody>
              <table
                style={{ width: '100%', overflowX: 'scroll', display: 'block' }}
              >
                <tbody>
                  <tr>
                    <td>Build Date</td>
                    <td>
                      <tt>{status.buildDate}</tt>
                    </td>
                  </tr>
                  <tr>
                    <td>Branch</td>
                    <td>
                      <tt>{status.git}</tt>
                    </td>
                  </tr>
                  <tr>
                    <td>Info</td>
                    <td>
                      <pre>
                        <code>{JSON.stringify(status.build, null, 2)}</code>
                      </pre>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardBody>
          </Card>
          <h2 id="packages">
            <a href="#packages">Packages</a>
          </h2>
          {status.packages.map(pkg => {
            return (
              <Card key={pkg.name}>
                <CardHeader>
                  <h3
                    className="m-0"
                    style={{
                      fontFamily:
                        'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                      fontSize: '85%',
                    }}
                  >
                    {pkg.name}
                  </h3>
                </CardHeader>
                <CardBody>
                  <h4>Dependencies</h4>
                  <pre className="mb-0">
                    <code>
                      {JSON.stringify(pkg.pkgJson.dependencies, null, 2)}
                    </code>
                  </pre>
                </CardBody>
              </Card>
            )
          })}
        </Col>
      </Row>
    )}
  />
)
