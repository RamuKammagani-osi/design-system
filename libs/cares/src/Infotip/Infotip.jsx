import React from 'react'
import PropTypes from 'prop-types'
import pick from 'lodash.pick'
import cn from 'classnames'
import { Button, Popover, PopoverBody } from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'
import Styles from './Infotip.module.scss'

// https://www.w3.org/TR/wai-aria-practices-1.1/#tooltip

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  placement: Popover.propTypes.placement,
}

const defaultProps = {
  isOpen: false,
  placement: 'top',
}

const Infotip = ({ children, id, isOpen, placement, ...props }) => {
  const eventHandlers = pick(props, [
    'onMouseEnter',
    'onMouseLeave',
    'onFocus',
    'onBlur',
  ])
  const containerId = `${id}--info`
  return (
    <div className={cn(Styles.InfotipContainer, 'ml-1')}>
      <Button
        id={id}
        aria-describedby={containerId}
        {...eventHandlers}
        className="bg-transparent border-0 p-0 px-1" // shadow-none
      >
        <Icon icon="info-circle" />
      </Button>
      {children && (
        <Popover
          role="tooltip"
          placement={placement}
          isOpen={isOpen}
          target={id}
        >
          <PopoverBody>{children}</PopoverBody>
        </Popover>
      )}
    </div>
  )
}

Infotip.propTypes = propTypes
Infotip.defaultProps = defaultProps

export default Infotip
