import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'
import { Button as PrimalButton } from '@cwds/reactstrap'

describe('Button', () => {
  it('renders a Button', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find(PrimalButton).length).toBe(1)
    expect(!!wrapper).toBe(true)
  })

  it('renders a default outline button', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find(PrimalButton).prop('outline')).toBe(true)
  })

  it('renders a primary button', () => {
    const wrapper = shallow(<Button primary />)
    expect(wrapper.find(PrimalButton).prop('outline')).toBe(false)
  })
})
