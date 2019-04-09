import React from 'react'
import { shallow } from 'enzyme'
import Alert from './'

describe('Alert', () => {
  it('renders', () => {
    const wrapper = shallow(<Alert />)
    expect(!!wrapper).toBe(true)
  })
})
