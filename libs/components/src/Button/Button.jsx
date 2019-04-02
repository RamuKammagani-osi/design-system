import React from 'react'
import PropTypes from 'prop-types'
import { Button as PrimalButton } from '@cwds/reactstrap'

const propTypes = {
  ...PrimalButton.propTypes,
  primary: PropTypes.bool,
}

const defaultProps = {
  ...PrimalButton.defaultProps,
}

const Button = ({ primary, ...props }) => {
  if (props.color === 'primary') {
    // Backwards compat
    return <PrimalButton {...props} outline={false} color="primary" />
  }
  return <PrimalButton {...props} outline={!primary} color="primary" />
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
