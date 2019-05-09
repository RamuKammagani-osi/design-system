import React, { Component } from 'react'
import { Icon } from '@cwds/icons'
import { IconButton } from '@cwds/cares'
import InputMask from './InputMask'
import range from 'lodash.range'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { getYear, getMonth, parseISO } from 'date-fns'
import { DATE_MASK } from './Masks'
import './DatePicker.module.scss'
import { IFormControl, Omit } from './types'

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

const MyOtherCustomHeader: React.FC<CustomHeaderProps> = ({
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

interface IDatePickerProps
  extends Omit<ReactDatePickerProps, 'onChange' | 'onBlur' | 'id' | 'value'>,
    IFormControl<string> {}

class DatePicker extends Component<IDatePickerProps> {
  handleChange = (date: Date) => {
    this.props.onChange(null, date.toISOString())
  }

  // Note: a noop placeholder for callbacks that ReactDatePicker manages on `customInput`
  noop = () => {}

  // Note: dummy data b/c ReactDatePicker manages `customInput#value`
  dummy = ''

  render() {
    return (
      <ReactDatePicker
        placeholderText="mm/dd/yyyy"
        selected={this.props.value ? parseISO(this.props.value) : null}
        id={this.props.id}
        customInput={
          <InputMask
            id={this.dummy}
            value={this.dummy}
            mask={DATE_MASK}
            onChange={this.noop}
            onBlur={this.noop}
          />
        }
        renderCustomHeader={MyOtherCustomHeader}
        onChange={this.handleChange}
      />
    )
  }
}

export default DatePicker
