import React, { Component } from 'react'
import { Input, InputProps } from 'reactstrap'
import uniqueId from 'lodash.uniqueid'
import cn from 'classnames'
import { IFormControl } from './types'
import Styles from './TextArea.module.scss'

type TextAreaCounterProps = IFormControl &
  InputProps & {
    remainderText: string
  }

const TextArea: React.FC<IFormControl & InputProps> = props => (
  <Input {...props} type="textarea" />
)

export class TextAreaCounter extends Component<TextAreaCounterProps> {
  static defaultProps = {
    remainderText: 'Remaining Characters',
  }
  textAreaId = uniqueId()
  render() {
    const { remainderText, ...props } = this.props
    const value = (props.value as string) || ''
    const remaining = props.maxLength && props.maxLength - value.length
    return (
      <div>
        <TextArea
          {...props}
          aria-describedby={`${this.textAreaId}__chars-remaining`}
        />
        {props.maxLength && (
          <div
            id={`${this.textAreaId}__chars-remaining`}
            className={cn(Styles.CounterContainer)}
            aria-live="polite"
            aria-atomic="true"
          >
            <span className={cn(Styles.RemainderText)}>{remainderText}</span>
            <span className={cn(Styles.RemainingValue)}>{remaining}</span>
          </div>
        )}
      </div>
    )
  }
}

export default TextArea
