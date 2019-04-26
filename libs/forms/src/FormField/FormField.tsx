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
    valid?: boolean
  }>
  required: boolean
  helpText: string
  // success: string
  mapInnerRefName: string
}

export const FormField: React.FunctionComponent<
  FormFieldProps<{}>
> = React.forwardRef(
  (
    {
      className,
      label,
      Component: FormControl,
      touched,
      error,
      // success,
      helpText,
      mapInnerRefName,
      ...props
    },
    ref
  ) => {
    const innerRefMapping = { [mapInnerRefName]: ref }
    return (
      <FormGroup className={cn(className)}>
        <Label>
          {label}
          {props.required && <RequiredIndicator />}
        </Label>
        <FormControl
          {...props}
          {...innerRefMapping}
          invalid={!!touched && !!error}
          // valid={!!touched && !error}
        />
        {touched && error && (
          <FormFeedback className="d-block" style={{ display: 'block' }}>
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
)

FormField.propTypes = {}

FormField.defaultProps = {
  Component: Input,
  mapInnerRefName: 'innerRef',
  onChange: () => {},
  onBlur: () => {},
}

export default FormField
