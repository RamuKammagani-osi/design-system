import React from 'react'
import { mount, shallow } from 'enzyme'
import { Icon } from '@cwds/icons'
import IconButton from './IconButton'

describe('IconButton', () => {
  it('renders', () => {
    expect(() =>
      shallow(<IconButton icon="check">Test</IconButton>)
    ).not.toThrow()
  })

  it('passes props down', () => {
    const handleClick = jest.fn()
    const wrapper = mount(
      <IconButton
        color="light"
        onClick={handleClick}
        className="test-button-class"
        icon="circle-notch"
      >
        Test
      </IconButton>
    )
    expect(handleClick).not.toHaveBeenCalled()
    wrapper.find('button').simulate('click')
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(wrapper.find('button').hasClass('test-button-class')).toBeTruthy()
    expect(wrapper.find(Icon).prop('name')).toBe('circle-notch')
  })

  it('defaults to ellipsis button', () => {
    const wrapper = shallow(<IconButton />)
    expect(wrapper.find(Icon).prop('name')).toBe('ellipsis-v')
  })
})
