import React from 'react'
import { mount } from 'enzyme'
import Brand from './Brand'
import Logo from '../Logo'

describe('Brand', () => {
  it('renders the Logo in an anchor', () => {
    const wrapper = mount(<Brand />)
    expect(wrapper.find('a').find(Logo).length).toBe(1)
  })

  it('is a link to document root', () => {
    const wrapper = mount(<Brand />)
    expect(wrapper.find('a').prop('href')).toEqual('/')
  })
})
