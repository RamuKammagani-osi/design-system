import React from 'react'
import { mount, shallow } from 'enzyme'
import './icon-library' // required for side-effectful init
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from './Icon'

describe('Icon', () => {
  it('renders an svg', () => {
    const wrapper = mount(<Icon icon="check" />)
    expect(wrapper.find('svg').length).toBe(1)
  })
  it('passes down className', () => {
    const wrapper = mount(<Icon icon="check" className="text-primary" />)
    expect(wrapper.find('svg').hasClass('text-primary')).toBe(true)
    expect(wrapper.find('svg').hasClass('text-secondary')).toBe(false)
  })
  it('has attr `focusable` set to false', () => {
    const wrapper = mount(<Icon icon="check" />)
    expect(wrapper.find('svg').prop('focusable')).toBe('false')
  })
  it('does NOT have a default color', () => {
    const wrapper = mount(<Icon name="check" />)
    expect(wrapper.find('svg').prop('color')).not.toBeDefined()
  })
  it('appends the className with BS4 fn utility class', () => {
    const warnSpy = jest
      .spyOn(global.console, 'warn')
      .mockImplementation(() => {})
    const wrapper = shallow(<Icon name="check" color="primary" />)
    expect(wrapper.find(FontAwesomeIcon).prop('className')).toContain(
      'text-primary'
    )
    expect(warnSpy).toHaveBeenCalledTimes(1)
    warnSpy.mockRestore()
  })
  describe('arg normalization', () => {
    it('aliases the `icon` prop as `name`', () => {
      const nameWrapper = shallow(<Icon name="foo" />)
      expect(nameWrapper.find(FontAwesomeIcon).prop('icon')).toEqual('foo')
      const iconWrapper = shallow(<Icon icon="foo" />)
      expect(iconWrapper.find(FontAwesomeIcon).prop('icon')).toEqual('foo')
    })
    it('does not decorate when `set` is not defined', () => {
      const [str, arr, obj] = ['foo', ['foo', 'bar'], {}]
      let wrapper

      wrapper = shallow(<Icon name={str} />)
      expect(wrapper.find(FontAwesomeIcon).prop('icon')).toEqual(str)

      wrapper = shallow(<Icon name={arr} />)
      expect(wrapper.find(FontAwesomeIcon).prop('icon')).toBe(arr)

      wrapper = shallow(<Icon name={obj} />)
      expect(wrapper.find(FontAwesomeIcon).prop('icon')).toBe(obj)
    })
    it('decorates the `icon` when `set` is defined', () => {
      const wrapper = shallow(<Icon name="foo" set="bar" />)
      expect(wrapper.find(FontAwesomeIcon).prop('icon')).toEqual(['bar', 'foo'])
    })
    it('throws when `set` is used with an invalid iconArg', () => {
      expect(() => {
        shallow(<Icon name={['quo', 'qux']} set="bar" />)
      }).toThrow()
    })
  })
})
