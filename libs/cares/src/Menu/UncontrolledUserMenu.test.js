import React from 'react'
import { shallow, mount } from 'enzyme'
import UncontrolledUserMenu from './UncontrolledMenu'
import Menu from './Menu'
import MenuItem from './MenuItem'
import { DropdownToggle } from '@cwds/reactstrap'

describe('UncontrolledUserMenu', () => {
  it('is a stateful wrapper', () => {
    const wrapper = shallow(
      <UncontrolledUserMenu label="Boaty McBoatface">
        <MenuItem>Hi</MenuItem>
      </UncontrolledUserMenu>
    )
    expect(wrapper.find(Menu).length).toBe(1)
    expect(wrapper.find(Menu).prop('isOpen')).toBe(false)
  })

  it('manages the state of a Menu', () => {
    const wrapper = mount(
      <UncontrolledUserMenu label="LABEL">
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
      </UncontrolledUserMenu>
    )
    expect(wrapper.find(Menu).prop('isOpen')).toBe(false)
    expect(wrapper.find(DropdownToggle).length).toBe(1)
    wrapper.find(DropdownToggle).simulate('click')
    expect(wrapper.find(Menu).prop('isOpen')).toBe(true)
  })
})
