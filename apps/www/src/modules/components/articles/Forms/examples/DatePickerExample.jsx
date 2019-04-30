import React from 'react'
import '@cwds/core/scss/styles.scss'
import { DatePicker } from '@cwds/forms'

export class DatePickerExample extends React.Component {
  state = { startDate: null }
  handleChange = date => {
    this.setState({
      startDate: date,
    })
  }
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    )
  }
}

export default DatePickerExample
