import React, { Component } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  DataGrid,
} from '@cwds/components'
import PeopleService from './people-service'

const columnConfig = [
  {
    Header: 'Gender',
    accessor: 'gender',
  },
  {
    Header: 'Eye Color',
    accessor: 'eye_color',
  },
  {
    Header: 'Height',
    accessor: 'height',
  },
  {
    Header: 'Mass',
    accessor: 'mass',
  },
]

const columnSort = [
  {
    id: 'name',
    desc: true,
  },
]

export default class DataGridsExample extends Component {
  // Guard against promise resolution after unmount
  _mounted = false
  state = {
    data: undefined,
    status: 'idle',
    pages: -1,
    pageSize: undefined,
  }
  constructor(props) {
    super(props)
    this._service = PeopleService.create()
    this.fetchData = this.fetchData.bind(this)
  }
  componentDidMount() {
    this._mounted = true
  }
  componentWillUnmount() {
    this._mounted = false
  }
  fetchData(tableState) {
    this.setState({
      status: 'loading',
    })
    this._service
      .get('/people', {
        params: {
          page: 1 + tableState.page,
        },
      })
      .then(res => res.data)
      .then(({ results, ...meta }) => {
        this._mounted &&
          this.setState({
            data: results,
            status: 'idle',
            pageSize: tableState.pageSize,
            pages: Math.ceil(meta.count / tableState.pageSize),
          })
      })
      .catch(err => {
        if (err) {
          // Do nothing
        }
      })
  }
  render() {
    const { data } = this.state
    return (
      <Card>
        <CardHeader>
          <CardTitle>Some Data</CardTitle>
        </CardHeader>
        <CardBody className="pt-0">
          <DataGrid
            data={data}
            pages={this.state.pages}
            columns={columnConfig}
            onFetchData={this.fetchData}
            defaultSorted={columnSort}
            loading={this.state.status === 'loading'}
            manual
          />
        </CardBody>
      </Card>
    )
  }
}
