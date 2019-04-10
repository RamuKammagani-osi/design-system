import React from 'react'
import { mount } from 'enzyme'
import RolodexHeader from './RolodexHeader'
import { CardHeader, Util } from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'

describe('RolodexHeader', () => {
  it('exists', () => {
    expect(!!RolodexHeader).toBeDefined()
  })
  it('renders a CardHeader', () => {
    expect(() =>
      mount(
        <RolodexHeader>
          <CardHeader>Good</CardHeader>
        </RolodexHeader>
      )
    ).not.toThrow()
  })
  it('adds an icon', () => {
    const wrapper = mount(
      <RolodexHeader>
        <CardHeader>Test</CardHeader>
      </RolodexHeader>
    )
    expect(wrapper.find(Icon).prop('name')).toBe('chevron-down')
  })
  it('rotates the Icon when isOpen is true', () => {
    const wrapper = mount(
      <RolodexHeader>
        <CardHeader>Test</CardHeader>
      </RolodexHeader>
    )
    expect(wrapper.find(Icon).prop('rotation')).toBeFalsy()
    wrapper.setProps({ isOpen: true })
    expect(wrapper.find(Icon).prop('rotation')).toBe(Util.ROTATION.FLIP)
  })
})
