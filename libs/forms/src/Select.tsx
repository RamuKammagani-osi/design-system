import React from 'react'
import ReactSelect from 'react-select'
import { Props as ReactSelectProps } from 'react-select/lib/Select'
import DS from '@cwds/core'
import { IFormControl, IOption, Omit, ICollectionType } from './types'
import { ValueType } from 'react-select/lib/types'

interface ISelectProps<T = string>
  extends Omit<
      ReactSelectProps<IOption<T>>,
      'id' | 'value' | 'onChange' | 'onBlur' | 'options'
    >,
    IFormControl<T | T[]>,
    ICollectionType<T> {
  /**
   * Transform ReactSelect value(s). Used in `onChange`
   */
  parseValue: (value: ValueType<IOption<T>>) => T[] | T
  /**
   * Transform CWDS FormControl serialized simple values to ReactSelect selected option value(s)
   */
  mapValue: (
    value: T | T[],
    options: IOption<T>[]
  ) => ReactSelectProps<IOption<T>>['value']
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
    parseValue: reactSelectValue => {
      if (!reactSelectValue) return ''
      return Array.isArray(reactSelectValue)
        ? reactSelectValue.map(({ value }) => value)
        : reactSelectValue.value
    },
    mapValue: (valueOrValues, options) => {
      return Array.isArray(valueOrValues)
        ? (valueOrValues
            .map(value => options.find(option => option.value === value))
            .filter(Boolean) as IOption<string>[])
        : options.find(option => option.value === valueOrValues)
    },
  }

  handleChange: ReactSelectProps<IOption>['onChange'] = (value, action) => {
    if (!this.props.onChange) return
    this.props.onChange(null, this.props.parseValue(value), value, action)
  }

  render() {
    return (
      <ReactSelect
        {...this.props}
        value={this.props.mapValue(this.props.value, this.props.options)}
        onChange={this.handleChange}
        inputId={this.props.id}
        id={`${this.props.id}-select`}
      />
    )
  }
}

export default Select
