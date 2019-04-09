import React from 'react'
import Banner from '../Banner/Banner'
import AppBar from '../../AppBar'
import PageHeader from '../../PageHeader'
import { shallow } from 'enzyme'

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
