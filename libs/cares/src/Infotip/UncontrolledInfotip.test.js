import React from 'react'
import { shallow } from 'enzyme'
import UncontolledInfotip from './UncontrolledInfotip'

describe('Infotip', () => {
  it('renders', () => {
    const wrapper = shallow(
      <UncontolledInfotip id="myId">Hello</UncontolledInfotip>
    )
    expect(!!wrapper).toBe(true)
  })
})
