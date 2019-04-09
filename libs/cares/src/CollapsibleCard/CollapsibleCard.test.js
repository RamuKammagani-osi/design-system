import React from 'react'
import { mount } from 'enzyme'
import {
  Collapse,
  CardBody,
  CardHeader,
  CardFooter,
  Util,
} from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'
import CollapsibleCard from './CollapsibleCard'

describe('CollapsibleCard', () => {
  it('renders', () => {
    const wrapper = mount(
      <CollapsibleCard>
        <CardHeader>CardHeader</CardHeader>
        <CardBody>CardBody</CardBody>
        <CardFooter>CardFooter</CardFooter>
      </CollapsibleCard>
    )
    expect(wrapper.find(Collapse).length).toBe(1)
    expect(wrapper.find(Icon).prop('rotation')).toBe(Util.ROTATION.FLIP)
  })

  it('collapses', () => {
    const wrapper = mount(
      <CollapsibleCard isOpen={false}>
        <CardHeader>CardHeader</CardHeader>
        <CardBody>CardBody</CardBody>
        <CardFooter>CardFooter</CardFooter>
      </CollapsibleCard>
    )
    expect(wrapper.find(Icon).prop('rotation')).toBeFalsy()
  })
})
