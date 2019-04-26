import React, { Component } from 'react'
import { Icon } from '@cwds/icons'
import { Input, Button } from '@cwds/reactstrap'
import range from 'lodash.range'
import ReactDatePicker from 'react-datepicker'
import getYear from 'date-fns/getYear'
import getMonth from 'date-fns/getMonth'
import './DatePicker.module.scss'

// TODO's
// [ ] fix Reactstrap::Input.innerRef <==> DatePicker.customInputRef thing
// [x] Get CWDS style on the Input
// [x] Style stuff
// [ ] Use InputMask
// [x] fix breaks on year change

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

// const DATE_MASK = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]

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
    <Button
      aria-hidden="true"
      className="bg-transparent border-0"
      disabled={prevMonthButtonDisabled}
      onClick={decreaseMonth}
    >
      <Icon icon="angle-left" className="text-secondary" />
    </Button>

    <div>
      {months[getMonth(date)]} {getYear(date)}
    </div>

    <Button
      aria-hidden="true"
      className="bg-transparent border-0 "
      onClick={increaseMonth}
      disabled={nextMonthButtonDisabled}
    >
      <Icon icon="angle-right" className="text-secondary" />
    </Button>
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
        customInput={<Input />}
        renderCustomHeader={MyOtherCustomHeader}
        onChange={this.handleChange}
      />
    )
  }
}

export default DatePicker
