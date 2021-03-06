import React, { Component } from 'react'
import { Icon } from '@cwds/icons'
import { IconButton } from '@cwds/cares'
import InputMask from './InputMask'
import range from 'lodash.range'
import ReactDatePicker from 'react-datepicker'
import getYear from 'date-fns/getYear'
import getMonth from 'date-fns/getMonth'
import { DATE as DATE_MASK } from './Masks'
import './DatePicker.module.scss'

interface DatePickerProps {
  /** PlaceholderText for the field.  */
  placeholderText: string
  date: string
}

const years = range(1990, getYear(new Date()) + 1, 1)
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

interface CustomHeaderProps {
  date: Date
  changeYear: Function
  changeMonth: Function
  decreaseMonth: any
  increaseMonth: any
  prevMonthButtonDisabled: boolean
  nextMonthButtonDisabled: boolean
}

const MyOtherCustomHeader: React.SFC<CustomHeaderProps> = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => (
  <div className="d-flex justify-content-between align-items-center px-2">
    <IconButton
      aria-hidden="true"
      disabled={prevMonthButtonDisabled}
      onClick={decreaseMonth}
      icon={<Icon icon="angle-left" />}
    />

    <div>
      {months[getMonth(date)]} {getYear(date)}
    </div>

    <IconButton
      aria-hidden="true"
      onClick={increaseMonth}
      disabled={nextMonthButtonDisabled}
      icon={<Icon icon="angle-right" />}
    />
  </div>
)

class DatePicker extends Component<DatePickerProps> {
  state = {
    startDate: null,
  }

  handleChange = (date: Date) => {
    this.setState({
      startDate: date,
    })
  }

  render() {
    return (
      <ReactDatePicker
        placeholderText="mm/dd/yyyy"
        selected={this.state.startDate}
        customInput={<InputMask mask={DATE_MASK} />}
        renderCustomHeader={MyOtherCustomHeader}
        onChange={this.handleChange}
      />
    )
  }
}

export default DatePicker
