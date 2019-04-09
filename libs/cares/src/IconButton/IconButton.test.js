import React from 'react'
import { mount } from 'enzyme'
import IconButton from './IconButton'

describe('IconButton', () => {
  it('renders', () => {
    expect(() =>
      mount(<IconButton icon="check">Test</IconButton>)
    ).not.toThrow()
  })

  it('passes props down', () => {
    const handleClick = jest.fn()
    const wrapper = mount(
      <IconButton
        color="light"
        iconClassName="test-icon-class"
        onClick={handleClick}
        className="test-button-class"
        icon="circle-notch"
        spin
      >
        Test
      </IconButton>
    )
    expect(wrapper.find('svg').hasClass('test-icon-class')).toBeTruthy()
    expect(handleClick).not.toHaveBeenCalled()
    wrapper.find('button').simulate('click')
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(wrapper.find('button').hasClass('test-button-class')).toBeTruthy()
  })
})
