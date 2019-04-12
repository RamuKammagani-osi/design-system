import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  DataGrid,
  UncontrolledMenu as Menu,
  MenuItem,
} from '@cwds/components'
import { data, columns } from './mtcars.js'

const subset = data.slice(0, 3)
const subsetCol = columns.slice(0, 6)

const ellipsisMenu = {
  Header: '',
  accessor: 'progress',
  Cell: row => (
    <Menu className="text-right">
      <MenuItem>Alignment</MenuItem>
      <MenuItem disabled>Disabled Option</MenuItem>
      <MenuItem>Checkup</MenuItem>
      <MenuItem>Engine light</MenuItem>
      <MenuItem>Quote</MenuItem>
    </Menu>
  ),
}

const CarsDataGrid = () => (
  <Card>
    <CardHeader>
      <CardTitle>Cars</CardTitle>
    </CardHeader>
    <CardBody className="pt-0">
      <DataGrid data={subset} columns={[...subsetCol, ellipsisMenu]} />
    </CardBody>
  </Card>
)

export default CarsDataGrid
