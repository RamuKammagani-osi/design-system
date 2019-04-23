import React, { Component } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Icon,
  Row,
} from '@cwds/components'
import { FormField, Fieldset, Input, Select } from '@cwds/forms'
import uniqueId from 'lodash.uniqueid'
import Styles from './AddItemExample.module.scss'
import { toppings as TOPPINGS } from '../../Checkboxes/examples/toppings-data'

const sortId = (a, b) => {
  const idA = a.id.toUpperCase()
  const idB = b.id.toUpperCase()
  if (idA < idB) return -1
  if (idA > idB) return 1
  return 0
}
const AddItem = props => (
  <Fieldset className="mb-0">
    <Row className="d-flex align-items-end">
      <Col>
        <FormField
          label="Item"
          name="Item"
          aria-label="item"
          Component={Input}
          value={props.values.value}
          placeholder="Enter an item"
          onChange={props.handleChange(props)}
        />
      </Col>
      <Col>
        <FormField
          label="Qualifier"
          name="Qualifier"
          aria-label="qualifier"
          Component={Select}
          value={props.values.value}
          placeholder="Select a Qualifier Toppings"
          options={props.options}
          onChange={props.handleChangeSelect(props)}
        />
      </Col>
      <Col md={1}>
        {props.id !== '1' && (
          <Button
            className="border-0 my-3 700"
            aria-label="remove item"
            onClick={props.handleRemove(props)}
          >
            <Icon name="times-circle" className={Styles.IconButton} />
          </Button>
        )}
      </Col>
    </Row>
  </Fieldset>
)

export default class AddItemExample extends Component {
  state = { items: [{ id: uniqueId(), values: {}, options: TOPPINGS }] }
  handleChange = ({ id, values, ...props }) => ({ target }) => {
    const edit = {
      id,
      ...props,
      values: { ...values, [target.name]: target.value },
    }
    const items = [...this.state.items.filter(i => i.id !== id), edit].sort(
      sortId
    )
    this.setState({ items })
  }
  handleChangeSelect = ({ id, values, ...props }) => ({ label, value }) => {
    const edit = { id, ...props, values: { ...values, [label]: value } }
    this.setState({
      items: [...this.state.items.filter(item => item.id !== id), edit].sort(
        sortId
      ),
    })
  }
  handleAdd = e => {
    if (this.state.items.length > 9) return
    this.setState({
      items: [
        ...this.state.items,
        { id: uniqueId(), values: {}, options: TOPPINGS },
      ].sort(sortId),
    })
  }
  handleRemove = ({ id }) => e => {
    this.setState({
      items: [...this.state.items.filter(item => item.id !== id)].sort(sortId),
    })
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex-grow-1">Add Item</CardTitle>
        </CardHeader>
        <CardBody>
          {this.state.items.map((props, i) => (
            <AddItem
              key={props.id}
              index={i}
              handleChange={this.handleChange}
              handleChangeSelect={this.handleChangeSelect}
              handleRemove={this.handleRemove}
              {...props}
            />
          ))}
          <Row>
            <Col md={{ size: 1, offset: 10 }}>
              <Button
                className="border-0 float-right"
                aria-label="add item"
                onClick={this.handleAdd}
              >
                <Icon name="plus" className={Styles.IconButton} />
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
