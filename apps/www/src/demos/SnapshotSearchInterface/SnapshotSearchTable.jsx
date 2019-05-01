import React from 'react'
import { DataGrid } from '@cwds/components'

const SnapshotSearchTable = ({ data, columns }) => (
  <div>
    <div className="mt-3">
      <DataGrid data={data} columns={columns} />
    </div>
  </div>
)

export default SnapshotSearchTable
