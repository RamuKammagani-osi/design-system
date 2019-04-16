import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Fade, Util } from '@cwds/reactstrap'
import { Icon, getIconFromContext } from '@cwds/icons'
import core from '@cwds/core'
import Styles from './Alert.module.scss'

const mapToCssModules = Util.mapToCssModules

const COLORS = Object.keys(core.themeColors).filter(d =>
  ['success', 'info', 'warning', 'danger'].includes(d)
)

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.oneOf(COLORS),
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transition: PropTypes.shape(Fade.propTypes),
}

const defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  transition: {
    ...Fade.defaultProps,
    unmountOnExit: true,
    appear: false,
    enter: false,
  },
}

function Alert(props) {
  const {
    className,
    closeClassName,
    closeAriaLabel,
    cssModule = Styles,
    tag: Tag,
    color: requestedColor,
    isOpen,
    toggle,
    children,
    transition,
    ...attributes
  } = props

  const color = COLORS.includes(requestedColor)
    ? requestedColor
    : defaultProps.color

  const classes = mapToCssModules(
    cn(className, 'alert', {
      'alert-dismissible': toggle,
    }),
    cssModule
  )

  const closeClasses = mapToCssModules(cn('close', closeClassName), Styles)

  return (
    <Fade
      {...attributes}
      {...transition}
      tag={Tag}
      className={classes}
      in={isOpen}
      role="alert"
    >
      <div
        className={mapToCssModules(
          cn(
            'alert-icon-container',
            'text-white',
            `bg-${color}`,
            `border-${color}`,
            {
              'alert-dismissible': !!toggle,
            }
          ),
          Styles
        )}
      >
        <Icon icon={getIconFromContext(color) || 'info-circle'} />
      </div>
      <div className={mapToCssModules(cn('alert-body'), Styles)}>
        {toggle ? (
          <button
            type="button"
            className={closeClasses}
            aria-label={closeAriaLabel}
            onClick={toggle}
            style={{ fontSize: '15px', padding: '12px' }}
          >
            <Icon icon="times" />
          </button>
        ) : null}
        {children}
      </div>
    </Fade>
  )
}

Alert.propTypes = propTypes
Alert.defaultProps = defaultProps

Object.defineProperty(Alert, 'COLORS', {
  value: COLORS,
  writable: false,
})

export default Alert
