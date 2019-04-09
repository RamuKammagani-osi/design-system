import React from 'react'
import { shallow } from 'enzyme'
import Body from '../Body'

describe('Body', () => {
  it('exists', () => {
    expect(Body).toBeDefined()
  })

  it('defaults to dashboard layout', () => {
    expect(Body.defaultProps.layout).toBe('dashboard')
  })

  describe('with dashboard layout', () => {
    const layout = 'dashboard'

    it('renders the main element', () => {
      const main = <div id="my-main">Hello, world!</div>
      expect(
        shallow(<Body layout={layout} main={main} />)
          .find('#my-main')
          .exists()
      ).toBe(true)
    })

    it('renders no sidenav element', () => {
      const sidenav = <div id="my-sidenav">Side Nav</div>
      expect(
        shallow(<Body layout={layout} sidenav={sidenav} />)
          .find('#my-sidenav')
          .exists()
      ).toBe(false)
    })

    it('renders message element', () => {
      const myMessage = <div id="my-message" />
      const wrapper = shallow(<Body layout="dashboard" message={myMessage} />)
      expect(wrapper.find('#my-message').length).toBe(1)
    })

    it('supports functional main', () => {
      const Main = () => <div id="my-main">Hello, world!</div>
      expect(
        shallow(<Body layout={layout} main={Main} />)
          .find(Main)
          .exists()
      ).toBe(true)
    })
  })

  describe('with subroutes layout', () => {
    const layout = 'subroutes'

    it('renders the main element', () => {
      const main = <div id="my-main">Hello, world!</div>
      expect(
        shallow(<Body layout={layout} main={main} />)
          .find('#my-main')
          .exists()
      ).toBe(true)
    })

    it('renders the sidenav element', () => {
      const sidenav = <div id="my-sidenav">Side Nav</div>
      expect(
        shallow(<Body layout={layout} sidenav={sidenav} />)
          .find('#my-sidenav')
          .exists()
      ).toBe(true)
    })
    it('renders message element', () => {
      const myMessage = <div id="my-message" />
      const wrapper = shallow(<Body layout="dashboard" message={myMessage} />)
      expect(wrapper.find('#my-message').length).toBe(1)
    })
    it('supports functional main', () => {
      const Main = () => <div id="my-main">Hello, world!</div>
      expect(
        shallow(<Body layout={layout} main={Main} />)
          .find(Main)
          .exists()
      ).toBe(true)
    })

    it('supports functional sidenav', () => {
      const SideNav = () => <div id="my-sidenav">Hello, world!</div>
      expect(
        shallow(<Body layout={layout} sidenav={SideNav} />)
          .find(SideNav)
          .exists()
      ).toBe(true)
    })
  })

  describe('with jumpnav layout', () => {
    const layout = 'jumpnav'

    it('renders the main element', () => {
      const main = <div id="my-main">Hello, world!</div>
      expect(
        shallow(<Body layout={layout} main={main} />)
          .find('#my-main')
          .exists()
      ).toBe(true)
    })

    it('renders the sidenav element', () => {
      const sidenav = <div id="my-sidenav">Side Nav</div>
      expect(
        shallow(<Body layout={layout} sidenav={sidenav} />)
          .find('#my-sidenav')
          .exists()
      ).toBe(true)
    })

    it('renders message element', () => {
      const myMessage = <div id="my-message" />
      const wrapper = shallow(<Body layout="dashboard" message={myMessage} />)
      expect(wrapper.find('#my-message').length).toBe(1)
    })

    it('supports functional main', () => {
      const Main = () => <div id="my-main">Hello, world!</div>
      expect(
        shallow(<Body layout={layout} main={Main} />)
          .find(Main)
          .exists()
      ).toBe(true)
    })

    it('supports functional sidenav', () => {
      const SideNav = () => <div id="my-sidenav">Hello, world!</div>
      expect(
        shallow(<Body layout={layout} sidenav={SideNav} />)
          .find(SideNav)
          .exists()
      ).toBe(true)
    })
  })
})
