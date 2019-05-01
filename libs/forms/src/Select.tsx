import React from 'react'
import ReactSelect from 'react-select'
import { Props as ReactSelectProps } from 'react-select/lib/Select'
import DS from '@cwds/core'
import { IFormControl } from './types'

interface IOverloads<T = {}, U = Element> {
  onChange: (
    event: React.ChangeEvent<U> | null,
    newValue: T,
    ...rest: any
  ) => void
}

class MySelect extends React.Component<ReactSelectProps & IOverloads> {
  static defaultProps = {
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
  }

  handleChange = (newValues: any, change: any) => {
    this.props.onChange && this.props.onChange(null, newValues, change)
  }

  render() {
    return <ReactSelect {...this.props} onChange={this.handleChange} />
  }
}

export default MySelect

// const Select: React.FunctionComponent<{}> = props => <ReactSelect {...props} />

// Select.defaultProps = {
//   isOptionDisabled: (option: { [K: string]: any }) => option.disabled,
//   styles: {
//     control: (base: any, { isDisabled, isFocused, theme }: any) => {
//       return {
//         ...base,
//         borderColor: isDisabled
//           ? theme.colors.neutral10
//           : isFocused
//           ? DS.themeColors.accent
//           : theme.colors.neutral20,
//         boxShadow: isFocused ? `0 0 0 .2rem rgba(96, 25, 116, 0.25)` : null,
//         cursor: isDisabled ? 'default' : 'pointer',
//         '&:hover': {
//           borderColor: isFocused
//             ? DS.themeColors.accent
//             : theme.colors.neutral30,
//         },
//       }
//     },
//     option: (base: any, { isDisabled }: any) => ({
//       ...base,
//       cursor: isDisabled ? 'default' : 'pointer',
//     }),
//   },
//   theme: (theme: any) => ({
//     ...theme,
//     borderRadius: '0.175rem',
//     colors: {
//       ...theme.colors,
//       primary: DS.themeColors.primary,
//       primary25: DS.themeColors.breath,
//       primary50: '#ccf2fa',
//     },
//   }),
// }

// export default Select
