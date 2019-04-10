import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Card, CardBody, CardHeader, CardTitle } from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'
import { grays } from '@cwds/core'
import { UncontrolledMenu as Menu } from '../Menu'
import Styles from './Tile.module.scss'

const Tile = ({
  children,
  className,
  Menu: ProvidedMenu,
  MenuItems,
  icon,
  Icon: ProvidedIcon,
  title,
}) => {
  const TileIcon = icon ? (
    <Icon name={icon} className="mr-2" color={grays['700']} />
  ) : (
    ProvidedIcon &&
    React.cloneElement(ProvidedIcon, {
      className: cn(ProvidedIcon.props.className || '', 'mr-2'),
      color: grays['700'],
    })
  )
  const menu = MenuItems ? (
    <Menu size="sm" right>
      {MenuItems}
    </Menu>
  ) : (
    ProvidedMenu
  )
  return (
    <Card className={cn(className)}>
      <CardHeader className="border-bottom-0 pb-0 d-flex justify-content-between">
        <div className={cn('flex-grow-1', Styles.TitleContainer)}>
          <CardTitle>
            {TileIcon}
            {title}
          </CardTitle>
        </div>
        {menu}
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  )
}

Tile.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  /** String shorthand (preferred) for Icon declaration */
  icon: PropTypes.string,
  /** Longform notation for Icon declaration. Use the `icon` prop when possible */
  Icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** Pass a Menu react node or component. Use the `MenuItems` when possible. */
  Menu: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** Pass MenuItems to render a Tile menu. Does not render a Menu by default */
  MenuItems: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /** String shorthand for Title declaration */
  title: PropTypes.string,
  /** Longform notation for Title declaration */
  Title: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
}
Tile.defaultProps = {}

export default Tile
