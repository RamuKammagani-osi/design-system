import { IOption, IListType } from './types'
import * as React from 'react'
import PropTypes from 'prop-types'
import CheckboxControl from './CheckboxControl'
import Fieldset from './Fieldset'
const uniqueId = require('lodash.uniqueid')

export interface CheckboxBankProps<T = string> extends IListType<T> {
  /** The currently selected choice(s) */
  value: T[]
  /** alksdfj */
  options: IOption<T>[]
  /** Name for the field. Used to generate unique id */
  name: string
  /** Whether or not to enable the _entire_ field */
  disabled: boolean
  /** Use alternate layout */
  inline: boolean
  /** Change handler (traditional callback) */
  onChange: (x: string[]) => void | React.ChangeEventHandler
  /** Blur handler (traditional callback) */
  onBlur: React.EventHandler<any>
}

class CheckboxBank extends React.Component<CheckboxBankProps> {
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
  }

  handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { value, checked } = e.target
    if (checked) {
      this.props.onChange([...this.props.value, value])
    } else {
      this.props.onChange(this.props.value.filter(val => val !== value))
    }
  }

  handleBlur = () => {
    this.props.onBlur(true)
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
