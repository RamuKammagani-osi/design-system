import React, { Component } from 'react'
import { Input } from '@cwds/reactstrap'
import ReactTextMask, { MaskedInputProps } from 'react-text-mask'
import { IFormControlEventHandlers } from './types'

// const InputMask: React.FunctionComponent<MaskedInputProps> = props => {
//   return <ReactTextMask {...props} />
// }

// InputMask.defaultProps = {
//   render: (ref: any, props: any) => {
//     console.warn(props)
//     return <Input innerRef={ref} {...props} />
//   },
// }

// interface IInputMaskProps extends MaskedInputProps {
interface IInputMaskProps
  extends Pick<MaskedInputProps, Exclude<keyof MaskedInputProps, 'onChange'>> {
  unmask: (value: string) => string
  onChange: IFormControlEventHandlers['onChange']
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

// class InputMask extends Component<MaskedInputProps> {
//   render() {
//     console.log('hi')
//     return (
//       <ReactTextMask
//         {...this.props}
//         render={(ref: any, props: any) => {
//           return <Input innerRef={ref} {...props} />
//         }}
//       />
//     )
//   }
// }

export default InputMask
