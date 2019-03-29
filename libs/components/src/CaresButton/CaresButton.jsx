import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@cwds/reactstrap'

const propTypes = {
  ...Button.propTypes,
  solid: PropTypes.bool,
}

const defaultProps = {
  ...Button.defaultProps,
}

const CaresButton = ({ solid, ...props }) => (
  <Button {...props} outline={!solid} color="primary" />
)

CaresButton.propTypes = propTypes
CaresButton.defaultProps = defaultProps

export default CaresButton
