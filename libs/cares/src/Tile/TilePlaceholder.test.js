import React from 'react'
import { shallow } from 'enzyme'
import TilePlaceholder from './Tile'

describe('TilePlaceholder', () => {
  it('renders', () => {
    expect(() => shallow(<TilePlaceholder />)).not.toThrow()
  })
})
