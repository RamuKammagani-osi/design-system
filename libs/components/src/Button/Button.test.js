import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'
import { Button as PrimitiveButton } from '@cwds/reactstrap'

describe('Button', () => {
  it('renders a Button', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find(PrimitiveButton).length).toBe(1)
    expect(!!wrapper).toBe(true)
  })

  it('renders a default Button', () => {
    const wrapper = shallow(<Button />)
    const primalBtn = wrapper.find(PrimitiveButton)
    expect(primalBtn.prop('className')).toContain('Secondary')
    expect(primalBtn.prop('outline')).not.toBeDefined()
    expect(primalBtn.prop('color')).toBe('primary')
  })

  it('renders a primary button', () => {
    const wrapper = shallow(<Button primary />)
    const primalBtn = wrapper.find(PrimitiveButton)
    expect(primalBtn.prop('outline')).not.toBeDefined()
    expect(primalBtn.prop('color')).toBe('primary')
  })

  it('logs a warning if used with deprecated prop `color`', () => {
    const spy = jest
      .spyOn(global.console, 'warn')
      .mockImplementationOnce(() => {})
    shallow(<Button color="primary">Hi</Button>)
    expect(spy.mock.calls.length).toBe(1)
    spy.mockRestore()
  })

  it('logs a warning if used with deprecated prop `outline`', () => {
    const spy = jest
      .spyOn(global.console, 'warn')
      .mockImplementationOnce(() => {})
    shallow(<Button outline>Hi</Button>)
    expect(spy.mock.calls.length).toBe(1)
    spy.mockRestore()
  })
})
