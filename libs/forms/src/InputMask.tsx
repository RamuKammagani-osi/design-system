import React from 'react'
import { Input } from '@cwds/reactstrap'
import ReactTextMask, { MaskedInputProps } from 'react-text-mask'

const InputMask = (props: MaskedInputProps) => <ReactTextMask {...props} />

InputMask.defaultProps = {
  render: (ref: any, inputProps: any) => (
    <Input innerRef={ref} {...inputProps} />
  ),
}

export default InputMask
