import React from 'react'
import { Input } from '@cwds/reactstrap'
import ReactTextMask, { MaskedInputProps } from 'react-text-mask'

const InputMask: React.FunctionComponent<MaskedInputProps> = props => {
  return <ReactTextMask {...props} />
}

InputMask.defaultProps = {
  render: (ref: any, props: any) => {
    console.warn(props)
    return <Input innerRef={ref} {...props} />
  },
}

export default InputMask
