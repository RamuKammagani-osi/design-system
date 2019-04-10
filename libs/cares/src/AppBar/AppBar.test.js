import React from 'react'
import { shallow, mount } from 'enzyme'
import AppBar from './AppBar'
import { CaresContext, defaultContext } from '../CaresContext'

describe('AppBar', () => {
  it('renders', () => {
    const wrapper = shallow(<AppBar />)
    expect(!!wrapper).toBe(true)
  })

  it('renders the Brand', () => {
    const wrapper = mount(<AppBar />)
    expect(wrapper.find(defaultContext.Brand).length).toBe(1)
  })

  it('renders the UserMenu', () => {
    const wrapper = mount(<AppBar />)
    expect(wrapper.find(defaultContext.UserMenu).length).toBe(1)
  })

  it('accepts Brand prop as component', () => {
    const MyBrandComponent = () => <div />
    const wrapper = mount(<AppBar Brand={MyBrandComponent} />)
    expect(wrapper.find(MyBrandComponent).length).toBe(1)
  })

  it('accepts Brand prop as node', () => {
    const MyBrandNode = <div id="brand-node" />
    const wrapper = mount(<AppBar Brand={MyBrandNode} />)
    expect(wrapper.find('#brand-node').length).toBe(1)
  })

  it('accepts UserMenu prop as component', () => {
    const MyUserMenuComponent = () => <div />
    const wrapper = mount(<AppBar UserMenu={MyUserMenuComponent} />)
    expect(wrapper.find(MyUserMenuComponent).length).toBe(1)
  })

  it('accepts UserMenu prop as node', () => {
    const MyUserMenuNode = <div id="user-menu-node" />
    const wrapper = mount(<AppBar UserMenu={MyUserMenuNode} />)
    expect(wrapper.find('#user-menu-node').length).toBe(1)
  })

  describe('with Context', () => {
    it('renders Brand override from context when no prop given', () => {
      const MyGlobalBrand = () => <div />
      const wrapper = mount(
        <CaresContext.Provider value={{ Brand: MyGlobalBrand }}>
          <AppBar />
        </CaresContext.Provider>
      )
      expect(wrapper.find(MyGlobalBrand).length).toBe(1)
    })

    it('uses Brand prop instead of context value when both present', () => {
      const MyGlobalBrand = () => <div />
      const MyLocalBrand = () => <div />
      const wrapper = mount(
        <CaresContext.Provider value={{ Brand: MyGlobalBrand }}>
          <AppBar Brand={MyLocalBrand} />
        </CaresContext.Provider>
      )
      expect(wrapper.find(MyGlobalBrand).length).toBe(0)
      expect(wrapper.find(MyLocalBrand).length).toBe(1)
    })

    it('uses nothing when no prop passed and no context value present', () => {
      const wrapper = mount(
        <CaresContext.Provider value={{}}>
          <AppBar />
        </CaresContext.Provider>
      )
      expect(wrapper.find(defaultContext.Brand).length).toBe(0)
    })
  })
})
