import React, { Fragment } from 'react'
import cn from 'classnames'
import { Badge } from '@cwds/components'
import DS from '@cwds/core'

const colorProps = Object.keys(DS.themeColors).map(color => ({ color }))

const pillProps = [{}, { pill: true }]

const renderFns = [
  props => <Badge {...props}>{props.color}</Badge>,
  props => (
    <Fragment>
      {['h1', 'h2', 'h3', 'h4', 'h5'].map((Tag, i) => (
        <Tag key={i}>
          Heading {Tag} <Badge {...props}>{props.color}</Badge>
        </Tag>
      ))}
    </Fragment>
  ),
]

const badgeInstances = (
  <Fragment>
    {renderFns.map(renderFn =>
      pillProps.map((pillProp, i) =>
        colorProps.map((colorProp, j) => (
          <div className="mb-1" key={`${i}${j}`}>
            {renderFn({ ...pillProp, ...colorProp })}
          </div>
        ))
      )
    )}
  </Fragment>
)

const BadgeSplats = () => {
  return (
    <div>
      {['white', ...Object.keys(DS.themeColors)].map(color => (
        <div key={color} className={cn('p-2', `bg-${color}`)}>
          {badgeInstances}
        </div>
      ))}
    </div>
  )
}

export default BadgeSplats
