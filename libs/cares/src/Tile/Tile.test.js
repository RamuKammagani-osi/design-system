import React, { Fragment } from 'react'
import { shallow } from 'enzyme'
import { CardTitle } from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'
import Tile from './Tile'
import { UncontrolledMenu as Menu, MenuItem } from '../Menu'

describe('Tile', () => {
  it('renders', () => {
    expect(() => shallow(<Tile />)).not.toThrow()
  })

  it('accepts a string icon prop', () => {
    const wrapper = shallow(<Tile icon="foo" />)
    expect(wrapper.find(Icon).prop('name')).toBe('foo')
  })

  it('accepts an Icon declaration', () => {
    const wrapper = shallow(<Tile Icon={<Icon name="my-icon" />} />)
    expect(wrapper.find(Icon).length).toBe(1)
  })

  it('accepts a string title', () => {
    const wrapper = shallow(<Tile title="my title" />)
    expect(wrapper.find(CardTitle).length).toBe(1)
    expect(wrapper.find(CardTitle).prop('children')).toContain('my title')
  })

  it('does not render a Menu by default', () => {
    const wrapper = shallow(<Tile />)
    expect(wrapper.find(Menu).length).toBe(0)
  })

  describe('MenuItems prop', () => {
    it('accepts a react node', () => {
      const wrapper = shallow(
        <Tile
          MenuItems={
            <Fragment>
              <MenuItem>Foo</MenuItem>
              <MenuItem>Bar</MenuItem>
              <MenuItem>Quo</MenuItem>
            </Fragment>
          }
        />
      )
      expect(wrapper.find(MenuItem).length).toBe(3)
    })

    it('accepts an array of react nodes', () => {
      const wrapper = shallow(
        <Tile
          MenuItems={[
            <MenuItem key="foo">Foo</MenuItem>,
            <MenuItem key="bar">Bar</MenuItem>,
            <MenuItem key="quo">Quo</MenuItem>,
          ]}
        />
      )
      expect(wrapper.find(MenuItem).length).toBe(3)
    })
  })
})
