import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Nav, NavItem, NavLink } from '@cwds/reactstrap'
import Styles from './JumpNav.module.scss'

const DefaulItemTag = ({ path, title, children, ...props }) => {
  return (
    <NavItem {...props}>
      <NavLink href={path}>{title}</NavLink>
    </NavItem>
  )
}

const propTypes = {
  routes: PropTypes.array,
  itemTag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
}

const defaultProps = {
  routes: [],
  itemTag: DefaulItemTag,
}

const JumpNav = ({ routes, itemTag: ItemTag }) => (
  <Nav vertical className={cn(Styles.JumpNav)}>
    {routes.map(({ path, title, children }) => (
      <ItemTag key={path} path={path} title={title}>
        {children}
      </ItemTag>
    ))}
  </Nav>
)

JumpNav.propTypes = propTypes
JumpNav.defaultProps = defaultProps

export default JumpNav
