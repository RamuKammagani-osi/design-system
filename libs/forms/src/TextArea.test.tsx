import React from 'react'
import { shallow } from 'enzyme'
import TextArea, { TextAreaCounter } from './TextArea'

describe('TextArea', () => {
  it('renders a TextArea', () => {
    const wrapper = shallow(<TextArea />)
    expect(!!wrapper).toBe(true)
  })
})

describe('TextAreaCounter', () => {
  it('renders a TextAreaCounter', () => {
    const wrapper = shallow(<TextAreaCounter />)
    expect(!!wrapper).toBe(true)
  })
  it('renders a TextArea, spans and passes the props to TextArea', () => {
    const wrapper = shallow(<TextAreaCounter maxLength={10} />)
    expect(wrapper.find(TextArea).length).toBe(1)
    expect(wrapper.find('span').length).toBe(2)
    expect(wrapper.find(TextArea).prop('maxLength')).toBe(10)
  })
  it('renders the proper remaining text', () => {
    const wrapper = shallow(<TextAreaCounter value="hello" maxLength={10} />)
    expect(
      wrapper
        .find('span')
        .at(1)
        .text()
    ).toEqual('5')
  })
})
