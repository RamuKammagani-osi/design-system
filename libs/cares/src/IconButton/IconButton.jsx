import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import pick from 'lodash.pick'
import { Button } from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'

const LIGHT_COLORS = {
  primary: true,
  secondary: false,
  accent: true,
  success: true,
  info: true,
  warning: true,
  danger: true,
  light: false,
  dark: true,
  link: true,
}

const getIconProps = ({ className, color, ...props }) =>
  pick(props, 'iconClassName', Object.keys(Icon.propTypes))

const getButtonProps = props => pick(props, Object.keys(Button.propTypes))

const isLightIcon = (color, light = 'text-light', dark = 'text-dark') =>
  LIGHT_COLORS[color] ? light : dark

const IconButton = ({ children, ...props }) => {
  const { iconClassName, ...iconProps } = getIconProps(props)
  return (
    <Button {...getButtonProps(props)}>
      <Icon
        className={cn('mr-2', iconClassName, isLightIcon(props.color))}
        {...iconProps}
      />
      {children}
    </Button>
  )
}

IconButton.propTypes = {
  ...Button.propTypes,
  ...Icon.propTypes,
  getIconProps: PropTypes.func,
  getButtonProps: PropTypes.func,
}
IconButton.defaultProps = {
  ...Button.defaultProps,
  ...Icon.defaultProps,
  getIconProps: getIconProps,
  getButtonProps: getButtonProps,
}

export default IconButton
