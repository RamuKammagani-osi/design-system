import React from 'react'
import { Alert } from '@cwds/components'

const colorProps = Alert.COLORS.map(color => ({ color }))

const toggleProps = [{}, { toggle: () => {} }]

const childrenProps = [
  ({ color }) => `Short bit of text (${color})`,
  ({ color, toggle }) => (
    <div>
      <div className="h3">Long bit of Text ({color})</div>
      <p>Arbitrary DOM is allowed too! Like h3&apos;s and this paragraph.</p>
      <p className="mb-0">
        We may not ever utilize this feature... but the overflow behavior should
        be visible now with all this block-level content. What is does the
        alignment of the icon and the close button look?
      </p>
    </div>
  ),
]

const AlertSplats = () => {
  return (
    <div>
      {colorProps.map((colorProp, i) =>
        toggleProps.map((toggleProp, j) =>
          childrenProps.map((childrenProp, k) => (
            <Alert key={`${i}${j}${k}`} {...colorProp} {...toggleProp}>
              {childrenProp({ ...colorProp, ...toggleProp })}
            </Alert>
          ))
        )
      )}
    </div>
  )
}

export default AlertSplats
