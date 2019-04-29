import React from 'react'
import ReactSelect from 'react-select'
import { isMobile } from 'react-device-detect'

import DS from '@cwds/core'

const Select: React.FunctionComponent<{}> = props => {
  return (
    <div>
      {isMobile ? (
        <select id="my-select" name="my-select">
          <option value="" disabled>
            Select...
          </option>
        </select>
      ) : (
        <ReactSelect {...props} />
      )}
    </div>
  )
}
console.log(DS)

Select.defaultProps = {
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

export default Select
