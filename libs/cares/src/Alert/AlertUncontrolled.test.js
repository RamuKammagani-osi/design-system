import React from 'react'
import { shallow, mount } from 'enzyme'
import Alert from './Alert'
import AlertUncontrolled from './AlertUncontrolled'

describe('AlertUncontrolled', () => {
  it('renders an Alert', () => {
    const wrapper = shallow(<AlertUncontrolled />)
    expect(wrapper.type()).toBe(Alert)
  })

  it.skip('maintains state', () => {
    // Using mount to simulate an event to traverse the toggle stateHandler
    // This is not ideal since we're assuming implementation detail in Alert
    const wrapper = mount(<AlertUncontrolled />)
    expect(wrapper.find(Alert).prop('isOpen')).toBe(true)
    expect(wrapper.find(Alert).prop('toggle')).toBeDefined()
    wrapper.find('button.close').simulate('click')
    expect(wrapper.find(Alert).prop('isOpen')).toBe(false)
  })
})
