import React from 'react'
import { PageHeader } from '@cwds/cares'
import { shallow } from 'enzyme'
import AppBar from '../AppBar'
import Banner from './Banner'

describe('Banner', () => {
  it('renders', () => {
    expect(() => shallow(<Banner />)).not.toThrow()
  })

  it('has [aria-role=banner]', () => {
    const wrapper = shallow(<Banner />)
    expect(wrapper.prop('role')).toEqual('banner')
  })

  it('renders the AppBar', () => {
    const wrapper = shallow(<Banner />)
    expect(wrapper.find(AppBar).length).toBe(1)
  })

  it('renders the PageHeader', () => {
    const wrapper = shallow(<Banner />)
    expect(wrapper.find(PageHeader).length).toBe(1)
  })
})
