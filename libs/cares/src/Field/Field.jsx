import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, FormFeedback, Input } from '@cwds/reactstrap'

const noop = () => {}

const propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onChange: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  value: PropTypes.any,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}

const defaultProps = {
  onChange: noop,
}

export const Field = ({
  component: Component = Input,
  value,
  label,
  onChange,
  onBlur,
  onFocus,
}) => {
  return (
    <FormGroup>
      {label && <Label>{label}</Label>}
      {Component && <Component onChange={onChange} value={value} />}
      <FormFeedback>You will not be able to see this</FormFeedback>
    </FormGroup>
  )
}

Field.propTypes = propTypes
Field.defaultProps = defaultProps

export default Field
