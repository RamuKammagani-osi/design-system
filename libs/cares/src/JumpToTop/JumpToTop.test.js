import React from 'react'
import { shallow } from 'enzyme'
import JumpToTop from './'

describe('JumpToTop', () => {
  it('renders', () => {
    const wrapper = shallow(<JumpToTop />)
    expect(!!wrapper).toBe(true)
  })
})
