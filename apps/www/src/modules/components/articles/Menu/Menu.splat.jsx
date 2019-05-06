import React, { Fragment } from 'react'
import { UncontrolledMenu as Menu, MenuItem } from '@cwds/components'
import { SplatFactory } from '@cwds/docs'

const children = (
  <Fragment>
    <MenuItem>Foo</MenuItem>
    <MenuItem>Bar</MenuItem>
    <MenuItem>Quo</MenuItem>
  </Fragment>
)

const ComponentWrapper = props => (
  <div className="my-2">
    <Menu {...props} />
  </div>
)

const options = [
  ['primary', [true, false]],
  ['size', ['sm', 'md', 'lg']],
  ['caret', [true, false]],
  ['label', ['Some Label', undefined]],
  ['icon', [undefined, 'cog']],
  ['children', [children]],
]

export default () => (
  <SplatFactory options={options} component={ComponentWrapper} />
)
