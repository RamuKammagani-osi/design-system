import React from 'react'
import {
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Button,
  Icon,
  IconButton,
} from '@cwds/components'
import { SplatFactory } from '@cwds/docs'

const commonOptions = [
  ['size', ['sm', 'md', 'lg']],
  ['active', [undefined, true]],
  ['className', [undefined, 'focus']],
  ['disabled', [undefined, true]],
]

const buttonOptions = [
  ['primary', [undefined, true]],
  ['children', ['My Button']],
  ...commonOptions,
]

const myIconElement = <Icon name="bell" size="sm" />

const iconButtonOptions = [
  ['icon', [undefined, 'cog', myIconElement]],
  ['aria-label', ['some label']],
  ...commonOptions,
]

const spacedSplat = Component => props => (
  <div className="mb-2">
    <Component {...props} />
  </div>
)

export default () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
        </CardHeader>
        <CardBody>
          <SplatFactory
            component={spacedSplat(Button)}
            options={buttonOptions}
          />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>IconButtons</CardTitle>
        </CardHeader>
        <CardBody>
          <SplatFactory
            component={spacedSplat(IconButton)}
            options={iconButtonOptions}
          />
        </CardBody>
      </Card>
    </div>
  )
}
