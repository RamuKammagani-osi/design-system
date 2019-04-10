import React from 'react'
import { mount } from 'enzyme'
import RolodexPanel from './RolodexPanel'

describe('RolodexPanel', () => {
  it('exists', () => {
    expect(!!RolodexPanel).toBeDefined()
  })
  it('expands and collapses', () => {
    const setAnimationStateSpy = jest.spyOn(
      RolodexPanel.prototype,
      'setAnimationState'
    )
    const wrapper = mount(
      <RolodexPanel headerId="test-header" panelId="test-panel">
        Hello World
      </RolodexPanel>
    )
    expect(setAnimationStateSpy).toHaveBeenCalledTimes(0)
    wrapper.setProps({ isOpen: true })
    expect(setAnimationStateSpy).toHaveBeenCalledTimes(1)
    expect(setAnimationStateSpy).toHaveBeenCalledWith('entered')
    wrapper.setProps({ isOpen: false })
    expect(setAnimationStateSpy).toHaveBeenCalledTimes(2)
    expect(setAnimationStateSpy).toHaveBeenCalledWith('exited')
    setAnimationStateSpy.mockRestore()
  })
  it('animates expand and collapse', () => {
    const setAnimationStateSpy = jest.spyOn(
      RolodexPanel.prototype,
      'setAnimationState'
    )
    const wrapper = mount(
      <RolodexPanel animate headerId="test-header" panelId="test-panel">
        Hello World
      </RolodexPanel>
    )
    expect(setAnimationStateSpy).toHaveBeenCalledTimes(0)
    wrapper.setProps({ isOpen: true })
    expect(setAnimationStateSpy).toHaveBeenCalledTimes(1)
    expect(setAnimationStateSpy).toHaveBeenCalledWith('entering')
    wrapper.setProps({ isOpen: false })
    expect(setAnimationStateSpy).toHaveBeenCalledTimes(2)
    expect(setAnimationStateSpy).toHaveBeenCalledWith('exiting')
    setAnimationStateSpy.mockRestore()
  })
})
