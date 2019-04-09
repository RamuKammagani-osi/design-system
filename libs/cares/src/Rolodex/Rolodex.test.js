import React from 'react'
import { mount } from 'enzyme'
import Rolodex from './Rolodex'
import RolodexPanel from './RolodexPanel'
import { Card, CardHeader, CardBody, Util } from '@cwds/reactstrap'
const { keyCodes } = Util

describe('Rolodex', () => {
  it('exists', () => {
    expect(!!Rolodex).toBeDefined()
  })
  describe('composition errors', () => {
    it('throws when no children are found', () => {
      const quiet = jest
        .spyOn(global.console, 'error')
        .mockImplementation(() => {})
      expect(() => {
        mount(<Rolodex />)
      }).toThrow()
      quiet.mockRestore()
    })
    it('throws when children are not Cards', () => {
      const quiet = jest
        .spyOn(global.console, 'error')
        .mockImplementation(() => {})
      expect(() =>
        mount(
          <Rolodex>
            <Card>
              <CardHeader>Good</CardHeader>
              <CardBody>Good</CardBody>
            </Card>
            <div>Bad</div>
          </Rolodex>
        )
      ).toThrowError()
      quiet.mockRestore()
    })
    it('throws when Card descendent are not CardHeader, CardBody, or CardFooter', () => {
      const quiet = jest
        .spyOn(global.console, 'error')
        .mockImplementation(() => {})
      expect(() =>
        mount(
          <Rolodex>
            <Card>
              <CardHeader>Good</CardHeader>
              <CardBody>Good</CardBody>
              <div>No Good</div>
            </Card>
          </Rolodex>
        )
      ).toThrowError()
      quiet.mockRestore()
    })
  })
  describe('basic interactions', () => {
    let wrapper = mount(<div />) // initialize to a :wrapper for type support

    beforeEach(() => {
      wrapper = mount(
        <Rolodex>
          <Card key="one">
            <CardHeader id="header-one">One Header</CardHeader>
            <CardBody id="body-one">One Body</CardBody>
          </Card>
          <Card key="two">
            <CardHeader id="header-two">Two Header</CardHeader>
            <CardBody id="body-two">Two Body</CardBody>
          </Card>
        </Rolodex>
      )
    })
    it('renders Cards', () => {
      expect(wrapper.find(Card).length).toBe(2)
      expect(wrapper.find(CardHeader).length).toBe(2)
      expect(wrapper.find(CardBody).length).toBe(2)
    })
    it('renders aria attributes', () => {
      expect(wrapper.find('div[role="button"]').length).toBe(2)
      const node = wrapper.find('div[role="button"]').first()
      expect(node.getDOMNode().getAttribute('aria-controls')).toBeDefined()
      expect(node.getDOMNode().getAttribute('aria-expanded')).toBe('false')
      expect(node.getDOMNode().getAttribute('tabIndex')).toBe('0')
    })
    it('expands on click', () => {
      const toggleCardSpy = jest.spyOn(Rolodex.prototype, 'toggleCard')
      const wrapper = mount(
        <Rolodex>
          <Card>
            <CardHeader>test header</CardHeader>
            <CardBody>test body</CardBody>
          </Card>
        </Rolodex>
      )
      const el = wrapper.find('div[role="button"]').first()
      expect(el.prop('onClick')).toBeDefined()
      expect(toggleCardSpy).not.toHaveBeenCalled()
      el.hostNodes().simulate('click')
      expect(Rolodex.prototype.toggleCard.mock.calls.length).toBe(1)
      toggleCardSpy.mockRestore()
    })
    it('may have many open panels', () => {
      const wrapper = mount(
        <Rolodex>
          <Card key="a">
            <CardHeader x-test="a-header">Test</CardHeader>
            <CardBody x-test="a-body">Test</CardBody>
          </Card>
          <Card key="b">
            <CardHeader x-test="b-header">Test</CardHeader>
            <CardBody x-test="b-body">Test</CardBody>
          </Card>
          <Card key="c">
            <CardHeader x-test="c-header">Test</CardHeader>
            <CardBody x-test="c-body">Test</CardBody>
          </Card>
        </Rolodex>
      )

      wrapper
        .find('div[role="button"]')
        .first()
        .simulate('click')

      expect(
        wrapper
          .find(RolodexPanel)
          .first()
          .prop('isOpen')
      ).toBe(true)
      expect(
        wrapper
          .find(RolodexPanel)
          .last()
          .prop('isOpen')
      ).toBe(false)

      wrapper
        .find('div[role="button"]')
        .last()
        .simulate('click')

      expect(
        wrapper
          .find(RolodexPanel)
          .first()
          .prop('isOpen')
      ).toBe(true)
      expect(
        wrapper
          .find(RolodexPanel)
          .last()
          .prop('isOpen')
      ).toBe(true)
    })
    it('toggles on enter/space', () => {
      const handleKeyDownSpy = jest.spyOn(Rolodex.prototype, 'handleKeyDown')
      const toggleCardSpy = jest.spyOn(Rolodex.prototype, 'toggleCard')

      const wrapper = mount(
        <Rolodex>
          <Card key="a">
            <CardHeader id="a-header">test header</CardHeader>
            <CardBody id="a-body">test body</CardBody>
          </Card>
        </Rolodex>
      )
      const el = wrapper.find('div[role="button"]').first()

      expect(toggleCardSpy).not.toHaveBeenCalled()
      expect(handleKeyDownSpy).not.toHaveBeenCalled()

      // Must mock the event#target#click b/c enzyme doesnt do this you you
      el.hostNodes().simulate('keydown', {
        which: keyCodes.enter,
        target: { click: () => el.hostNodes().simulate('click') },
      })

      expect(handleKeyDownSpy).toHaveBeenCalledTimes(1)
      expect(toggleCardSpy).toHaveBeenCalledTimes(1)

      el.hostNodes().simulate('keydown', {
        which: keyCodes.enter,
        target: { click: () => el.hostNodes().simulate('click') },
      })
      el.hostNodes().simulate('keydown', {
        which: keyCodes.space,
        target: { click: () => el.hostNodes().simulate('click') },
      })
      el.hostNodes().simulate('keydown', {
        which: keyCodes.space,
        target: { click: () => el.hostNodes().simulate('click') },
      })

      expect(handleKeyDownSpy).toHaveBeenCalledTimes(4)
      expect(toggleCardSpy).toHaveBeenCalledTimes(4)

      toggleCardSpy.mockRestore()
      handleKeyDownSpy.mockRestore()
    })
    it('does does nothing when unhandled keyDown events are received', () => {
      const handleKeyDownSpy = jest.spyOn(Rolodex.prototype, 'handleKeyDown')
      const wrapper = mount(
        <Rolodex>
          <Card key="a">
            <CardHeader data-test="a-header">test header</CardHeader>
            <CardBody data-test="a-body">test body</CardBody>
          </Card>
        </Rolodex>
      )
      const cardHeaderEl = wrapper.find('[data-test="a-header"]').hostNodes()
      expect(cardHeaderEl.length).toBe(1)
      expect(cardHeaderEl.prop('role')).toEqual('button')
      expect(handleKeyDownSpy).toHaveBeenCalledTimes(0)
      cardHeaderEl.simulate('keydown', { which: keyCodes.esc })
      expect(handleKeyDownSpy).toHaveBeenCalledTimes(1)
      handleKeyDownSpy.mockRestore()
    })
    it('cycles focused [role="button"] on up/down arrow keyDown', () => {
      const handleKeyDownSpy = jest.spyOn(Rolodex.prototype, 'handleKeyDown')
      const setFocusSpy = jest.spyOn(Rolodex.prototype, 'setFocus')
      const wrapper = mount(
        <Rolodex>
          <Card key="a">
            <CardHeader x-test="a-header">test header</CardHeader>
            <CardBody x-test="a-body">test body</CardBody>
          </Card>
          <Card key="b">
            <CardHeader x-test="b-header">test header</CardHeader>
            <CardBody x-test="b-body">test body</CardBody>
          </Card>
        </Rolodex>
      )

      wrapper
        .find('[x-test="a-header"][role="button"]')
        .hostNodes()
        .first()
        .simulate('keydown', { which: keyCodes.down })

      expect(handleKeyDownSpy).toHaveBeenCalledTimes(1)
      expect(setFocusSpy).toHaveBeenCalledTimes(1)
      expect(setFocusSpy).toHaveBeenCalledWith(1)

      wrapper
        .find('[x-test="b-header"][role="button"]')
        .hostNodes()
        .first()
        .simulate('keydown', { which: keyCodes.up })

      expect(handleKeyDownSpy).toHaveBeenCalledTimes(2)
      expect(setFocusSpy).toHaveBeenCalledTimes(2)
      expect(setFocusSpy).toHaveBeenCalledWith(0)

      handleKeyDownSpy.mockRestore()
      setFocusSpy.mockRestore()
    })
    it('cycles focused [role="button"] on ctrl+p/ctrl+n keyDown', () => {
      const handleKeyDownSpy = jest.spyOn(Rolodex.prototype, 'handleKeyDown')
      const setFocusSpy = jest.spyOn(Rolodex.prototype, 'setFocus')
      const wrapper = mount(
        <Rolodex>
          <Card key="a">
            <CardHeader x-test="a-header">test header</CardHeader>
            <CardBody x-test="a-body">test body</CardBody>
          </Card>
          <Card key="b">
            <CardHeader x-test="b-header">test header</CardHeader>
            <CardBody x-test="b-body">test body</CardBody>
          </Card>
        </Rolodex>
      )

      wrapper
        .find('[x-test="a-header"][role="button"]')
        .hostNodes()
        .first()
        .simulate('keydown', { which: 78, ctrlKey: true }) // ctrl+n

      expect(handleKeyDownSpy).toHaveBeenCalledTimes(1)
      expect(setFocusSpy).toHaveBeenCalledTimes(1)
      expect(setFocusSpy).toHaveBeenCalledWith(1)

      wrapper
        .find('[x-test="b-header"][role="button"]')
        .hostNodes()
        .first()
        .simulate('keydown', { which: 80, ctrlKey: true }) // ctrl+p

      expect(handleKeyDownSpy).toHaveBeenCalledTimes(2)
      expect(setFocusSpy).toHaveBeenCalledTimes(2)
      expect(setFocusSpy).toHaveBeenCalledWith(0)

      handleKeyDownSpy.mockRestore()
      setFocusSpy.mockRestore()
    })
    it('moves focus to the first [role="button"] when advancing from the last', () => {
      const setFocusSpy = jest.spyOn(Rolodex.prototype, 'setFocus')
      const wrapper = mount(
        <Rolodex>
          <Card key="a">
            <CardHeader x-test="a-header">Test</CardHeader>
            <CardBody x-test="a-body">Test</CardBody>
          </Card>
          <Card key="b">
            <CardHeader x-test="b-header">Test</CardHeader>
            <CardBody x-test="b-body">Test</CardBody>
          </Card>
          <Card key="c">
            <CardHeader x-test="c-header">Test</CardHeader>
            <CardBody x-test="c-body">Test</CardBody>
          </Card>
        </Rolodex>
      )

      expect(setFocusSpy).toHaveBeenCalledTimes(0)

      wrapper
        .find('[x-test="c-header"][role="button"]')
        .hostNodes()
        .first()
        .simulate('keydown', { which: keyCodes.down })

      expect(setFocusSpy).toHaveBeenCalledTimes(1)
      expect(setFocusSpy).toHaveBeenCalledWith(0)

      setFocusSpy.mockRestore()
    })
    it('moves to the last [role="button"] when moving backwards from the first', () => {
      const setFocusSpy = jest.spyOn(Rolodex.prototype, 'setFocus')
      const wrapper = mount(
        <Rolodex>
          <Card key="a">
            <CardHeader x-test="a-header">Test</CardHeader>
            <CardBody x-test="a-body">Test</CardBody>
          </Card>
          <Card key="b">
            <CardHeader x-test="b-header">Test</CardHeader>
            <CardBody x-test="b-body">Test</CardBody>
          </Card>
          <Card key="c">
            <CardHeader x-test="c-header">Test</CardHeader>
            <CardBody x-test="c-body">Test</CardBody>
          </Card>
        </Rolodex>
      )

      expect(setFocusSpy).toHaveBeenCalledTimes(0)

      wrapper
        .find('[x-test="a-header"][role="button"]')
        .hostNodes()
        .first()
        .simulate('keydown', { which: keyCodes.up })

      expect(setFocusSpy).toHaveBeenCalledTimes(1)
      expect(setFocusSpy).toHaveBeenCalledWith(2)

      setFocusSpy.mockRestore()
    })
  })
  describe('exclusive', () => {
    it('closes all other panels when a new header is activated', () => {
      const wrapper = mount(
        <Rolodex exclusive>
          <Card key="a">
            <CardHeader x-test="a-header">Test</CardHeader>
            <CardBody x-test="a-body">Test</CardBody>
          </Card>
          <Card key="b">
            <CardHeader x-test="b-header">Test</CardHeader>
            <CardBody x-test="b-body">Test</CardBody>
          </Card>
          <Card key="c">
            <CardHeader x-test="c-header">Test</CardHeader>
            <CardBody x-test="c-body">Test</CardBody>
          </Card>
        </Rolodex>
      )

      wrapper
        .find('div[role="button"]')
        .first()
        .simulate('click')

      expect(
        wrapper
          .find(RolodexPanel)
          .first()
          .prop('isOpen')
      ).toBe(true)
      expect(
        wrapper
          .find(RolodexPanel)
          .last()
          .prop('isOpen')
      ).toBe(false)

      wrapper
        .find('div[role="button"]')
        .last()
        .simulate('click')

      expect(
        wrapper
          .find(RolodexPanel)
          .first()
          .prop('isOpen')
      ).toBe(false)
      expect(
        wrapper
          .find(RolodexPanel)
          .last()
          .prop('isOpen')
      ).toBe(true)
    })
  })
})
