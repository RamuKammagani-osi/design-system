import React from 'react'
import { UncontrolledUserMenu, MenuItem } from '../../Menu'

export default () => (
  <UncontrolledUserMenu>
    <MenuItem onClick={() => alert('logout!')}>Logout</MenuItem>
  </UncontrolledUserMenu>
)
