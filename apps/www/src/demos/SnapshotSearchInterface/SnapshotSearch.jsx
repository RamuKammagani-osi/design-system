import React from 'react'
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from '@cwds/components'

import SnapshotSearchTable from './SnapshotSearchTable'

const Message =
  'Over 250 records have been found, if posssible please refine your search by adding additional search criteria, then click the "Search" button again'

const SnapshotSearch = ({ data, columns }) => (
  <div className="pt-3">
    <Card>
      <CardHeader>
        <CardTitle>Search Results (250+ Records Found)</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md={{ offset: 1, size: 10 }}>
            <Alert color="warning">{Message}</Alert>
          </Col>
        </Row>
        <SnapshotSearchTable data={data} columns={columns} />
      </CardBody>
    </Card>
  </div>
)

export default SnapshotSearch
