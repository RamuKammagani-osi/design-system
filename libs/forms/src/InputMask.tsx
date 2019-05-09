import React, { Component } from 'react'
import { Input } from '@cwds/reactstrap'
import ReactTextMask, { MaskedInputProps } from 'react-text-mask'
import { Omit, IFormControl } from './types'

interface IInputMaskProps
  extends Omit<MaskedInputProps, 'onChange' | 'onBlur' | 'id' | 'value'>,
    IFormControl<string> {
  unmask: (value: string) => string
}

class InputMask extends Component<IInputMaskProps> {
  static defaultProps = {
    unmask: (x: string | number) => x,
  }
  interceptOnChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const value = event.target.value
    this.props.onChange && this.props.onChange(event, this.props.unmask(value))
  }
  render() {
    const { unmask, ...props } = this.props
    return (
      <ReactTextMask
        {...props}
        onChange={this.interceptOnChange}
        render={(ref, innerProps) => <Input innerRef={ref} {...innerProps} />}
      />
    )
  }
}

export default InputMask
