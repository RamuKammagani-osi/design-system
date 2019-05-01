import React, { Component } from 'react'
import { mount, shallow } from 'enzyme'
import Article from './Article'
import SideNav from './ArticleSideNav'
import { PrimitiveButton as Button, Banner } from '@cwds/components'

const DummyArticle = () => <div>My Article</div>

describe('Article', () => {
  it('has a layout toggler', () => {
    const wrapper = mount(<Article main={DummyArticle} />)
    const ToggleBtn = wrapper
      .find(Banner)
      .find(Button)
      .last()
    expect(ToggleBtn.text()).toContain('Hide SideNav')
    expect(wrapper.find(SideNav).length).toBe(1)
    ToggleBtn.simulate('click')
    expect(ToggleBtn.text()).toBe('Show SideNav')
    expect(wrapper.find(SideNav).length).toBe(0)
  })
  it('has a breadcrumb', () => {
    const myBreadcrumbs = [
      { title: 'Foo', path: '/foo' },
      { title: 'Bar', path: '/foo/bar' },
    ]
    const wrapper = shallow(
      <Article main={DummyArticle} breadcrumbs={myBreadcrumbs} />
    )
    expect(wrapper.find(Banner).prop('Breadcrumb').props.items).toBe(
      myBreadcrumbs
    )
  })
  it('does not lose state on layout change', () => {
    class MyStatefulComponent extends Component {
      state = { value: 'OFF' }
      render() {
        return <div>{this.state.value}</div>
      }
    }
    const wrapper = mount(<Article main={MyStatefulComponent} />)
    expect(wrapper.find(MyStatefulComponent).text()).toBe('OFF')
    wrapper.find(MyStatefulComponent).setState({ value: 'ON' })
    expect(wrapper.find(SideNav).length).toBe(1)
    wrapper.setState({ showNav: false })
    expect(wrapper.find(SideNav).length).toBe(0)
    expect(wrapper.find(MyStatefulComponent).state('value')).toEqual('ON')
    expect(wrapper.find(MyStatefulComponent).text()).toBe('ON')
  })
})
