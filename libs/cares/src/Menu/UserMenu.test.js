import React from 'react'
import { shallow } from 'enzyme'
import UserMenu from './UserMenu'
import Menu from './Menu'
import DropdownToggle from 'reactstrap/lib/DropdownToggle'
import Avatar from '../Avatar'

describe('UserMenu', () => {
  it('wraps Menu', () => {
    const wrapper = shallow(<UserMenu label="Boaty McBoatface" />)
    expect(wrapper.type()).toBe(Menu)
  })
  it('renders label in the popup button', () => {
    const wrapper = shallow(<UserMenu label="Boaty McBoatface" />).dive()
    expect(
      wrapper
        .find(DropdownToggle)
        .children()
        .text()
    ).toContain('Boaty McBoatface')
  })
  it('renders a default Avatar in the popup button', () => {
    const wrapper = shallow(<UserMenu label="Boaty McBoatface" />).dive()
    expect(wrapper.find(Avatar).length).toBe(1)
    expect(wrapper.find(Avatar).prop('size')).toBe('sm')
    expect(wrapper.find(Avatar).prop('invert')).toBe(true)
  })
  it('accepts a custom avatar', () => {
    const myAvatar = <Avatar test-id="test" />
    const wrapper = shallow(<UserMenu avatar={myAvatar} label="test" />).dive()
    expect(wrapper.find(Avatar).length).toBe(1)
    expect(wrapper.find(Avatar).prop('size')).toBe('sm')
    expect(wrapper.find(Avatar).prop('invert')).toBe(true)
    expect(wrapper.find(Avatar).prop('test-id')).toBe('test')
  })
})
