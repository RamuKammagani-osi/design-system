import React, { Fragment } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  DataGrid,
  UncontrolledMenu as Menu,
  MenuItem,
  UncontrolledInfotip,
} from '@cwds/components'
import { data, columns } from './mtcars.js'

const subset = data.slice(0, 3)
const subsetCol = columns.slice(0, 4)

const ellipsisMenu = {
  Header: '',
  accessor: 'progress',
  Cell: row => (
    <Menu className="float-right" right>
      <MenuItem>Alignment</MenuItem>
      <MenuItem disabled>Disabled Option</MenuItem>
      <MenuItem>Checkup</MenuItem>
      <MenuItem>Engine light</MenuItem>
      <MenuItem>Quote</MenuItem>
    </Menu>
  ),
}

const gearInfo = {
  Header: () => (
    <Fragment>
      Gear
      <UncontrolledInfotip id="my-uncontrolled-infotip" placement="top">
        <p className="mb-0">
          Number of gears the car have. Gears are used for transmitting power
          from one part of a machine to another
        </p>
      </UncontrolledInfotip>
    </Fragment>
  ),
  accessor: 'gear',
}

const CarsDataGrid = () => (
  <Card>
    <CardHeader>
      <CardTitle>Cars</CardTitle>
    </CardHeader>
    <CardBody className="pt-0">
      <DataGrid
        data={subset}
        columns={[...subsetCol, gearInfo, ellipsisMenu]}
      />
    </CardBody>
  </Card>
)

export default CarsDataGrid
