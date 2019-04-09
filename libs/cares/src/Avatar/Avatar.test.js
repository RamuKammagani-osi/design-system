import React from 'react'
import { shallow } from 'enzyme'
import Avatar from './'
import { Icon } from '@cwds/icons'

describe('Avatar', () => {
  it('renders', () => {
    const wrapper = shallow(<Avatar />)
    expect(!!wrapper).toBe(true)
  })

  it('renders an image', () => {
    const wrapper = shallow(<Avatar imgUrl="some-url" />)
    expect(wrapper.getElement().type).toBe('img')
    expect(wrapper.prop('src')).toBe('some-url')
  })

  it('renders text', () => {
    const wrapper = shallow(<Avatar text="if" />)
    expect(wrapper.text()).toEqual('if')
  })

  it('renders a default icon', () => {
    const wrapper = shallow(<Avatar />)
    const $icon = wrapper.find(Icon)
    expect($icon.length).toBe(1)
    expect($icon.prop('name')).toEqual('user')
  })

  it('applies size classes', () => {
    const wrapper = shallow(<Avatar />)
    expect(wrapper.hasClass('size-md')).toBe(true)
    wrapper.setProps({
      size: 'xs',
    })
    expect(wrapper.hasClass('size-xs')).toBe(true)
    expect(wrapper.hasClass('size-md')).not.toBe(true)
    wrapper.setProps({
      size: 'xl',
    })
    expect(wrapper.hasClass('size-xl')).toBe(true)
  })

  it('only lets valid size props through', () => {
    const spy = jest
      .spyOn(global.console, 'error')
      .mockImplementationOnce(() => {})
    const wrapper = shallow(<Avatar size="nope" />)
    expect(wrapper.hasClass('size-md')).toBe(true)
    expect(spy).toHaveBeenCalledTimes(1)
    spy.mockRestore()
  })

  it('inverts color scheme', () => {
    const wrapper = shallow(<Avatar />)
    expect(wrapper.hasClass('inverted')).not.toBe(true)
    wrapper.setProps({
      invert: true,
    })
    expect(wrapper.hasClass('inverted')).toBe(true)
  })
})
