import React from 'react'
import { shallow } from 'enzyme'
import PageHeader from './'

describe('PageHeader', () => {
  it('renders', () => {
    const wrapper = shallow(<PageHeader />)
    expect(!!wrapper).toBe(true)
  })
})
