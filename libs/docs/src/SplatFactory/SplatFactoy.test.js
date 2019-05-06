import React from 'react'
import { shallow } from 'enzyme'
import SplatFactory from './SplatFactory'

describe('SplatFactory', () => {
  it('creates instances of a components', () => {
    const MyComponent = () => <div />
    const options = [['foo', [undefined, true]], ['bar', [undefined, true]]]
    const wrapper = shallow(
      <SplatFactory component={MyComponent} options={options} />
    )
    expect(wrapper.find(MyComponent).length).toBe(4)
  })

  it('accepts combinations', () => {
    const MyComponent = () => <div />
    const combinations = [
      { foo: true },
      { bar: true },
      { foo: true, bar: true },
      {},
    ]
    const wrapper = shallow(
      <SplatFactory component={MyComponent} combinations={combinations} />
    )
    expect(wrapper.find(MyComponent).length).toBe(4)
  })
})
