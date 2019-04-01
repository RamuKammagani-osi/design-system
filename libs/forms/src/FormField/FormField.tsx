import React from 'react'
import cn from 'classnames'
import {
  Label,
  // FormFeedback,
  // FormText,
  FormGroup,
  Input,
} from '@cwds/reactstrap'
import { FormFeedback, FormText } from 'reactstrap' // TODO: Why TypeErrors thrown when importing from @cwds/reactstrap?

const RequiredIndicator = () => <span>&#42;</span>

interface FormControllerState {
  // values: Values;
  // error?: any;
  // errors: FormikErrors<Values>;
  // touched: FormikTouched<Values>;
  value: any
  touched: boolean
  error?: any
  isValidating: boolean
  isSubmitting: boolean
}

interface FormFieldCallbacks {
  onChange: React.ChangeEventHandler | ((e: Event) => void)
  onBlur: React.FormEvent | (() => void)
}

export interface FormFieldProps
  extends FormControllerState,
    FormFieldCallbacks {
  className: string
  tag: React.ComponentType<{ className: string }>
  label: React.ReactNode
  Label: React.ComponentType
  Component: React.ComponentType<{
    innerRef?: React.Ref<any>
    invalid?: boolean
  }>
  fieldControl: React.ReactNode
  feedback: React.ReactNode
  Feedback: React.ComponentType
  required: boolean
  helpText: string
}

export const FormField: React.SFC<FormFieldProps> = React.forwardRef(
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
        <FormFeedback>{error}</FormFeedback>
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
