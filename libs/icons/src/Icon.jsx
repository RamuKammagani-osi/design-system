import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = props => {
  const { name, icon, set, color, className, ...restProps } = props
  return (
    <FontAwesomeIcon
      focusable="false"
      icon={normalizeIconDef({ name, icon, set })}
      {...extractColor({ className, color })}
      {...restProps}
    />
  )
}

Icon.propTypes = {
  ...FontAwesomeIcon.propTypes,
  /** Alias for `icon` */
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  /** The Fontawesome subset (e.g.; `fas`, `far`) */
  set: PropTypes.string,
}

Icon.defaultProps = { ...FontAwesomeIcon.defaultProps }

export default Icon

//
// Helper functions
//

const themeColors = [
  'primary',
  'secondary',
  'accent',
  'breath',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'dark',
]

function normalizeIconDef({ icon, name, set }) {
  const iconArg = icon || name
  if (typeof set === 'string' && set.length) {
    if (Array.isArray(iconArg))
      throw Error(
        'the `set` prop may only be used with string `icon` | `name` values'
      )
    if (typeof iconArg === 'string') return [set, iconArg]
  }
  return iconArg
}

function colorToClassName(color) {
  return `text-${color}`
}

function extractColor({ color, className }) {
  if (!color) return { className }
  if (themeColors.includes(color)) {
    warn(
      'Do not pass `color=<themeColorName>` to `Icon`! Use the global functional CSS class `text-<themeColorName>` instead!'
    )
    const colorClass = colorToClassName(color)
    return { className: cn(className, colorClass) }
  }
  return { color, className }
}

function warn(msg) {
  // eslint-disable-next-line no-console
  if (typeof console !== 'undefined') console.warn(msg)
}
