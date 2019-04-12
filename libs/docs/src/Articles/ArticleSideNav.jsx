import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from '@cwds/components'
import Styles from './ArticleSideNav.module.scss'

const SideNav = ({ routes }) => {
  if (!routes.length) return null
  return (
    <ListGroup>
      {routes.map(route => (
        <ListGroupItem
          action
          active={route.active}
          key={route.path}
          className="p-0"
        >
          <Link className={Styles.ArticleSideNavLink} to={route.path}>
            {route.label || route.title}
          </Link>
        </ListGroupItem>
      ))}
    </ListGroup>
  )
}

SideNav.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      path: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
}
SideNav.defaultProps = {
  routes: [],
}

export default SideNav
