import React from 'react'
import { shallow } from 'enzyme'
import InputMask from './'

describe('InputMask', () => {
  it('renders', () => {
    const wrapper = shallow(<InputMask />)
    expect(!!wrapper).toBe(true)
  })

  it('renders mask', () => {
    const wrapper = shallow(<InputMask mask="(999) 999-99-99" />)
    expect(wrapper.prop('mask')).toBe('(999) 999-99-99')
  })
})
