import React, { Component, Fragment } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  PrimalButton as Button,
  DataGrid,
  Input,
  InputGroup,
  InputGroupAddon,
  Icon,
} from '@cwds/components'
import data from './people.json'

const toCapitalCase = str => str.charAt(0).toUpperCase() + str.slice(1)

const columns = [
  { Header: 'Last', accessor: 'name.last' },
  { Header: 'First', accessor: 'name.first' },
  {
    Header: 'Active',
    accessor: 'isActive',
    Cell: ({ value }) => (value ? 'Active' : 'Inactive'),
  },
  { Header: 'Age', accessor: 'age' },
  {
    Header: 'Eyes',
    accessor: 'eyeColor',
    Cell: ({ value }) => toCapitalCase(value),
  },
]

class SearchForm extends Component {
  render() {
    const { onChange, onSubmit, disabled, value } = this.props
    return (
      <div className="mb-3">
        <form
          onSubmit={e => {
            e.preventDefault()
            onSubmit()
          }}
        >
          <InputGroup>
            <Input
              type="search"
              value={value}
              placeholder="Ex; John Smith, Danny Eck, ..."
              onChange={e => {
                onChange(e.target.value)
              }}
            />
            <InputGroupAddon addonType="append">
              <Button
                color="info"
                type="submit"
                style={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  // TODO: better for box-shadow clipping fix?
                  position: 'relative',
                }}
                disabled={Boolean(value) && Boolean(disabled)}
              >
                <Icon icon="search" className="mr-2" /> Search
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </div>
    )
  }
}

class CarsDataGrid extends Component {
  state = {
    data,
    filteredData: null,
    filterValue: null,
    value: '',
  }
  handleChange = value => {
    this.setState({ value })
  }
  handleSubmit = e => {
    const { value } = this.state
    const re = new RegExp(value, 'i')
    const filteredData = this.state.data.filter(({ name }) =>
      re.test(`${name.first} ${name.last}`)
    )
    this.setState({ filteredData, filterValue: value })
    // console.log(this.datagrid);
  }
  render() {
    const { data, filteredData } = this.state
    return (
      <Card>
        <CardHeader>
          <CardTitle>People</CardTitle>
        </CardHeader>
        <CardBody>
          <DataGrid
            data={filteredData || data}
            columns={columns}
            defaultPageSize={10}
            filterable={false}
          >
            {(state, makeTable, instance) => {
              return (
                <Fragment>
                  <SearchForm
                    value={this.state.value}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    disabled={this.state.value === this.state.filterValue}
                  />
                  {makeTable()}
                </Fragment>
              )
            }}
          </DataGrid>
        </CardBody>
      </Card>
    )
  }
}

export default CarsDataGrid
