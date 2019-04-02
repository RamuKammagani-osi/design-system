import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import { Button as PrimalButton } from '@cwds/reactstrap'
import Styles from './Button.module.scss'

const propTypes = {
  ...PrimalButton.propTypes,
  primary: PropTypes.bool,
}

const defaultProps = {
  ...PrimalButton.defaultProps,
  color: undefined,
  outline: undefined,
}

const Button = props => <PrimalButton {...transformProps(props)} />

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
      'Do not pass `color` or `outline` to `Button`! Use the boolean prop `primary` or use a `PrimalButton` instead!'
    )
  return {
    ...props,
    color: 'primary',
    className:
      primary || color === 'primary'
        ? className
        : cn(className, Styles.Secondary),
  }
}

function warn(msg) {
  if (typeof console !== 'undefined') console.warn(msg)
}
