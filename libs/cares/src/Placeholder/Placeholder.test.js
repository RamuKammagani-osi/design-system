import React from 'react'
import { mount } from 'enzyme'
import Placeholder from './Placeholder'
import { Col } from '@cwds/reactstrap'

describe('Placeholder', () => {
  it('renders', () => {
    expect(() => {
      mount(<Placeholder />)
    }).not.toThrow()
  })
  it('renders a single div by default', () => {
    const wrapper = mount(<Placeholder test-id="my-placeholder" />)
    const $node = wrapper.find('[test-id="my-placeholder"]')
    expect($node.length).toBe(1)
    expect($node.getDOMNode().tagName).toBe('DIV')
  })
  it('renders a variable number of columns', () => {
    let wrapper

    wrapper = mount(<Placeholder grid cols={2} />)
    expect(wrapper.find(Col).length).toBe(2)

    wrapper = mount(<Placeholder grid cols={3} />)
    expect(wrapper.find(Col).length).toBe(3)
  })
  it('renders a variable number of rows', () => {
    let wrapper

    wrapper = mount(<Placeholder grid cols={2} rows={4} tag="p" />)
    expect(wrapper.find('p').length).toBe(8)

    wrapper = mount(<Placeholder grid cols={3} rows={3} tag="p" />)
    expect(wrapper.find('p').length).toBe(9)
  })
})
