import React from 'react'
import { shallow } from 'enzyme'
import Alert from './'

describe('Alert', () => {
  it('renders', () => {
    const wrapper = shallow(<Alert />)
    expect(!!wrapper).toBe(true)
  })
  describe('color prop', () => {
    it('defaults to `success`', () => {
      const wrapper = shallow(<Alert>Hi</Alert>)
      expect(wrapper.find('div.bg-success').length).toBe(1)
    })
    it('accepts a contextual color', () => {
      expect(() => shallow(<Alert color="info">Hi</Alert>)).not.toThrow()
      expect(() => shallow(<Alert color="success">Hi</Alert>)).not.toThrow()
      expect(() => shallow(<Alert color="warning">Hi</Alert>)).not.toThrow()
      expect(() => shallow(<Alert color="danger">Hi</Alert>)).not.toThrow()
    })
    it('uses default if invalid color', () => {
      const propError = jest
        .spyOn(global.console, 'error')
        .mockImplementationOnce(() => {})
      const wrapper = shallow(<Alert color="accent">Hi</Alert>)
      expect(propError).toHaveBeenCalledTimes(1)
      expect(wrapper.find('div.bg-success').length).toBe(1)
      propError.mockRestore()
    })
  })
})
