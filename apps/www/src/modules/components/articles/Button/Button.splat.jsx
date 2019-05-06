import React from 'react'
import { Card, CardTitle, CardBody, CardHeader, Button } from '@cwds/components'
import { SplatFactory } from '@cwds/docs'

const PROP_OPTIONS = [
  ['primary', [undefined, true]],
  ['size', ['sm', 'md', 'lg']],
  ['active', [undefined, true]],
  ['className', [undefined, 'focus']],
  ['children', ['My Button']],
  ['disabled', [undefined, true]],
]

const ButtonSplat = props => (
  <div className="mb-2">
    <Button {...props} />
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
          <SplatFactory component={ButtonSplat} options={PROP_OPTIONS} />
        </CardBody>
      </Card>
    </div>
  )
}
