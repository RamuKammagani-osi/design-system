import React from 'react'
import { shallow, mount } from 'enzyme'
import { UncontrolledMenu, Menu, MenuItem } from './'
import { DropdownToggle } from '@cwds/reactstrap'

describe('UncontrolledMenu', () => {
  it('renders a Menu', () => {
    const wrapper = shallow(
      <UncontrolledMenu>
        <MenuItem>Hi</MenuItem>
      </UncontrolledMenu>
    )
    expect(wrapper.find(Menu).length).toBe(1)
  })

  it('manages the state of a Menu', () => {
    const wrapper = mount(
      <UncontrolledMenu label="LABEL">
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
      </UncontrolledMenu>
    )
    expect(wrapper.find(Menu).prop('isOpen')).toBe(false)
    // console.log(wrapper.debug())
    expect(wrapper.find(DropdownToggle).length).toBe(1)
    wrapper.find(DropdownToggle).simulate('click')
    expect(wrapper.find(Menu).prop('isOpen')).toBe(true)
  })
})
