import React from 'react'
import { shallow } from 'enzyme'
import { Arrow } from 'react-popper'
import { Dropdown, DropdownItem, DropdownToggle } from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'
import { Menu, MenuItem } from './'

describe('Menu', () => {
  it('renders', () => expect(() => <Menu />).not.toThrow())

  it('renders dropdown menu', () => {
    const wrapper = shallow(
      <Menu label="LABEL">
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
        <MenuItem>Quo</MenuItem>
      </Menu>
    )
    expect(wrapper.find(Dropdown).length).toBe(1)
    expect(wrapper.find(DropdownToggle).length).toBe(1)
    expect(wrapper.find(DropdownItem).length).toBe(3)
  })

  it('renders an icon with the label', () => {
    const wrapper = shallow(
      <Menu label="LABEL">
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
        <MenuItem>Quo</MenuItem>
      </Menu>
    )
    expect(wrapper.find(Icon).length).toBe(1)
    expect(wrapper.find(Icon).prop('name')).toBe('chevron-down')
  })

  it('renders a kebab when no label is provided', () => {
    const wrapper = shallow(
      <Menu>
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
      </Menu>
    )
    expect(wrapper.find(Icon).length).toBe(1)
    expect(wrapper.find(Icon).prop('name')).toBe('ellipsis-v')
  })

  it('adds discernable text to kebab menu', () => {
    const wrapper = shallow(
      <Menu>
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
      </Menu>
    )
    expect(
      wrapper
        .find(DropdownToggle)
        .find('.sr-only')
        .text()
    ).toBe('Contextual Actions')
  })

  it('adds an Arrow when open and no label is present', () => {
    const wrapper = shallow(
      <Menu isOpen={true}>
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
      </Menu>
    )
    expect(wrapper.find(Arrow).length).toBe(1)
  })

  it('passes the `size` prop to DropdownToggle', () => {
    const wrapper = shallow(
      <Menu size="sm">
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
      </Menu>
    )
    expect(wrapper.find(DropdownToggle).prop('size')).toBe('sm')
  })
})
