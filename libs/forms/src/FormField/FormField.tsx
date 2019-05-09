import React, { Component, ReactElement } from 'react'
import cn from 'classnames'
import {
  Label,
  FormGroup,
  Input,
  FormFeedback,
  FormText,
} from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'
import Styles from './FormField.module.scss'
import { IFormControl } from '../types'

export const RequiredIndicator = () => <span>&#42;</span>

export interface FormFieldProps<T = {}> extends IFormControl<T> {
  className: string
  tag: React.ComponentType
  label: React.ReactNode
  Component: React.ComponentType<{
    invalid?: boolean
    valid?: boolean
  }>
  required: boolean
  helpText: string
}

class NewFormField extends Component<FormFieldProps> {
  static defaultProps = {
    Component: Input,
    onChange: () => {},
    onBlur: () => {},
  }

  // get valid() {
  //   return !!this.props.error
  // }

  render() {
    const {
      className,
      label,
      Component: FormControl,
      touched,
      error,
      // success,
      helpText,
      ...props
    } = this.props
    return (
      <FormGroup className={cn(className)}>
        <Label htmlFor={props.id}>
          {label}
          {props.required && <RequiredIndicator />}
        </Label>
        <FormControl
          {...props}
          invalid={!!touched && !!error}
          // valid={!!touched && !error}
        />
        {touched && error && (
          <FormFeedback className={Styles.InvalidFeedback}>
            <Icon name="exclamation-triangle" className="mx-2" />
            {error}
          </FormFeedback>
        )}
        {/* {success && (
          <FormFeedback valid>
            <Icon name="check" className="mx-2" />
            {success}
          </FormFeedback>
        )} */}
        {helpText && <FormText>{helpText}</FormText>}
      </FormGroup>
    )
  }
}

export default NewFormField
