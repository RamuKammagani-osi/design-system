import React from 'react'
import { shallow } from 'enzyme'
import { Popover, PopoverBody } from '@cwds/reactstrap'
import Infotip from './Infotip'

describe('Infotip', () => {
  it('renders', () => {
    const wrapper = shallow(<Infotip id="myId">Hello</Infotip>)
    expect(!!wrapper).toBe(true)
  })

  it('renders a Popover', () => {
    const wrapper = shallow(<Infotip id="myId">Hi</Infotip>)
    expect(wrapper.find(Popover).length).toBe(1)
  })

  describe('children', () => {
    it('accepts text', () => {
      const wrapper = shallow(<Infotip id="myId">Hello World!</Infotip>)
      expect(
        wrapper
          .find(PopoverBody)
          .children()
          .text()
      ).toEqual('Hello World!')
    })
    it('accepts a fragment', () => {
      const wrapper = shallow(
        <Infotip id="myId">
          <div>one</div>
          <div>two</div>
          <div>three</div>
        </Infotip>
      )
      expect(wrapper.find(PopoverBody).children().length).toBe(3)
    })
    it('accepts a component', () => {
      const MyComponent = () => <div />
      const wrapper = shallow(
        <Infotip id="myId">
          <MyComponent />
        </Infotip>
      )
      expect(
        wrapper
          .find(PopoverBody)
          .children()
          .type()
      ).toBe(MyComponent)
    })
  })
})
