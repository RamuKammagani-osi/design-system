import React from 'react'
import { shallow } from 'enzyme'
import FormField, { RequiredIndicator } from './FormField'
import { Label, FormText, FormFeedback } from '../'
import { Icon } from '@cwds/icons'

describe('FormField', () => {
  it('renders a label', () => {
    const LABEL = 'My Label'
    const ID = 'my-id'
    const wrapper = shallow(<FormField id={ID} label={LABEL} />)
    expect(
      wrapper
        .find(Label)
        .children()
        .text()
    ).toEqual(LABEL)
  })
  it('associates the label and control element', () => {
    const LABEL = 'My Label'
    const ID = 'my-id'
    const wrapper = shallow(<FormField id={ID} label={LABEL} />)
    expect(wrapper.find(Label).prop('htmlFor')).toEqual(ID)
    expect(wrapper.find(FormField.defaultProps.Component).prop('id')).toEqual(
      ID
    )
  })
  it('includes the RequiredIndicator', () => {
    const wrapper = shallow(<FormField required label="Some Label" />)
    expect(wrapper.find(RequiredIndicator).length).toBe(1)
  })
  /** @todo: one component per module plz */
  it('has a RequiredIndicator', () => {
    const wrapper = shallow(<RequiredIndicator />)
    expect(wrapper.text()).toBe('*')
  })
  it('renders HelpText', () => {
    const HELP_TEXT = 'Some help text!'
    const wrapper = shallow(<FormField label="My Label" helpText={HELP_TEXT} />)
    expect(
      wrapper
        .find(FormText)
        .children()
        .text()
    ).toBe(HELP_TEXT)
  })
  it('shows invalid feedback', () => {
    const wrapper = shallow(
      <FormField label="My Label" touched={true} error="Oh noes..." />
    )
    const formFeedback = wrapper.find(FormFeedback)
    expect(formFeedback.hasClass('InvalidFeedback')).toBe(true)
    expect(formFeedback.childAt(0).type()).toBe(Icon)
    expect(formFeedback.childAt(0).prop('name')).toBe('exclamation-triangle')
    expect(formFeedback.childAt(1).text()).toBe('Oh noes...')
  })
  it('does not show feedback unless touched', () => {
    const wrapper = shallow(
      <FormField label="My Label" touched={false} error="Oh noes..." />
    )
    expect(wrapper.find(FormFeedback).length).toBe(0)
  })
  it('passes onChange eventHandler to the control', () => {
    const myChangeHandler = jest.fn()
    const wrapper = shallow(
      <FormField label="My Label" onChange={myChangeHandler} />
    )
    expect(
      wrapper.find(FormField.defaultProps.Component).prop('onChange')
    ).toBe(myChangeHandler)
  })
  it('passes onBlur eventHandler to the control', () => {
    const myBlurHandler = jest.fn()
    const wrapper = shallow(
      <FormField label="My Label" onBlur={myBlurHandler} />
    )
    expect(wrapper.find(FormField.defaultProps.Component).prop('onBlur')).toBe(
      myBlurHandler
    )
  })
  describe('default props', () => {
    it('onChange is a no-op', () => {
      expect(FormField.defaultProps.onChange()).toEqual(undefined)
    })
    it('onBlur is a no-op', () => {
      expect(FormField.defaultProps.onBlur()).toEqual(undefined)
    })
  })
})
