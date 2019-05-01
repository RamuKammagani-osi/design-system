import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Page } from '@cwds/components'

import { data, columns } from './dummyData.js'
import SnapshotSearchCard from './SnapshotSearchCard'
import SnapshotSearch from './SnapshotSearch'

export default () => (
  <Page
    title="Snapshot"
    Breadcrumb={
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Dashboard</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/">Snapshot</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Search Results</BreadcrumbItem>
      </Breadcrumb>
    }
    main={() => (
      <div>
        <SnapshotSearchCard />
        <SnapshotSearch data={data} columns={columns} />
      </div>
    )}
  />
)
