import React from 'react'
import { shallow } from 'enzyme'
import CaresButton from './CaresButton'
import { Button } from '../'

describe('CaresButton', () => {
  it('renders a Button', () => {
    const wrapper = shallow(<CaresButton />)
    expect(wrapper.find(Button).length).toBe(1)
    expect(!!wrapper).toBe(true)
  })

  it('renders a default outline button', () => {
    const wrapper = shallow(<CaresButton />)
    expect(wrapper.prop('outline')).toBe(true)
  })

  it('renders a primary button', () => {
    const wrapper = shallow(<CaresButton solid />)
    expect(wrapper.find(Button).length).toBe(1)
    expect(wrapper.prop('outline')).toBe(false)
  })
})
