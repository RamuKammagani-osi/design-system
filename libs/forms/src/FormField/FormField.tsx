import React from 'react'
import cn from 'classnames'
import {
  Label,
  FormGroup,
  Input,
  FormFeedback,
  FormText,
} from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'

const RequiredIndicator = () => <span>&#42;</span>

interface FormControllerState<T> {
  value: T | T[]
  touched: boolean
  error: string
  isValidating: boolean
  isSubmitting: boolean
}

interface FormFieldCallbacks<T> {
  onChange: (value: T | T[]) => void
  onBlur: () => void
}

export interface FormFieldProps<T>
  extends FormControllerState<T>,
    FormFieldCallbacks<T> {
  className: string
  tag: React.ComponentType<{ className: string }>
  label: React.ReactNode
  Component: React.ComponentType<{
    innerRef?: React.Ref<any>
    invalid?: boolean
  }>
  feedback: React.ReactNode
  Feedback: React.ComponentType
  required: boolean
  helpText: string
}

export const FormField: React.FunctionComponent<
  FormFieldProps<{}>
> = React.forwardRef(
  (
    {
      className,
      label,
      Component: Control,
      feedback,
      touched,
      error,
      helpText,
      ...props
    },
    ref
  ) => {
    return (
      <FormGroup className={cn(className)}>
        <Label>{label}</Label>
        {props.required && <RequiredIndicator />}
        <Control {...props} innerRef={ref} invalid={!!touched && !!error} />
        <FormFeedback>
          <Icon name="exclamation-triangle" className="mx-2" />
          {error}
        </FormFeedback>
        {helpText && <FormText>{helpText}</FormText>}
      </FormGroup>
    )
  }
)

FormField.propTypes = {}

FormField.defaultProps = {
  Component: Input,
  onChange: () => {},
  onBlur: () => {},
}

export default FormField
