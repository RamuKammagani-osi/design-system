import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IListType, IFormControl } from './types'
import CheckboxControl from './CheckboxControl'
import Fieldset from './Fieldset'

type StringOrNumber = string | number

export interface CheckboxBankProps
  extends IListType,
    IFormControl<StringOrNumber[], HTMLInputElement> {
  inline: boolean
  onBlur: React.FocusEventHandler & (() => void)
}

class CheckboxBank extends Component<CheckboxBankProps> {
  static propTypes = {
    value: PropTypes.array.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
        disabled: PropTypes.bool,
      })
    ).isRequired,
  }

  static defaultProps = {
    value: [],
    options: [],
    onChange: () => {},
    onBlur: () => {},
  }

  handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const { value, checked } = event.target
    const newValue = checked
      ? this.props.value.concat(value)
      : this.props.value.filter(val => val !== value)
    this.props.onChange(event, newValue)
  }

  handleBlur = () => {
    this.props.onBlur()
  }

  render() {
    const { options } = this.props
    if (!options.length)
      console.error(
        'Warning: You should not provide zero-length options to `CheckboxBank`'
      )
    return (
      <Fieldset>
        {options.map(opt => {
          return (
            <CheckboxControl
              key={opt.value}
              value={opt.value}
              disabled={opt.disabled}
              checked={this.props.value.includes(opt.value)}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              label={opt.label}
              inline={this.props.inline}
            />
          )
        })}
      </Fieldset>
    )
  }
}

export default CheckboxBank
