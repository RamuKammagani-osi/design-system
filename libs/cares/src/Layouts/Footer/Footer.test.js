import React from 'react'
import Footer from './Footer'
import Logo from './../../Logo'
import { shallow } from 'enzyme'

describe('Footer', () => {
  it('renders', () => {
    expect(() => shallow(<Footer />)).not.toThrow()
  })

  it('renders a Logo', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find(Logo).length).toBe(1)
  })
})
