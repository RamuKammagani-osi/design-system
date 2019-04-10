import React from 'react'
import { Link } from 'react-router-dom'
import {
  Logo,
  Badge,
  MenuItem,
  UncontrolledUserMenu,
  defaultContext,
} from '@cwds/components'
import getRepoStatus from './macros/repo-status.macro'

const status = getRepoStatus()

const Brand = () => (
  <React.Fragment>
    <Link to="/">
      <Logo />
    </Link>
    <Link to="/status" className="d-none d-sm-inline-block ml-2">
      <Badge color="primary">{status.version}</Badge>
    </Link>
  </React.Fragment>
)

const UserMenu = () => (
  <UncontrolledUserMenu>
    <MenuItem
      tag="a"
      href="https://github.com/ca-cwds/design-system"
      target="_blank"
    >
      GitHub
    </MenuItem>
    <MenuItem tag="a" href="slack://channel?team=T0FSW5RLH&id=CFA951KEK">
      Slack
    </MenuItem>
    <MenuItem onClick={() => alert('logout!')}>Logout</MenuItem>
  </UncontrolledUserMenu>
)

export default {
  ...defaultContext,
  Brand,
  UserMenu,
}
