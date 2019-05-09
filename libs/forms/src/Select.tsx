import React, { FocusEventHandler } from 'react'
import ReactSelect from 'react-select'
import { Props as ReactSelectProps } from 'react-select/lib/Select'
import DS from '@cwds/core'
import { IFormControl, IOption, Omit, Optionalize } from './types'
import { ValueType } from 'react-select/lib/types'

type ISelectProps<T = string | string[]> = Omit<
  ReactSelectProps<IOption<T>>,
  'id' | 'value' | 'onChange' | 'onBlur'
> &
  IFormControl<T> & {
    formatValue: (value: IOption<T>, options: IOption<T>[]) => T
    mapValueToOptions: (value: T, options: IOption<T>[]) => IOption<T>[]
  }

class Select extends React.Component<ISelectProps> {
  static defaultProps: Partial<ISelectProps> = {
    isOptionDisabled: (option: { [K: string]: any }) => option.disabled,
    styles: {
      control: (base: any, { isDisabled, isFocused, theme }: any) => {
        return {
          ...base,
          borderColor: isDisabled
            ? theme.colors.neutral10
            : isFocused
            ? DS.themeColors.accent
            : theme.colors.neutral20,
          boxShadow: isFocused ? `0 0 0 .2rem rgba(96, 25, 116, 0.25)` : null,
          cursor: isDisabled ? 'default' : 'pointer',
          '&:hover': {
            borderColor: isFocused
              ? DS.themeColors.accent
              : theme.colors.neutral30,
          },
        }
      },
      option: (base: any, { isDisabled }: any) => ({
        ...base,
        cursor: isDisabled ? 'default' : 'pointer',
      }),
    },
    theme: (theme: any) => ({
      ...theme,
      borderRadius: '0.175rem',
      colors: {
        ...theme.colors,
        primary: DS.themeColors.primary,
        primary25: DS.themeColors.breath,
        primary50: '#ccf2fa',
      },
    }),
    onChange: () => {},
    formatValue: value => value,
    mapValueToOptions: (valueOrValues, options) => {
      return Array.isArray(valueOrValues)
        ? valueOrValues.map(value =>
            options.find(option => option.value === value)
          )
        : options.find(option => option.value === valueOrValues)
    },
  }

  handleChange: ReactSelectProps['onChange'] = (value, action) => {
    if (!this.props.onChange) return
    this.props.onChange(null, this.props.formatValue(value), value, action)
  }

  render() {
    return (
      <ReactSelect
        {...this.props}
        value={this.props.mapValueToOptions(
          this.props.value,
          this.props.options
        )}
        onChange={this.handleChange}
        inputId={this.props.id}
        id={`${this.props.id}-select`}
      />
    )
  }
}

export default Select

//
// Helpers
//

function mapValueToOptions(valueOrValues, options) {
  return Array.isArray(valueOrValues)
    ? valueOrValues.map(value => options.find(option => option.value === value))
    : options.find(option => option.value === valueOrValues)
}
