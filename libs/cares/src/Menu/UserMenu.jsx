import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'
import Avatar from '../Avatar'

const UserMenu = props => {
  return (
    <Menu
      {...props}
      caret
      right
      getDropdownToggleProps={getDropdownToggleProps}
    />
  )
}

UserMenu.propTypes = {
  avatar: PropTypes.oneOfType([PropTypes.node]),
}
UserMenu.defaultProps = {
  avatar: <Avatar />,
  label: 'Guest',
}

export default UserMenu

//
// Helpers
//

function getDropdownToggleProps({ avatar, label }) {
  return {
    size: 'sm',
    className: 'bg-transparent border-0 text-white',
    children: (
      <div className="d-flex align-items-center">
        <span className="mr-2 text-capitalize d-block text-truncate">
          {label}
        </span>
        {avatar.type === Avatar &&
          React.cloneElement(avatar, { size: 'sm', invert: true })}
      </div>
    ),
  }
}
