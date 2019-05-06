import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Arrow } from 'react-popper'
import { Icon } from '@cwds/icons'
import { Dropdown, DropdownMenu, DropdownToggle } from '@cwds/reactstrap'
import Button, { IconButton } from '../Button'
import pick from 'lodash.pick'
import Styles from '@cwds/core/scss/bootstrap-cares.module.scss'

// TODO: disambiguate caret vs pip

class Menu extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
    caret: PropTypes.bool,
    label: PropTypes.string,
    isOpen: PropTypes.bool,
    getDropdownProps: PropTypes.func.isRequired,
    getDropdownToggleProps: PropTypes.func.isRequired,
    getDropdownMenuProps: PropTypes.func.isRequired,
    dropdownToggle: PropTypes.func.isRequired,
    dropdownMenu: PropTypes.func.isRequired,
    primary: PropTypes.bool,
  }
  static defaultProps = {
    // Prop Getters
    getDropdownProps,
    getDropdownToggleProps,
    getDropdownMenuProps,
    // Default Components
    dropdownToggle: DropdownToggle,
    dropdownButton: Button,
    dropdownMenu: DropdownMenu,
    // options
    caret: true,
  }

  render() {
    const {
      children,
      getDropdownProps,
      getDropdownToggleProps,
      getDropdownMenuProps,
      dropdownToggle: ToggleComponent,
      dropdownMenu: MenuComponent,
      ...props
    } = this.props
    return (
      <Dropdown {...getDropdownProps(props)}>
        <ToggleComponent {...getDropdownToggleProps(props)} />
        <MenuComponent {...getDropdownMenuProps(props)}>
          {children}
          {props.isOpen && <Arrow className={Styles.DropdownArrow} />}
        </MenuComponent>
      </Dropdown>
    )
  }
}

export default Menu

//
// Helpers
//

function isPip({ label, caret }) {
  return !label
}

function getDropdownProps(props) {
  return {
    ...pick(props, ['isOpen', 'toggle']),
    className: cn(props.className, {
      [Styles.WithArrow]: isPip(props),
    }),
  }
}

function getIconProps({ label, icon }) {
  return label
    ? { name: 'chevron-down', className: 'ml-2' }
    : { name: icon || 'ellipsis-v' }
}

function getDropdownToggleProps({
  size,
  isOpen,
  primary,
  label,
  caret,
  icon,
  dropdownButton,
}) {
  return {
    active: isOpen,
    primary,
    size,
    caret,
    tag: label ? dropdownButton : IconButton,
    icon: !label ? icon : undefined,
    children: (
      <Fragment>
        <span className={cn({ 'sr-only': !label })}>
          {label || 'Contextual Actions'}
        </span>
        {caret && <Icon {...getIconProps({ label, icon })} />}
      </Fragment>
    ),
  }
}

function getDropdownMenuProps(props) {
  return {
    modifiers: {
      preventOverflow: { escapeWithReference: true },
    },
    ...pick(props, Object.keys(DropdownMenu.propTypes)),
  }
}
