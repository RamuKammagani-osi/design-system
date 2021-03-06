import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import { Button as PrimitiveButton } from '@cwds/reactstrap'
import Styles from '@cwds/core/scss/bootstrap-cares.module.scss'

const propTypes = {
  ...PrimitiveButton.propTypes,
  primary: PropTypes.bool,
}

const defaultProps = {
  ...PrimitiveButton.defaultProps,
  color: undefined,
  outline: undefined,
}

const Button = props => <PrimitiveButton {...transformProps(props)} />

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button

//
// Helpers
//

/**
 * Maintain backwards compat with the legacy reactstrap button API
 * @deprecated since 1.2
 * @param {Object} props
 * @param {boolean} props.primary
 * @param {string} props.color
 * @param {boolean} props.outline
 * @param {string} props.className
 * @param {...Object}
 * @returns {Object}
 */
function transformProps({ primary, color, outline, className, ...props }) {
  if (color || outline)
    warn(
      'Do not pass `color` or `outline` to `Button`! Use the boolean prop `primary` or use a `PrimitiveButton` instead!'
    )
  return {
    ...props,
    color: 'primary',
    className:
      primary || color === 'primary'
        ? className
        : cn(className, Styles.ButtonCustomSecondary),
  }
}

function warn(msg) {
  // eslint-disable-next-line no-console
  if (typeof console !== 'undefined') console.warn(msg)
}
